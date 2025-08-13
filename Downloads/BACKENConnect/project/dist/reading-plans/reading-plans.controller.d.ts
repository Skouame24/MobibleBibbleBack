import { ReadingPlansService } from './reading-plans.service';
import { ReadingPlan, ReadingProgress } from '@prisma/client';
import { CreateReadingPlanDto } from './dto/create-reading-plan.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { RequestWithUser } from 'src/types/request.types';
export declare class ReadingPlansController {
    private readonly readingPlansService;
    constructor(readingPlansService: ReadingPlansService);
    createPlan(data: CreateReadingPlanDto, req: RequestWithUser): Promise<ReadingPlan>;
    getUserPlans(req: RequestWithUser, isActive?: boolean): Promise<ReadingPlan[]>;
    getPlan(id: string): Promise<ReadingPlan>;
    updateProgress(planId: string, data: UpdateProgressDto): Promise<ReadingProgress>;
    deactivatePlan(id: string): Promise<ReadingPlan>;
}
