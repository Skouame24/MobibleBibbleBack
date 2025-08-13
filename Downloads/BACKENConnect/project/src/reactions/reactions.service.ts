import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReactionDto } from './dto/create-reaction.dto';
import { ReactionType } from '@prisma/client';

@Injectable()
export class ReactionsService {
  constructor(private prisma: PrismaService) {}

  async create(testimonyId: string, userId: string, createReactionDto: CreateReactionDto) {
    const testimony = await this.prisma.testimony.findUnique({
      where: { id: testimonyId },
    });

    if (!testimony) {
      throw new NotFoundException(`Témoignage #${testimonyId} non trouvé`);
    }

    const existingReaction = await this.prisma.reaction.findUnique({
      where: {
        testimonyId_userId: {
          testimonyId,
          userId,
        },
      },
    });

    if (existingReaction) {
      throw new ConflictException('Vous avez déjà réagi à ce témoignage');
    }

    return this.prisma.reaction.create({
      data: {
        type: createReactionDto.type,
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

  async remove(testimonyId: string, userId: string) {
    const reaction = await this.prisma.reaction.findUnique({
      where: {
        testimonyId_userId: {
          testimonyId,
          userId,
        },
      },
    });

    if (!reaction) {
      throw new NotFoundException('Réaction non trouvée');
    }

    await this.prisma.reaction.delete({
      where: {
        testimonyId_userId: {
          testimonyId,
          userId,
        },
      },
    });
  }

  async getReactionsByTestimony(testimonyId: string) {
    const testimony = await this.prisma.testimony.findUnique({
      where: { id: testimonyId },
      include: {
        reactions: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!testimony) {
      throw new NotFoundException(`Témoignage #${testimonyId} non trouvé`);
    }

    const reactionStats = testimony.reactions.reduce((acc, reaction) => {
      acc[reaction.type] = (acc[reaction.type] || 0) + 1;
      return acc;
    }, {} as Record<ReactionType, number>);

    return {
      total: testimony.reactions.length,
      stats: Object.entries(reactionStats).map(([type, count]) => ({
        type,
        count,
      })),
      reactions: testimony.reactions,
    };
  }
}