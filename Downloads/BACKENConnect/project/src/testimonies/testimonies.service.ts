import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTestimonyDto } from './dto/create-testimony.dto';
import { UpdateTestimonyDto } from './dto/update-testimony.dto';

@Injectable()
export class TestimoniesService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createTestimonyDto: CreateTestimonyDto) {
    return this.prisma.testimony.create({
      data: {
        ...createTestimonyDto,
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

  async findAll() {
    return this.prisma.testimony.findMany({
      where: {
        isPublished: true,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            comments: true,
            reactions: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findDrafts(userId: string) {
    return this.prisma.testimony.findMany({
      where: {
        userId,
        isPublished: false,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            comments: true,
            reactions: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const testimony = await this.prisma.testimony.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        _count: {
          select: {
            comments: true,
            reactions: true,
          },
        },
      },
    });

    if (!testimony) {
      throw new NotFoundException(`Témoignage #${id} non trouvé`);
    }

    return testimony;
  }

  async update(id: string, userId: string, updateTestimonyDto: UpdateTestimonyDto) {
    const testimony = await this.findOne(id);

    if (testimony.userId !== userId) {
      throw new ForbiddenException('Vous ne pouvez modifier que vos propres témoignages');
    }

    return this.prisma.testimony.update({
      where: { id },
      data: updateTestimonyDto,
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

  async publish(id: string, userId: string) {
    const testimony = await this.findOne(id);

    if (testimony.userId !== userId) {
      throw new ForbiddenException('Vous ne pouvez publier que vos propres témoignages');
    }

    return this.prisma.testimony.update({
      where: { id },
      data: { isPublished: true },
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
    const testimony = await this.findOne(id);

    if (testimony.userId !== userId) {
      throw new ForbiddenException('Vous ne pouvez supprimer que vos propres témoignages');
    }

    await this.prisma.testimony.delete({
      where: { id },
    });
  }
}