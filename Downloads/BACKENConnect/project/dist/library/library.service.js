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
exports.LibraryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LibraryService = class LibraryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getBooks(params) {
        const { skip, take, where } = params;
        return this.prisma.libraryBook.findMany({
            skip,
            take,
            where,
            include: {
                favorites: true,
            },
        });
    }
    async getBook(id) {
        return this.prisma.libraryBook.findUnique({
            where: { id },
            include: {
                favorites: true,
            },
        });
    }
    async createBook(data) {
        return this.prisma.libraryBook.create({
            data,
            include: {
                favorites: true,
            },
        });
    }
    async updateBook(params) {
        const { id, data } = params;
        return this.prisma.libraryBook.update({
            where: { id },
            data,
            include: {
                favorites: true,
            },
        });
    }
    async addToFavorites(data) {
        return this.prisma.libraryFavorite.create({
            data,
        });
    }
    async removeFromFavorites(bookId, userId) {
        await this.prisma.libraryFavorite.delete({
            where: {
                bookId_userId: {
                    bookId,
                    userId,
                },
            },
        });
    }
};
exports.LibraryService = LibraryService;
exports.LibraryService = LibraryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LibraryService);
//# sourceMappingURL=library.service.js.map