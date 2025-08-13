import { BibleApiService } from './bible-api.service';
import { BibleBook, BibleChapter, BibleVerse, BibleSearchResult } from '../types/api-bible.types';
export declare class BibleService {
    private readonly bibleApiService;
    constructor(bibleApiService: BibleApiService);
    getBooks(): Promise<BibleBook[]>;
    getChapter(bookId: string, chapterNumber: number): Promise<BibleChapter>;
    getVerse(verseId: string): Promise<BibleVerse>;
    searchVerses(query: string): Promise<BibleSearchResult>;
}
