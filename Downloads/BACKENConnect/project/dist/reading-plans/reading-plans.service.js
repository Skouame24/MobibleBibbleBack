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
exports.ReadingPlansService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReadingPlansService = class ReadingPlansService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createReadingPlan(userId, data) {
        return this.prisma.readingPlan.create({
            data: {
                ...data,
                user: { connect: { id: userId } },
                startDate: new Date(data.startDate),
                endDate: new Date(data.endDate),
            },
            include: {
                progress: true,
            },
        });
    }
    async getReadingPlan(id) {
        const plan = await this.prisma.readingPlan.findUnique({
            where: { id },
            include: {
                progress: true,
            },
        });
        if (!plan) {
            throw new common_1.NotFoundException(`Plan de lecture avec l'ID ${id} non trouvé`);
        }
        return plan;
    }
    async getUserPlans(userId, isActive) {
        return this.prisma.readingPlan.findMany({
            where: {
                userId,
                ...(isActive !== undefined ? { isActive } : {}),
            },
            include: {
                progress: true,
            },
            orderBy: {
                startDate: 'desc',
            },
        });
    }
    async updateProgress(planId, data) {
        await this.getReadingPlan(planId);
        return this.prisma.readingProgress.create({
            data: {
                readingPlan: { connect: { id: planId } },
                verseId: data.verseId,
                userId: data.userId,
            },
        });
    }
    async deactivatePlan(id) {
        return this.prisma.readingPlan.update({
            where: { id },
            data: { isActive: false },
            include: {
                progress: true,
            },
        });
    }
};
exports.ReadingPlansService = ReadingPlansService;
exports.ReadingPlansService = ReadingPlansService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReadingPlansService);
//# sourceMappingURL=reading-plans.service.js.map