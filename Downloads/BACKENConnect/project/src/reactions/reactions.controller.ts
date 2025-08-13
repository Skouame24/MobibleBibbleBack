import { Controller, Post, Delete, Get, Param, UseGuards, Request, Body } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ReactionsService } from './reactions.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { RequestWithUser } from '../types/request.types';

@ApiTags('reactions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('testimonies/:testimonyId/reactions')
export class ReactionsController {
  constructor(private readonly reactionsService: ReactionsService) {}

  @Post()
  @ApiOperation({ summary: 'Créer une réaction' })
  @ApiResponse({ status: 201, description: 'Réaction créée avec succès' })
  create(
    @Param('testimonyId') testimonyId: string,
    @Request() req: RequestWithUser,
    @Body() createReactionDto: CreateReactionDto,
  ) {
    return this.reactionsService.create(testimonyId, req.user.id, createReactionDto);
  }

  @Delete()
  @ApiOperation({ summary: 'Supprimer une réaction' })
  @ApiResponse({ status: 200, description: 'Réaction supprimée avec succès' })
  remove(
    @Param('testimonyId') testimonyId: string,
    @Request() req: RequestWithUser,
  ) {
    return this.reactionsService.remove(testimonyId, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Obtenir les réactions d\'un témoignage' })
  @ApiResponse({ status: 200, description: 'Retourne les statistiques des réactions' })
  getReactions(@Param('testimonyId') testimonyId: string) {
    return this.reactionsService.getReactionsByTestimony(testimonyId);
  }
}