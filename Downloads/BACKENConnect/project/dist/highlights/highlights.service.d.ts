import { PrismaService } from '../prisma/prisma.service';
import { CreateHighlightDto } from './dto/create-highlight.dto';
export declare class HighlightsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, createHighlightDto: CreateHighlightDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        verseId: string;
        color: string;
    }>;
    findAllByUser(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        verseId: string;
        color: string;
    }[]>;
    remove(id: string, userId: string): Promise<void>;
}
