import { HighlightsService } from './highlights.service';
import { CreateHighlightDto } from './dto/create-highlight.dto';
import { RequestWithUser } from '../types/request.types';
export declare class HighlightsController {
    private readonly highlightsService;
    constructor(highlightsService: HighlightsService);
    create(req: RequestWithUser, createHighlightDto: CreateHighlightDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        verseId: string;
        color: string;
    }>;
    findAll(req: RequestWithUser): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        verseId: string;
        color: string;
    }[]>;
    remove(req: RequestWithUser, id: string): Promise<void>;
}
