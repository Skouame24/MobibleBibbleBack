import { HttpService } from '@nestjs/axios';
export interface BibleBook {
    id: string;
    name: string;
    testament: 'OLD' | 'NEW';
    chapters: number;
}
export interface BibleChapter {
    id: string;
    bookId: string;
    number: number;
    verses: BibleVerse[];
}
export interface BibleVerse {
    id: string;
    bookId: string;
    chapterId: string;
    number: number;
    text: string;
}
export interface BibleSearchResult {
    total: number;
    verses: BibleVerse[];
}
export declare class BibleApiService {
    private readonly httpService;
    private readonly apiUrl;
    private readonly apiKey;
    private readonly frenchVersion;
    constructor(httpService: HttpService);
    private request;
    getBooks(): Promise<BibleBook[]>;
    getChapter(bookId: string, chapterNumber: number): Promise<BibleChapter>;
    getVerse(verseId: string): Promise<BibleVerse>;
    searchVerses(query: string): Promise<BibleSearchResult>;
}
