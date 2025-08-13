export declare class ReadingPlanResponseDto {
    id: string;
    userId: string;
    title: string;
    description: string | null;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    daysElapsed: number;
    daysRemaining: number;
    progressPercentage: number;
}
export declare class ReadingProgressDto {
    id: string;
    readingPlanId: string;
    userId: string;
    verseId: string;
    completedAt: Date | null;
    createdAt: Date;
}
export declare class ReadingPlanWithProgressDto extends ReadingPlanResponseDto {
    progress: ReadingProgressDto[];
}
export declare class ReadingPlanListResponseDto {
    plans: ReadingPlanResponseDto[];
    total: number;
    activeCount: number;
    completedCount: number;
}
export declare class ReadingPlanTestExamples {
    activePlan: ReadingPlanResponseDto;
    completedPlan: ReadingPlanResponseDto;
}
