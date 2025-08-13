import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHighlightDto } from './dto/create-highlight.dto';

@Injectable()
export class HighlightsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createHighlightDto: CreateHighlightDto) {
    return this.prisma.highlight.create({
      data: {
        ...createHighlightDto,
        userId,
      },
    });
  }

  async findAllByUser(userId: string) {
    return this.prisma.highlight.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async remove(id: string, userId: string) {
    const highlight = await this.prisma.highlight.findUnique({
      where: { id },
    });

    if (!highlight) {
      throw new NotFoundException(`Highlight #${id} not found`);
    }

    if (highlight.userId !== userId) {
      throw new ForbiddenException('You can only delete your own highlights');
    }

    await this.prisma.highlight.delete({
      where: { id },
    });
  }
}