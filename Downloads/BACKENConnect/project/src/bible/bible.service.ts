import { Injectable } from '@nestjs/common';
import { BibleApiService } from './bible-api.service';
import { BibleBook, BibleChapter, BibleVerse, BibleSearchResult } from '../types/api-bible.types';

@Injectable()
export class BibleService {
  constructor(private readonly bibleApiService: BibleApiService) {}

  async getBooks(): Promise<BibleBook[]> {
    return this.bibleApiService.getBooks();
  }

  async getChapter(bookId: string, chapterNumber: number): Promise<BibleChapter> {
    return this.bibleApiService.getChapter(bookId, chapterNumber);
  }

  async getVerse(verseId: string): Promise<BibleVerse> {
    return this.bibleApiService.getVerse(verseId);
  }

  async searchVerses(query: string): Promise<BibleSearchResult> {
    return this.bibleApiService.searchVerses(query);
  }
}