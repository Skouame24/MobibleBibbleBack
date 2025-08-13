import { BibleService } from './bible.service';
import { BibleBookDto, BibleChapterDto, BibleVerseDto, BibleSearchResultDto } from './dto/bible-response.dto';
export declare class BibleController {
    private readonly bibleService;
    constructor(bibleService: BibleService);
    getBooks(): Promise<BibleBookDto[]>;
    getChapter(bookId: string, chapterNumber: number): Promise<BibleChapterDto>;
    getVerse(verseId: string): Promise<BibleVerseDto>;
    searchVerses(query: string): Promise<BibleSearchResultDto>;
}
