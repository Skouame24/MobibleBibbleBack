import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
type UserWithoutPassword = Omit<User, 'passwordHash'>;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<UserWithoutPassword[]>;
    findOne(id: string): Promise<UserWithoutPassword>;
    update(id: string, updateUserDto: Prisma.UserUpdateInput): Promise<UserWithoutPassword>;
    remove(id: string): Promise<void>;
}
export {};
