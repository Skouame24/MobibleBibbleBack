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
exports.HighlightTestExamples = exports.HighlightStatsDto = exports.HighlightListResponseDto = exports.HighlightResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class HighlightResponseDto {
}
exports.HighlightResponseDto = HighlightResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant unique du surlignage (UUID v4)',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], HighlightResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant de l\'utilisateur propriétaire du surlignage',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], HighlightResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis-1-1',
        description: 'Identifiant du verset surligné',
        pattern: '^[a-z]+-[0-9]+-[0-9]+$'
    }),
    __metadata("design:type", String)
], HighlightResponseDto.prototype, "verseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '#FFD700',
        description: 'Couleur du surlignage (format hexadécimal)',
        pattern: '^#[0-9A-Fa-f]{6}$',
        minLength: 7,
        maxLength: 7
    }),
    __metadata("design:type", String)
], HighlightResponseDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date de création du surlignage (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], HighlightResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-16T14:20:00Z',
        description: 'Date de dernière modification du surlignage (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], HighlightResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis',
        description: 'Livre biblique associé au surlignage',
        pattern: '^[a-z]+$'
    }),
    __metadata("design:type", String)
], HighlightResponseDto.prototype, "bookName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Numéro du chapitre associé au surlignage',
        minimum: 1,
        maximum: 150
    }),
    __metadata("design:type", Number)
], HighlightResponseDto.prototype, "chapterNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Numéro du verset associé au surlignage',
        minimum: 1,
        maximum: 999
    }),
    __metadata("design:type", Number)
], HighlightResponseDto.prototype, "verseNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Au commencement, Dieu créa les cieux et la terre.',
        description: 'Texte du verset surligné',
        minLength: 1,
        maxLength: 1000
    }),
    __metadata("design:type", String)
], HighlightResponseDto.prototype, "verseText", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'yellow',
        description: 'Nom de la couleur pour l\'affichage',
        enum: ['yellow', 'green', 'blue', 'pink', 'purple', 'orange', 'red']
    }),
    __metadata("design:type", String)
], HighlightResponseDto.prototype, "colorName", void 0);
class HighlightListResponseDto {
}
exports.HighlightListResponseDto = HighlightListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [HighlightResponseDto],
        description: 'Liste des surlignages de l\'utilisateur'
    }),
    __metadata("design:type", Array)
], HighlightListResponseDto.prototype, "highlights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 50,
        description: 'Nombre total de surlignages'
    }),
    __metadata("design:type", Number)
], HighlightListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            '#FFD700': 15,
            '#90EE90': 12,
            '#87CEEB': 8,
            '#FFC0CB': 5,
            '#DDA0DD': 4,
            '#FFA500': 3,
            '#FF6B6B': 3
        },
        description: 'Répartition des surlignages par couleur'
    }),
    __metadata("design:type", Object)
], HighlightListResponseDto.prototype, "colorDistribution", void 0);
class HighlightStatsDto {
}
exports.HighlightStatsDto = HighlightStatsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 50,
        description: 'Nombre total de surlignages'
    }),
    __metadata("design:type", Number)
], HighlightStatsDto.prototype, "totalHighlights", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 25,
        description: 'Nombre de versets surlignés'
    }),
    __metadata("design:type", Number)
], HighlightStatsDto.prototype, "uniqueVerses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 7,
        description: 'Nombre de couleurs utilisées'
    }),
    __metadata("design:type", Number)
], HighlightStatsDto.prototype, "colorsUsed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date du dernier surlignage (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], HighlightStatsDto.prototype, "lastHighlightDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            '#FFD700': 15,
            '#90EE90': 12,
            '#87CEEB': 8
        },
        description: 'Top 3 des couleurs les plus utilisées'
    }),
    __metadata("design:type", Object)
], HighlightStatsDto.prototype, "topColors", void 0);
class HighlightTestExamples {
}
exports.HighlightTestExamples = HighlightTestExamples;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '123e4567-e89b-12d3-a456-426614174000',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            verseId: 'genesis-1-1',
            color: '#FFD700',
            createdAt: '2024-01-15T10:30:00Z',
            updatedAt: '2024-01-16T14:20:00Z',
            bookName: 'genesis',
            chapterNumber: 1,
            verseNumber: 1,
            verseText: 'Au commencement, Dieu créa les cieux et la terre.',
            colorName: 'yellow'
        },
        description: 'Exemple de surlignage jaune sur la création'
    }),
    __metadata("design:type", HighlightResponseDto)
], HighlightTestExamples.prototype, "yellowHighlight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '456e7890-e89b-12d3-a456-426614174000',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            verseId: 'john-3-16',
            color: '#90EE90',
            createdAt: '2024-01-10T09:15:00Z',
            updatedAt: '2024-01-10T09:15:00Z',
            bookName: 'john',
            chapterNumber: 3,
            verseNumber: 16,
            verseText: 'Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle.',
            colorName: 'green'
        },
        description: 'Exemple de surlignage vert sur l\'amour de Dieu'
    }),
    __metadata("design:type", HighlightResponseDto)
], HighlightTestExamples.prototype, "greenHighlight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            totalHighlights: 50,
            uniqueVerses: 25,
            colorsUsed: 7,
            lastHighlightDate: '2024-01-15T10:30:00Z',
            topColors: {
                '#FFD700': 15,
                '#90EE90': 12,
                '#87CEEB': 8
            }
        },
        description: 'Exemple de statistiques de surlignages'
    }),
    __metadata("design:type", HighlightStatsDto)
], HighlightTestExamples.prototype, "highlightStats", void 0);
//# sourceMappingURL=highlight-response.dto.js.map