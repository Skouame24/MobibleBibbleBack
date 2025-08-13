import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Patch,
  Query,
  Req,
} from '@nestjs/common';
import { ReadingPlansService } from './reading-plans.service';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { ReadingPlan, ReadingProgress } from '@prisma/client';
import { CreateReadingPlanDto } from './dto/create-reading-plan.dto';
import { UpdateProgressDto } from './dto/update-progress.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RequestWithUser } from 'src/types/request.types';

@ApiTags('Plans de lecture')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('reading-plans')
export class ReadingPlansController {
  constructor(private readonly readingPlansService: ReadingPlansService) {}

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau plan de lecture' })
  async createPlan(
    @Body() data: CreateReadingPlanDto,
    @Req() req: RequestWithUser,
  ): Promise<ReadingPlan> {
    return this.readingPlansService.createReadingPlan(req.user.id, data);
  }

  @Get('user')
  @ApiOperation({ summary: 'Obtenir les plans de lecture de l\'utilisateur' })
  @ApiQuery({ name: 'isActive', required: false, type: Boolean })
  async getUserPlans(
    @Req() req: RequestWithUser,
    @Query('isActive') isActive?: boolean,
  ): Promise<ReadingPlan[]> {
    return this.readingPlansService.getUserPlans(req.user.id, isActive);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtenir un plan de lecture spécifique' })
  async getPlan(@Param('id') id: string): Promise<ReadingPlan> {
    return this.readingPlansService.getReadingPlan(id);
  }

  @Post(':id/progress')
  @ApiOperation({ summary: 'Mettre à jour la progression d\'un plan de lecture' })
  async updateProgress(
    @Param('id') planId: string,
    @Body() data: UpdateProgressDto,
  ): Promise<ReadingProgress> {
    return this.readingPlansService.updateProgress(planId, data);
  }

  @Patch(':id/deactivate')
  @ApiOperation({ summary: 'Désactiver un plan de lecture' })
  async deactivatePlan(@Param('id') id: string): Promise<ReadingPlan> {
    return this.readingPlansService.deactivatePlan(id);
  }
}
