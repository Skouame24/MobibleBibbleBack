export declare class ApiResponseDto<T> {
    success: boolean;
    data: T;
    message?: string;
    timestamp: string;
}
export declare class PaginatedResponseDto<T> extends ApiResponseDto<T[]> {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}
export declare class ErrorResponseDto {
    success: boolean;
    message: string;
    error: string;
    statusCode: number;
    timestamp: string;
}
