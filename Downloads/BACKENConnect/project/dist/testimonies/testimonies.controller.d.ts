import { TestimoniesService } from './testimonies.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { RequestWithUser } from 'src/types/request.types';
export declare class TestimoniesController {
    private readonly testimoniesService;
    constructor(testimoniesService: TestimoniesService);
    create(req: RequestWithUser, createTestimonyDto: CreateTestimonyDto): Promise<{
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
    findDrafts(req: RequestWithUser): Promise<({
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
    update(id: string, req: RequestWithUser, updateTestimonyDto: UpdateTestimonyDto): Promise<{
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
    publish(id: string, req: RequestWithUser): Promise<{
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
    remove(id: string, req: RequestWithUser): Promise<void>;
}
