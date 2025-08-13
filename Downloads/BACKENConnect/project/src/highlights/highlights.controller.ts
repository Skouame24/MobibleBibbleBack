import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { HighlightsService } from './highlights.service';
import { CreateHighlightDto } from './dto/create-highlight.dto';
import { RequestWithUser } from '../types/request.types';

@ApiTags('highlights')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a highlight' })
  create(@Request() req: RequestWithUser, @Body() createHighlightDto: CreateHighlightDto) {
    return this.highlightsService.create(req.user.id, createHighlightDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all highlights for current user' })
  findAll(@Request() req: RequestWithUser) {
    return this.highlightsService.findAllByUser(req.user.id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a highlight' })
  remove(@Request() req: RequestWithUser, @Param('id') id: string) {
    return this.highlightsService.remove(id, req.user.id);
  }
}