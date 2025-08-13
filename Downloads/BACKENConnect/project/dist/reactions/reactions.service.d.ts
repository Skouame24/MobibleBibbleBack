import { PrismaService } from '../prisma/prisma.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
export declare class ReactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(testimonyId: string, userId: string, createReactionDto: CreateReactionDto): Promise<{
        user: {
            name: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        testimonyId: string;
        userId: string;
        type: import(".prisma/client").$Enums.ReactionType;
    }>;
    remove(testimonyId: string, userId: string): Promise<void>;
    getReactionsByTestimony(testimonyId: string): Promise<{
        total: number;
        stats: {
            type: string;
            count: number;
        }[];
        reactions: ({
            user: {
                name: string | null;
                id: string;
            };
        } & {
            id: string;
            createdAt: Date;
            testimonyId: string;
            userId: string;
            type: import(".prisma/client").$Enums.ReactionType;
        })[];
    }>;
}
