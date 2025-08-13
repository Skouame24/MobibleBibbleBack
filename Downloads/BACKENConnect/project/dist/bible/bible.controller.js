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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BibleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const bible_service_1 = require("./bible.service");
let BibleController = class BibleController {
    constructor(bibleService) {
        this.bibleService = bibleService;
    }
    getBooks() {
        return this.bibleService.getBooks();
    }
    getChapter(bookId, chapterNumber) {
        return this.bibleService.getChapter(bookId, chapterNumber);
    }
    getVerse(verseId) {
        return this.bibleService.getVerse(verseId);
    }
    searchVerses(query) {
        return this.bibleService.searchVerses(query);
    }
};
exports.BibleController = BibleController;
__decorate([
    (0, common_1.Get)('books'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Bible books' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return list of Bible books' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BibleController.prototype, "getBooks", null);
__decorate([
    (0, common_1.Get)('books/:bookId/chapters/:chapterNumber'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific Bible chapter' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return chapter content' }),
    __param(0, (0, common_1.Param)('bookId')),
    __param(1, (0, common_1.Param)('chapterNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], BibleController.prototype, "getChapter", null);
__decorate([
    (0, common_1.Get)('verses/:verseId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific Bible verse' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return verse content' }),
    __param(0, (0, common_1.Param)('verseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BibleController.prototype, "getVerse", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search Bible verses' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return search results' }),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BibleController.prototype, "searchVerses", null);
exports.BibleController = BibleController = __decorate([
    (0, swagger_1.ApiTags)('bible'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('bible'),
    __metadata("design:paramtypes", [bible_service_1.BibleService])
], BibleController);
//# sourceMappingURL=bible.controller.js.map