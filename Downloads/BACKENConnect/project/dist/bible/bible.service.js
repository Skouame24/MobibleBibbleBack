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
exports.BibleService = void 0;
const common_1 = require("@nestjs/common");
const bible_api_service_1 = require("./bible-api.service");
let BibleService = class BibleService {
    constructor(bibleApiService) {
        this.bibleApiService = bibleApiService;
    }
    async getBooks() {
        return this.bibleApiService.getBooks();
    }
    async getChapter(bookId, chapterNumber) {
        return this.bibleApiService.getChapter(bookId, chapterNumber);
    }
    async getVerse(verseId) {
        return this.bibleApiService.getVerse(verseId);
    }
    async searchVerses(query) {
        return this.bibleApiService.searchVerses(query);
    }
};
exports.BibleService = BibleService;
exports.BibleService = BibleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bible_api_service_1.BibleApiService])
], BibleService);
//# sourceMappingURL=bible.service.js.map