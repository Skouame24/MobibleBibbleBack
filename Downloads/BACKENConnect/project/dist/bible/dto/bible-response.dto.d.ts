export declare class BibleVerseDto {
    id: string;
    bookId: string;
    chapterId: string;
    number: number;
    text: string;
}
export declare class BibleBookDto {
    id: string;
    name: string;
    testament: 'OLD' | 'NEW';
    chapters: number;
}
export declare class BibleChapterDto {
    id: string;
    bookId: string;
    number: number;
    verses: BibleVerseDto[];
}
export declare class BibleSearchResultDto {
    verses: BibleVerseDto[];
    total: number;
}
export declare class BibleTestExamples {
    oldTestamentBook: BibleBookDto;
    newTestamentBook: BibleBookDto;
    chapterWithVerses: BibleChapterDto;
    individualVerse: BibleVerseDto;
    searchResults: BibleSearchResultDto;
}
