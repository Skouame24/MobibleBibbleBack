import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(testimonyId: string, userId: string, createCommentDto: CreateCommentDto): Promise<{
        user: {
            name: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        userId: string;
        testimonyId: string;
    }>;
    findAllByTestimony(testimonyId: string): Promise<({
        user: {
            name: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        userId: string;
        testimonyId: string;
    })[]>;
    update(id: string, userId: string, updateCommentDto: UpdateCommentDto): Promise<{
        user: {
            name: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        content: string;
        userId: string;
        testimonyId: string;
    }>;
    remove(id: string, userId: string): Promise<void>;
}
