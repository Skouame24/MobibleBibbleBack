import { UserRole } from '@prisma/client';
export declare class UserAuthDto {
    id: string;
    email: string;
    name: string | null;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    lastLogin: Date | null;
}
export declare class LoginResponseDto {
    user: UserAuthDto;
    token: string;
}
export declare class RegisterResponseDto {
    user: UserAuthDto;
    token: string;
}
export declare class AuthTestExamples {
    loginSuccess: LoginResponseDto;
    registerSuccess: RegisterResponseDto;
}
