export interface BibleBook {
  id: string;
  name: string;
  testament: 'OLD' | 'NEW';
  chapters: number;
}

export interface BibleChapter {
  id: string;
  bookId: string;
  number: number;
  verses: BibleVerse[];
}

export interface BibleVerse {
  id: string;
  bookId: string;
  chapterId: string;
  number: number;
  text: string;
}

export interface BibleSearchResult {
  total: number;
  verses: BibleVerse[];
}