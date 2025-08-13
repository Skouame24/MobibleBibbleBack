export declare class HighlightResponseDto {
    id: string;
    userId: string;
    verseId: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    bookName: string;
    chapterNumber: number;
    verseNumber: number;
    verseText: string;
    colorName: string;
}
export declare class HighlightListResponseDto {
    highlights: HighlightResponseDto[];
    total: number;
    colorDistribution: Record<string, number>;
}
export declare class HighlightStatsDto {
    totalHighlights: number;
    uniqueVerses: number;
    colorsUsed: number;
    lastHighlightDate: Date;
    topColors: Record<string, number>;
}
export declare class HighlightTestExamples {
    yellowHighlight: HighlightResponseDto;
    greenHighlight: HighlightResponseDto;
    highlightStats: HighlightStatsDto;
}
