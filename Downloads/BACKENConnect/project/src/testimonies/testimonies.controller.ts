import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { TestimoniesService } from './testimonies.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RequestWithUser } from 'src/types/request.types';

@ApiTags('testimonies')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('testimonies')
export class TestimoniesController {
  constructor(private readonly testimoniesService: TestimoniesService) {}

  @Post()
  @ApiOperation({ summary: 'Create testimony (published or draft)' })
  @ApiResponse({ status: 201, description: 'Testimony created successfully' })
  create(@Request() req: RequestWithUser, @Body() createTestimonyDto: CreateTestimonyDto) {
    return this.testimoniesService.create(req.user.id, createTestimonyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all published testimonies' })
  @ApiResponse({ status: 200, description: 'Return all published testimonies' })
  findAll() {
    return this.testimoniesService.findAll();
  }

  @Get('drafts')
  @ApiOperation({ summary: 'Get all unpublished testimonies for current user' })
  @ApiResponse({ status: 200, description: 'Return all unpublished testimonies' })
  findDrafts(@Request() req: RequestWithUser) {
    return this.testimoniesService.findDrafts(req.user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get testimony by id' })
  @ApiResponse({ status: 200, description: 'Return testimony by id' })
  findOne(@Param('id') id: string) {
    return this.testimoniesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update testimony' })
  @ApiResponse({ status: 200, description: 'Testimony updated successfully' })
  update(
    @Param('id') id: string,
    @Request() req: RequestWithUser,
    @Body() updateTestimonyDto: UpdateTestimonyDto,
  ) {
    return this.testimoniesService.update(id, req.user.id, updateTestimonyDto);
  }

  @Patch(':id/publish')
  @ApiOperation({ summary: 'Publish testimony' })
  @ApiResponse({ status: 200, description: 'Testimony published successfully' })
  publish(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.testimoniesService.publish(id, req.user.id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete testimony' })
  @ApiResponse({ status: 200, description: 'Testimony deleted successfully' })
  remove(@Param('id') id: string, @Request() req: RequestWithUser) {
    return this.testimoniesService.remove(id, req.user.id);
  }
}