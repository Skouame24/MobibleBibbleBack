import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BibleService } from './bible.service';

@ApiTags('bible')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('bible')
export class BibleController {
  constructor(private readonly bibleService: BibleService) {}

  @Get('books')
  @ApiOperation({ summary: 'Get all Bible books' })
  @ApiResponse({ status: 200, description: 'Return list of Bible books' })
  getBooks() {
    return this.bibleService.getBooks();
  }

  @Get('books/:bookId/chapters/:chapterNumber')
  @ApiOperation({ summary: 'Get a specific Bible chapter' })
  @ApiResponse({ status: 200, description: 'Return chapter content' })
  getChapter(
    @Param('bookId') bookId: string,
    @Param('chapterNumber') chapterNumber: number,
  ) {
    return this.bibleService.getChapter(bookId, chapterNumber);
  }

  @Get('verses/:verseId')
  @ApiOperation({ summary: 'Get a specific Bible verse' })
  @ApiResponse({ status: 200, description: 'Return verse content' })
  getVerse(@Param('verseId') verseId: string) {
    return this.bibleService.getVerse(verseId);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search Bible verses' })
  @ApiResponse({ status: 200, description: 'Return search results' })
  searchVerses(@Query('query') query: string) {
    return this.bibleService.searchVerses(query);
  }
}