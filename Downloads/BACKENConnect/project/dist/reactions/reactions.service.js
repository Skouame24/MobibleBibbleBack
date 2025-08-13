"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReactionsService = class ReactionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(testimonyId, userId, createReactionDto) {
        const testimony = await this.prisma.testimony.findUnique({
            where: { id: testimonyId },
        });
        if (!testimony) {
            throw new common_1.NotFoundException(`Témoignage #${testimonyId} non trouvé`);
        }
        const existingReaction = await this.prisma.reaction.findUnique({
            where: {
                testimonyId_userId: {
                    testimonyId,
                    userId,
                },
            },
        });
        if (existingReaction) {
            throw new common_1.ConflictException('Vous avez déjà réagi à ce témoignage');
        }
        return this.prisma.reaction.create({
            data: {
                type: createReactionDto.type,
                testimonyId,
                userId,
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }
    async remove(testimonyId, userId) {
        const reaction = await this.prisma.reaction.findUnique({
            where: {
                testimonyId_userId: {
                    testimonyId,
                    userId,
                },
            },
        });
        if (!reaction) {
            throw new common_1.NotFoundException('Réaction non trouvée');
        }
        await this.prisma.reaction.delete({
            where: {
                testimonyId_userId: {
                    testimonyId,
                    userId,
                },
            },
        });
    }
    async getReactionsByTestimony(testimonyId) {
        const testimony = await this.prisma.testimony.findUnique({
            where: { id: testimonyId },
            include: {
                reactions: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        if (!testimony) {
            throw new common_1.NotFoundException(`Témoignage #${testimonyId} non trouvé`);
        }
        const reactionStats = testimony.reactions.reduce((acc, reaction) => {
            acc[reaction.type] = (acc[reaction.type] || 0) + 1;
            return acc;
        }, {});
        return {
            total: testimony.reactions.length,
            stats: Object.entries(reactionStats).map(([type, count]) => ({
                type,
                count,
            })),
            reactions: testimony.reactions,
        };
    }
};
exports.ReactionsService = ReactionsService;
exports.ReactionsService = ReactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReactionsService);
//# sourceMappingURL=reactions.service.js.map