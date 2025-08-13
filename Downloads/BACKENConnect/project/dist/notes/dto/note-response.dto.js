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
exports.NoteTestExamples = exports.NoteListResponseDto = exports.NoteResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class NoteResponseDto {
}
exports.NoteResponseDto = NoteResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant unique de la note (UUID v4)',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], NoteResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant de l\'utilisateur propriétaire de la note',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], NoteResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis-1-1',
        description: 'Identifiant du verset associé à la note',
        pattern: '^[a-z]+-[0-9]+-[0-9]+$'
    }),
    __metadata("design:type", String)
], NoteResponseDto.prototype, "verseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Ce verset parle de la création ex nihilo. Dieu crée à partir de rien, montrant sa puissance infinie.',
        description: 'Contenu textuel de la note personnelle',
        minLength: 1,
        maxLength: 2000
    }),
    __metadata("design:type", String)
], NoteResponseDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date de création de la note (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], NoteResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-16T14:20:00Z',
        description: 'Date de dernière modification de la note (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], NoteResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis',
        description: 'Livre biblique associé à la note',
        pattern: '^[a-z]+$'
    }),
    __metadata("design:type", String)
], NoteResponseDto.prototype, "bookName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Numéro du chapitre associé à la note',
        minimum: 1,
        maximum: 150
    }),
    __metadata("design:type", Number)
], NoteResponseDto.prototype, "chapterNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Numéro du verset associé à la note',
        minimum: 1,
        maximum: 999
    }),
    __metadata("design:type", Number)
], NoteResponseDto.prototype, "verseNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Au commencement, Dieu créa les cieux et la terre.',
        description: 'Texte du verset associé à la note',
        minLength: 1,
        maxLength: 1000
    }),
    __metadata("design:type", String)
], NoteResponseDto.prototype, "verseText", void 0);
class NoteListResponseDto {
}
exports.NoteListResponseDto = NoteListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [NoteResponseDto],
        description: 'Liste des notes de l\'utilisateur'
    }),
    __metadata("design:type", Array)
], NoteListResponseDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 25,
        description: 'Nombre total de notes'
    }),
    __metadata("design:type", Number)
], NoteListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: 'Nombre de notes pour ce verset spécifique'
    }),
    __metadata("design:type", Number)
], NoteListResponseDto.prototype, "verseNotesCount", void 0);
class NoteTestExamples {
}
exports.NoteTestExamples = NoteTestExamples;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '123e4567-e89b-12d3-a456-426614174000',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            verseId: 'genesis-1-1',
            content: 'Ce verset parle de la création ex nihilo. Dieu crée à partir de rien, montrant sa puissance infinie.',
            createdAt: '2024-01-15T10:30:00Z',
            updatedAt: '2024-01-16T14:20:00Z',
            bookName: 'genesis',
            chapterNumber: 1,
            verseNumber: 1,
            verseText: 'Au commencement, Dieu créa les cieux et la terre.'
        },
        description: 'Exemple de note théologique sur la création'
    }),
    __metadata("design:type", NoteResponseDto)
], NoteTestExamples.prototype, "theologicalNote", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '456e7890-e89b-12d3-a456-426614174000',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            verseId: 'john-3-16',
            content: 'Verset clé de l\'évangile. À mémoriser et partager.',
            createdAt: '2024-01-10T09:15:00Z',
            updatedAt: '2024-01-10T09:15:00Z',
            bookName: 'john',
            chapterNumber: 3,
            verseNumber: 16,
            verseText: 'Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle.'
        },
        description: 'Exemple de note de mémorisation'
    }),
    __metadata("design:type", NoteResponseDto)
], NoteTestExamples.prototype, "memorizationNote", void 0);
//# sourceMappingURL=note-response.dto.js.map