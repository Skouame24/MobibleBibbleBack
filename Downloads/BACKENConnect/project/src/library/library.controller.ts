import { Controller, Get, Post, Body, Param, Delete, UseGuards, Put, NotFoundException } from '@nestjs/common';
import { LibraryService } from './library.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { LibraryBook, LibraryFavorite, Prisma } from '@prisma/client';

@ApiTags('library')
@ApiBearerAuth()
@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get()
  async getAllBooks(): Promise<LibraryBook[]> {
    return this.libraryService.getBooks({});
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<LibraryBook> {
    const book = await this.libraryService.getBook(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  @Post()
  async createBook(@Body() data: Prisma.LibraryBookCreateInput): Promise<LibraryBook> {
    return this.libraryService.createBook(data);
  }

  @Put(':id')
  async updateBook(
    @Param('id') id: string,
    @Body() data: Prisma.LibraryBookUpdateInput,
  ): Promise<LibraryBook> {
    return this.libraryService.updateBook({ id, data });
  }

  @Post(':id/favorites')
  async addToFavorites(
    @Param('id') bookId: string,
    @Body() data: { userId: string },
  ): Promise<LibraryFavorite> {
    return this.libraryService.addToFavorites({
      book: { connect: { id: bookId } },
      user: { connect: { id: data.userId } },
    });
  }

  @Delete(':bookId/favorites/:userId')
  async removeFromFavorites(
    @Param('bookId') bookId: string,
    @Param('userId') userId: string,
  ): Promise<void> {
    return this.libraryService.removeFromFavorites(bookId, userId);
  }
}