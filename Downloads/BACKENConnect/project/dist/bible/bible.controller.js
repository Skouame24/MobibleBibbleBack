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
const swagger_decorators_1 = require("../common/decorators/swagger.decorators");
const bible_response_dto_1 = require("./dto/bible-response.dto");
let BibleController = class BibleController {
    constructor(bibleService) {
        this.bibleService = bibleService;
    }
    async getBooks() {
        return this.bibleService.getBooks();
    }
    async getChapter(bookId, chapterNumber) {
        return this.bibleService.getChapter(bookId, chapterNumber);
    }
    async getVerse(verseId) {
        return this.bibleService.getVerse(verseId);
    }
    async searchVerses(query) {
        return this.bibleService.searchVerses(query);
    }
};
exports.BibleController = BibleController;
__decorate([
    (0, common_1.Get)('books'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Récupérer tous les livres de la Bible',
        description: 'Retourne la liste complète des livres bibliques avec leurs informations'
    }),
    (0, swagger_decorators_1.ApiSuccessResponse)(bible_response_dto_1.BibleBookDto, 'Liste des livres bibliques récupérée avec succès'),
    (0, swagger_decorators_1.ApiCommonResponses)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BibleController.prototype, "getBooks", null);
__decorate([
    (0, common_1.Get)('books/:bookId/chapters/:chapterNumber'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Récupérer un chapitre spécifique de la Bible',
        description: 'Retourne le contenu complet d\'un chapitre avec tous ses versets'
    }),
    (0, swagger_1.ApiParam)({
        name: 'bookId',
        description: 'Identifiant du livre biblique',
        example: 'genesis'
    }),
    (0, swagger_1.ApiParam)({
        name: 'chapterNumber',
        description: 'Numéro du chapitre',
        example: 1
    }),
    (0, swagger_decorators_1.ApiSuccessResponse)(bible_response_dto_1.BibleChapterDto, 'Chapitre récupéré avec succès'),
    (0, swagger_decorators_1.ApiErrorResponse)(404, 'Livre ou chapitre non trouvé', 'NOT_FOUND'),
    (0, swagger_decorators_1.ApiCommonResponses)(),
    __param(0, (0, common_1.Param)('bookId')),
    __param(1, (0, common_1.Param)('chapterNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], BibleController.prototype, "getChapter", null);
__decorate([
    (0, common_1.Get)('verses/:verseId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Récupérer un verset spécifique de la Bible',
        description: 'Retourne le contenu d\'un verset individuel'
    }),
    (0, swagger_1.ApiParam)({
        name: 'verseId',
        description: 'Identifiant unique du verset',
        example: 'genesis-1-1'
    }),
    (0, swagger_decorators_1.ApiSuccessResponse)(bible_response_dto_1.BibleVerseDto, 'Verset récupéré avec succès'),
    (0, swagger_decorators_1.ApiErrorResponse)(404, 'Verset non trouvé', 'NOT_FOUND'),
    (0, swagger_decorators_1.ApiCommonResponses)(),
    __param(0, (0, common_1.Param)('verseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BibleController.prototype, "getVerse", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Rechercher des versets dans la Bible',
        description: 'Effectue une recherche textuelle dans tous les versets de la Bible'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'query',
        description: 'Terme de recherche',
        example: 'Dieu',
        required: true
    }),
    (0, swagger_decorators_1.ApiSuccessResponse)(bible_response_dto_1.BibleSearchResultDto, 'Recherche effectuée avec succès'),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Terme de recherche manquant ou invalide',
        schema: {
            example: {
                success: false,
                message: 'Query parameter is required',
                error: 'BAD_REQUEST',
                statusCode: 400,
                timestamp: '2024-01-15T10:30:00Z'
            }
        }
    }),
    (0, swagger_decorators_1.ApiCommonResponses)(),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BibleController.prototype, "searchVerses", null);
exports.BibleController = BibleController = __decorate([
    (0, swagger_1.ApiTags)('Bible Content'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('bible'),
    __metadata("design:paramtypes", [bible_service_1.BibleService])
], BibleController);
//# sourceMappingURL=bible.controller.js.map