import { ReactionsService } from './reactions.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { RequestWithUser } from '../types/request.types';
export declare class ReactionsController {
    private readonly reactionsService;
    constructor(reactionsService: ReactionsService);
    create(testimonyId: string, req: RequestWithUser, createReactionDto: CreateReactionDto): Promise<{
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
    remove(testimonyId: string, req: RequestWithUser): Promise<void>;
    getReactions(testimonyId: string): Promise<{
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
