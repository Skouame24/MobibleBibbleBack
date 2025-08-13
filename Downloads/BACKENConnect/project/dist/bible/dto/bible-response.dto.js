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
exports.BibleTestExamples = exports.BibleSearchResultDto = exports.BibleChapterDto = exports.BibleBookDto = exports.BibleVerseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class BibleVerseDto {
}
exports.BibleVerseDto = BibleVerseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis-1-1',
        description: 'Identifiant unique du verset (format: livre-chapitre-verset)',
        pattern: '^[a-z]+-[0-9]+-[0-9]+$'
    }),
    __metadata("design:type", String)
], BibleVerseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis',
        description: 'Identifiant du livre biblique (en minuscules)',
        pattern: '^[a-z]+$'
    }),
    __metadata("design:type", String)
], BibleVerseDto.prototype, "bookId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis-1',
        description: 'Identifiant du chapitre parent (format: livre-chapitre)',
        pattern: '^[a-z]+-[0-9]+$'
    }),
    __metadata("design:type", String)
], BibleVerseDto.prototype, "chapterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Numéro du verset dans le chapitre',
        minimum: 1,
        maximum: 999
    }),
    __metadata("design:type", Number)
], BibleVerseDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Au commencement, Dieu créa les cieux et la terre.',
        description: 'Contenu textuel du verset (traduction LSG)',
        minLength: 1,
        maxLength: 1000
    }),
    __metadata("design:type", String)
], BibleVerseDto.prototype, "text", void 0);
class BibleBookDto {
}
exports.BibleBookDto = BibleBookDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis',
        description: 'Identifiant unique du livre biblique (en minuscules)',
        pattern: '^[a-z]+$'
    }),
    __metadata("design:type", String)
], BibleBookDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Genèse',
        description: 'Nom complet du livre biblique en français'
    }),
    __metadata("design:type", String)
], BibleBookDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['OLD', 'NEW'],
        example: 'OLD',
        description: 'Testament auquel appartient le livre (Ancien ou Nouveau)'
    }),
    __metadata("design:type", String)
], BibleBookDto.prototype, "testament", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 50,
        description: 'Nombre total de chapitres dans le livre',
        minimum: 1,
        maximum: 150
    }),
    __metadata("design:type", Number)
], BibleBookDto.prototype, "chapters", void 0);
class BibleChapterDto {
}
exports.BibleChapterDto = BibleChapterDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis-1',
        description: 'Identifiant unique du chapitre (format: livre-chapitre)',
        pattern: '^[a-z]+-[0-9]+$'
    }),
    __metadata("design:type", String)
], BibleChapterDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis',
        description: 'Identifiant du livre parent (en minuscules)',
        pattern: '^[a-z]+$'
    }),
    __metadata("design:type", String)
], BibleChapterDto.prototype, "bookId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Numéro du chapitre dans le livre',
        minimum: 1,
        maximum: 150
    }),
    __metadata("design:type", Number)
], BibleChapterDto.prototype, "number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [BibleVerseDto],
        description: 'Liste complète des versets du chapitre'
    }),
    __metadata("design:type", Array)
], BibleChapterDto.prototype, "verses", void 0);
class BibleSearchResultDto {
}
exports.BibleSearchResultDto = BibleSearchResultDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [BibleVerseDto],
        description: 'Liste des versets correspondant à la recherche'
    }),
    __metadata("design:type", Array)
], BibleSearchResultDto.prototype, "verses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 25,
        description: 'Nombre total de résultats trouvés',
        minimum: 0
    }),
    __metadata("design:type", Number)
], BibleSearchResultDto.prototype, "total", void 0);
class BibleTestExamples {
}
exports.BibleTestExamples = BibleTestExamples;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: 'genesis',
            name: 'Genèse',
            testament: 'OLD',
            chapters: 50
        },
        description: 'Exemple de livre de l\'Ancien Testament'
    }),
    __metadata("design:type", BibleBookDto)
], BibleTestExamples.prototype, "oldTestamentBook", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: 'matthew',
            name: 'Matthieu',
            testament: 'NEW',
            chapters: 28
        },
        description: 'Exemple de livre du Nouveau Testament'
    }),
    __metadata("design:type", BibleBookDto)
], BibleTestExamples.prototype, "newTestamentBook", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: 'genesis-1',
            bookId: 'genesis',
            number: 1,
            verses: [
                {
                    id: 'genesis-1-1',
                    bookId: 'genesis',
                    chapterId: 'genesis-1',
                    number: 1,
                    text: 'Au commencement, Dieu créa les cieux et la terre.'
                },
                {
                    id: 'genesis-1-2',
                    bookId: 'genesis',
                    chapterId: 'genesis-1',
                    number: 2,
                    text: 'La terre était informe et vide: il y avait des ténèbres à la surface de l\'abîme, et l\'esprit de Dieu se mouvait au-dessus des eaux.'
                }
            ]
        },
        description: 'Exemple de chapitre avec versets'
    }),
    __metadata("design:type", BibleChapterDto)
], BibleTestExamples.prototype, "chapterWithVerses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: 'genesis-1-1',
            bookId: 'genesis',
            chapterId: 'genesis-1',
            number: 1,
            text: 'Au commencement, Dieu créa les cieux et la terre.'
        },
        description: 'Exemple de verset individuel'
    }),
    __metadata("design:type", BibleVerseDto)
], BibleTestExamples.prototype, "individualVerse", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            verses: [
                {
                    id: 'genesis-1-1',
                    bookId: 'genesis',
                    chapterId: 'genesis-1',
                    number: 1,
                    text: 'Au commencement, Dieu créa les cieux et la terre.'
                },
                {
                    id: 'john-3-16',
                    bookId: 'john',
                    chapterId: 'john-3',
                    number: 16,
                    text: 'Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle.'
                }
            ],
            total: 2
        },
        description: 'Exemple de résultats de recherche'
    }),
    __metadata("design:type", BibleSearchResultDto)
], BibleTestExamples.prototype, "searchResults", void 0);
//# sourceMappingURL=bible-response.dto.js.map