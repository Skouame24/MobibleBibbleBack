import { BibleService } from './bible.service';
export declare class BibleController {
    private readonly bibleService;
    constructor(bibleService: BibleService);
    getBooks(): Promise<import("../types/api-bible.types").BibleBook[]>;
    getChapter(bookId: string, chapterNumber: number): Promise<import("../types/api-bible.types").BibleChapter>;
    getVerse(verseId: string): Promise<import("../types/api-bible.types").BibleVerse>;
    searchVerses(query: string): Promise<import("../types/api-bible.types").BibleSearchResult>;
}
