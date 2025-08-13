import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
export declare class TestimoniesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, createTestimonyDto: CreateTestimonyDto): Promise<{
        user: {
            id: string;
            name: string | null;
        };
    } & {
        id: string;
        userId: string;
        title: string;
        content: string;
        isPublished: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        user: {
            id: string;
            name: string | null;
        };
        _count: {
            comments: number;
            reactions: number;
        };
    } & {
        id: string;
        userId: string;
        title: string;
        content: string;
        isPublished: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findDrafts(userId: string): Promise<({
        user: {
            id: string;
            name: string | null;
        };
        _count: {
            comments: number;
            reactions: number;
        };
    } & {
        id: string;
        userId: string;
        title: string;
        content: string;
        isPublished: boolean;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            id: string;
            name: string | null;
        };
        _count: {
            comments: number;
            reactions: number;
        };
    } & {
        id: string;
        userId: string;
        title: string;
        content: string;
        isPublished: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, userId: string, updateTestimonyDto: UpdateTestimonyDto): Promise<{
        user: {
            id: string;
            name: string | null;
        };
    } & {
        id: string;
        userId: string;
        title: string;
        content: string;
        isPublished: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    publish(id: string, userId: string): Promise<{
        user: {
            id: string;
            name: string | null;
        };
    } & {
        id: string;
        userId: string;
        title: string;
        content: string;
        isPublished: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string, userId: string): Promise<void>;
}
