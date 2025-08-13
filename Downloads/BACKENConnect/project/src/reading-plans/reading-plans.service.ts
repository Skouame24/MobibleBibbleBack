import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReadingPlan, ReadingProgress } from '@prisma/client';
import { CreateReadingPlanDto } from './dto/create-reading-plan.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';

@Injectable()
export class ReadingPlansService {
  constructor(private prisma: PrismaService) {}

  async createReadingPlan(userId: string, data: CreateReadingPlanDto): Promise<ReadingPlan> {
    return this.prisma.readingPlan.create({
      data: {
        ...data,
        user: { connect: { id: userId } },
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
      },
      include: {
        progress: true,
      },
    });
  }

  async getReadingPlan(id: string): Promise<ReadingPlan> {
    const plan = await this.prisma.readingPlan.findUnique({
      where: { id },
      include: {
        progress: true,
      },
    });

    if (!plan) {
      throw new NotFoundException(`Plan de lecture avec l'ID ${id} non trouvé`);
    }

    return plan;
  }

  async getUserPlans(userId: string, isActive?: boolean): Promise<ReadingPlan[]> {
    return this.prisma.readingPlan.findMany({
      where: {
        userId,
        ...(isActive !== undefined ? { isActive } : {}),
      },
      include: {
        progress: true,
      },
      orderBy: {
        startDate: 'desc',
      },
    });
  }

  async updateProgress(planId: string, data: UpdateProgressDto): Promise<ReadingProgress> {
    await this.getReadingPlan(planId);

    return this.prisma.readingProgress.create({
      data: {
        readingPlan: { connect: { id: planId } },
        verseId: data.verseId,
        userId: data.userId,
      },
    });
  }

  async deactivatePlan(id: string): Promise<ReadingPlan> {
    return this.prisma.readingPlan.update({
      where: { id },
      data: { isActive: false },
      include: {
        progress: true,
      },
    });
  }
}