import { UserRole } from '@prisma/client';
export declare class UserResponseDto {
    id: string;
    email: string;
    name: string | null;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    lastLogin?: Date | null;
}
export declare class UserListResponseDto {
    users: UserResponseDto[];
    total: number;
}
export declare class UserTestExamples {
    standardUser: UserResponseDto;
    adminUser: UserResponseDto;
    anonymousUser: UserResponseDto;
}
