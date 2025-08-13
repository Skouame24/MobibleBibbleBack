export declare class NoteResponseDto {
    id: string;
    userId: string;
    verseId: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    bookName: string;
    chapterNumber: number;
    verseNumber: number;
    verseText: string;
}
export declare class NoteListResponseDto {
    notes: NoteResponseDto[];
    total: number;
    verseNotesCount: number;
}
export declare class NoteTestExamples {
    theologicalNote: NoteResponseDto;
    memorizationNote: NoteResponseDto;
}
