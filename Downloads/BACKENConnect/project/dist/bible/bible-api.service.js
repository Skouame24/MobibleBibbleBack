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
exports.BibleApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let BibleApiService = class BibleApiService {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiUrl = 'https://api.biblegateway.com/v3';
        this.apiKey = '6982926a76d588697b3c61df5e00207ad8509d35';
        this.frenchVersion = 'LSG';
    }
    async request(endpoint) {
        try {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.apiUrl}/${endpoint}`, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Accept-Language': 'fr',
                },
            }));
            return data;
        }
        catch (error) {
            throw new common_1.HttpException('Erreur lors de la récupération des données bibliques', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getBooks() {
        return [
            { id: 'GEN', name: 'Genèse', testament: 'OLD', chapters: 50 },
            { id: 'EXO', name: 'Exode', testament: 'OLD', chapters: 40 },
            { id: 'LEV', name: 'Lévitique', testament: 'OLD', chapters: 27 },
            { id: 'NUM', name: 'Nombres', testament: 'OLD', chapters: 36 },
            { id: 'DEU', name: 'Deutéronome', testament: 'OLD', chapters: 34 },
            { id: 'JOS', name: 'Josué', testament: 'OLD', chapters: 24 },
            { id: 'JDG', name: 'Juges', testament: 'OLD', chapters: 21 },
            { id: 'RUT', name: 'Ruth', testament: 'OLD', chapters: 4 },
            { id: '1SA', name: '1 Samuel', testament: 'OLD', chapters: 31 },
            { id: '2SA', name: '2 Samuel', testament: 'OLD', chapters: 24 },
            { id: '1KI', name: '1 Rois', testament: 'OLD', chapters: 22 },
            { id: '2KI', name: '2 Rois', testament: 'OLD', chapters: 25 },
            { id: '1CH', name: '1 Chroniques', testament: 'OLD', chapters: 29 },
            { id: '2CH', name: '2 Chroniques', testament: 'OLD', chapters: 36 },
            { id: 'EZR', name: 'Esdras', testament: 'OLD', chapters: 10 },
            { id: 'NEH', name: 'Néhémie', testament: 'OLD', chapters: 13 },
            { id: 'EST', name: 'Esther', testament: 'OLD', chapters: 10 },
            { id: 'JOB', name: 'Job', testament: 'OLD', chapters: 42 },
            { id: 'PSA', name: 'Psaumes', testament: 'OLD', chapters: 150 },
            { id: 'PRO', name: 'Proverbes', testament: 'OLD', chapters: 31 },
            { id: 'ECC', name: 'Ecclésiaste', testament: 'OLD', chapters: 12 },
            { id: 'SNG', name: 'Cantique des Cantiques', testament: 'OLD', chapters: 8 },
            { id: 'ISA', name: 'Ésaïe', testament: 'OLD', chapters: 66 },
            { id: 'JER', name: 'Jérémie', testament: 'OLD', chapters: 52 },
            { id: 'LAM', name: 'Lamentations', testament: 'OLD', chapters: 5 },
            { id: 'EZK', name: 'Ézéchiel', testament: 'OLD', chapters: 48 },
            { id: 'DAN', name: 'Daniel', testament: 'OLD', chapters: 12 },
            { id: 'HOS', name: 'Osée', testament: 'OLD', chapters: 14 },
            { id: 'JOL', name: 'Joël', testament: 'OLD', chapters: 3 },
            { id: 'AMO', name: 'Amos', testament: 'OLD', chapters: 9 },
            { id: 'OBA', name: 'Abdias', testament: 'OLD', chapters: 1 },
            { id: 'JON', name: 'Jonas', testament: 'OLD', chapters: 4 },
            { id: 'MIC', name: 'Michée', testament: 'OLD', chapters: 7 },
            { id: 'NAM', name: 'Nahum', testament: 'OLD', chapters: 3 },
            { id: 'HAB', name: 'Habacuc', testament: 'OLD', chapters: 3 },
            { id: 'ZEP', name: 'Sophonie', testament: 'OLD', chapters: 3 },
            { id: 'HAG', name: 'Aggée', testament: 'OLD', chapters: 2 },
            { id: 'ZEC', name: 'Zacharie', testament: 'OLD', chapters: 14 },
            { id: 'MAL', name: 'Malachie', testament: 'OLD', chapters: 4 },
            { id: 'MAT', name: 'Matthieu', testament: 'NEW', chapters: 28 },
            { id: 'MRK', name: 'Marc', testament: 'NEW', chapters: 16 },
            { id: 'LUK', name: 'Luc', testament: 'NEW', chapters: 24 },
            { id: 'JHN', name: 'Jean', testament: 'NEW', chapters: 21 },
            { id: 'ACT', name: 'Actes', testament: 'NEW', chapters: 28 },
            { id: 'ROM', name: 'Romains', testament: 'NEW', chapters: 16 },
            { id: '1CO', name: '1 Corinthiens', testament: 'NEW', chapters: 16 },
            { id: '2CO', name: '2 Corinthiens', testament: 'NEW', chapters: 13 },
            { id: 'GAL', name: 'Galates', testament: 'NEW', chapters: 6 },
            { id: 'EPH', name: 'Éphésiens', testament: 'NEW', chapters: 6 },
            { id: 'PHP', name: 'Philippiens', testament: 'NEW', chapters: 4 },
            { id: 'COL', name: 'Colossiens', testament: 'NEW', chapters: 4 },
            { id: '1TH', name: '1 Thessaloniciens', testament: 'NEW', chapters: 5 },
            { id: '2TH', name: '2 Thessaloniciens', testament: 'NEW', chapters: 3 },
            { id: '1TI', name: '1 Timothée', testament: 'NEW', chapters: 6 },
            { id: '2TI', name: '2 Timothée', testament: 'NEW', chapters: 4 },
            { id: 'TIT', name: 'Tite', testament: 'NEW', chapters: 3 },
            { id: 'PHM', name: 'Philémon', testament: 'NEW', chapters: 1 },
            { id: 'HEB', name: 'Hébreux', testament: 'NEW', chapters: 13 },
            { id: 'JAS', name: 'Jacques', testament: 'NEW', chapters: 5 },
            { id: '1PE', name: '1 Pierre', testament: 'NEW', chapters: 5 },
            { id: '2PE', name: '2 Pierre', testament: 'NEW', chapters: 3 },
            { id: '1JN', name: '1 Jean', testament: 'NEW', chapters: 5 },
            { id: '2JN', name: '2 Jean', testament: 'NEW', chapters: 1 },
            { id: '3JN', name: '3 Jean', testament: 'NEW', chapters: 1 },
            { id: 'JUD', name: 'Jude', testament: 'NEW', chapters: 1 },
            { id: 'REV', name: 'Apocalypse', testament: 'NEW', chapters: 22 }
        ];
    }
    async getChapter(bookId, chapterNumber) {
        const response = await this.request(`bibles/${this.frenchVersion}/passages/${bookId}.${chapterNumber}?include-notes=false&include-titles=false&include-verse-numbers=true`);
        const verses = response.data.content
            .split('\n')
            .filter((line) => line.trim())
            .map((verse, index) => ({
            id: `${bookId}.${chapterNumber}.${index + 1}`,
            bookId,
            chapterId: `${bookId}.${chapterNumber}`,
            number: index + 1,
            text: verse.trim(),
        }));
        return {
            id: `${bookId}.${chapterNumber}`,
            bookId,
            number: chapterNumber,
            verses,
        };
    }
    async getVerse(verseId) {
        const [bookId, chapter, verse] = verseId.split('.');
        const response = await this.request(`bibles/${this.frenchVersion}/verses/${bookId}.${chapter}.${verse}?include-notes=false&include-titles=false`);
        return {
            id: verseId,
            bookId,
            chapterId: `${bookId}.${chapter}`,
            number: parseInt(verse),
            text: response.data.content.trim(),
        };
    }
    async searchVerses(query) {
        const response = await this.request(`bibles/${this.frenchVersion}/search?query=${encodeURIComponent(query)}&limit=100`);
        return {
            total: response.data.total || 0,
            verses: (response.data.verses || []).map((result) => ({
                id: result.reference,
                bookId: result.reference.split('.')[0],
                chapterId: result.reference.split(':')[0],
                number: parseInt(result.reference.split(':')[1]),
                text: result.content,
            })),
        };
    }
};
exports.BibleApiService = BibleApiService;
exports.BibleApiService = BibleApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], BibleApiService);
//# sourceMappingURL=bible-api.service.js.map