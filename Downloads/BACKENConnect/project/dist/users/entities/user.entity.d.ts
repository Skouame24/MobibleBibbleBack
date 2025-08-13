import { UserRole } from '@prisma/client';
export declare class User {
    id: string;
    email: string;
    name?: string;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    lastLogin?: Date;
    passwordHash: string;
}
