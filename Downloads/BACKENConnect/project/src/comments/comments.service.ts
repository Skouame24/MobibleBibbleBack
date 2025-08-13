import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(testimonyId: string, userId: string, createCommentDto: CreateCommentDto) {
    const testimony = await this.prisma.testimony.findUnique({
      where: { id: testimonyId },
    });

    if (!testimony) {
      throw new NotFoundException(`Testimony #${testimonyId} not found`);
    }

    if (testimony.userId === userId) {
      throw new ForbiddenException('You cannot comment on your own testimony');
    }

    return this.prisma.comment.create({
      data: {
        ...createCommentDto,
        testimonyId,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findAllByTestimony(testimonyId: string) {
    const testimony = await this.prisma.testimony.findUnique({
      where: { id: testimonyId },
    });

    if (!testimony) {
      throw new NotFoundException(`Testimony #${testimonyId} not found`);
    }

    return this.prisma.comment.findMany({
      where: {
        testimonyId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async update(id: string, userId: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new NotFoundException(`Comment #${id} not found`);
    }

    if (comment.userId !== userId) {
      throw new ForbiddenException('You can only update your own comments');
    }

    return this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async remove(id: string, userId: string) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new NotFoundException(`Comment #${id} not found`);
    }

    if (comment.userId !== userId) {
      throw new ForbiddenException('You can only delete your own comments');
    }

    await this.prisma.comment.delete({
      where: { id },
    });
  }
}