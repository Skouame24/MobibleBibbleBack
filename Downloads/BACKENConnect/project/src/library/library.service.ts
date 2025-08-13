import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LibraryBook, LibraryFavorite, Prisma } from '@prisma/client';

@Injectable()
export class LibraryService {
  constructor(private prisma: PrismaService) {}

  async getBooks(params: {
    skip?: number;
    take?: number;
    where?: Prisma.LibraryBookWhereInput;
  }): Promise<LibraryBook[]> {
    const { skip, take, where } = params;
    return this.prisma.libraryBook.findMany({
      skip,
      take,
      where,
      include: {
        favorites: true,
      },
    });
  }

  async getBook(id: string): Promise<LibraryBook | null> {
    return this.prisma.libraryBook.findUnique({
      where: { id },
      include: {
        favorites: true,
      },
    });
  }

  async createBook(data: Prisma.LibraryBookCreateInput): Promise<LibraryBook> {
    return this.prisma.libraryBook.create({
      data,
      include: {
        favorites: true,
      },
    });
  }

  async updateBook(params: {
    id: string;
    data: Prisma.LibraryBookUpdateInput;
  }): Promise<LibraryBook> {
    const { id, data } = params;
    return this.prisma.libraryBook.update({
      where: { id },
      data,
      include: {
        favorites: true,
      },
    });
  }

  async addToFavorites(data: Prisma.LibraryFavoriteCreateInput): Promise<LibraryFavorite> {
    return this.prisma.libraryFavorite.create({
      data,
    });
  }

  async removeFromFavorites(bookId: string, userId: string): Promise<void> {
    await this.prisma.libraryFavorite.delete({
      where: {
        bookId_userId: {
          bookId,
          userId,
        },
      },
    });
  }
}