import { PrismaService } from '../prisma/prisma.service';
import { ReadingPlan, ReadingProgress } from '@prisma/client';
import { CreateReadingPlanDto } from './dto/create-reading-plan.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
export declare class ReadingPlansService {
    private prisma;
    constructor(prisma: PrismaService);
    createReadingPlan(userId: string, data: CreateReadingPlanDto): Promise<ReadingPlan>;
    getReadingPlan(id: string): Promise<ReadingPlan>;
    getUserPlans(userId: string, isActive?: boolean): Promise<ReadingPlan[]>;
    updateProgress(planId: string, data: UpdateProgressDto): Promise<ReadingProgress>;
    deactivatePlan(id: string): Promise<ReadingPlan>;
}
