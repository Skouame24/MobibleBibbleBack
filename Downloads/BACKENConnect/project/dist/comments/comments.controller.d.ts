import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { RequestWithUser } from '../types/request.types';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(testimonyId: string, req: RequestWithUser, createCommentDto: CreateCommentDto): Promise<{
        user: {
            name: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        testimonyId: string;
        content: string;
    }>;
    findAll(testimonyId: string): Promise<({
        user: {
            name: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        testimonyId: string;
        content: string;
    })[]>;
    update(id: string, req: RequestWithUser, updateCommentDto: UpdateCommentDto): Promise<{
        user: {
            name: string | null;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        testimonyId: string;
        content: string;
    }>;
    remove(id: string, req: RequestWithUser): Promise<void>;
}
