import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

// Types intégrés
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

@Injectable()
export class BibleApiService {
  private readonly apiUrl = 'https://api.biblegateway.com/v3';
  private readonly apiKey = '6982926a76d588697b3c61df5e00207ad8509d35';
  private readonly frenchVersion = 'LSG'; // Louis Segond 1910

  constructor(
    private readonly httpService: HttpService,
  ) {}

  private async request<T>(endpoint: string): Promise<T> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`${this.apiUrl}/${endpoint}`, {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Accept-Language': 'fr',
          },
        })
      );
      return data;
    } catch (error) {
      throw new HttpException(
        'Erreur lors de la récupération des données bibliques',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getBooks(): Promise<BibleBook[]> {
    return [
      // Ancien Testament
      { id: 'GEN', name: 'Genèse', testament: 'OLD', chapters: 50 },
      { id: 'EXO', name: 'Exode', testament: 'OLD', chapters: 40 },
      { id: 'LEV', name: 'Lévitique', testament: 'OLD', chapters: 27 },
      { id: 'NUM', name: 'Nombres', testament: 'OLD', chapters: 36 },
      { id: 'DEU', name: 'Deutéronome', testament: 'OLD', chapters: 34 },
      { id: 'JOS', name: 'Josué', testament: 'OLD', chapters: 24 },
      { id: 'JDG', name: 'Juges', testament: 'OLD', chapters: 21 },
      { id: 'RUT', name: 'Ruth', testament: 'OLD', chapters: 4 },
      { id: '1SA', name: '1 Samuel', testament: 'OLD', chapters: 31 },
      { id: '2SA', name: '2 Samuel', testament: 'OLD', chapters: 24 },
      { id: '1KI', name: '1 Rois', testament: 'OLD', chapters: 22 },
      { id: '2KI', name: '2 Rois', testament: 'OLD', chapters: 25 },
      { id: '1CH', name: '1 Chroniques', testament: 'OLD', chapters: 29 },
      { id: '2CH', name: '2 Chroniques', testament: 'OLD', chapters: 36 },
      { id: 'EZR', name: 'Esdras', testament: 'OLD', chapters: 10 },
      { id: 'NEH', name: 'Néhémie', testament: 'OLD', chapters: 13 },
      { id: 'EST', name: 'Esther', testament: 'OLD', chapters: 10 },
      { id: 'JOB', name: 'Job', testament: 'OLD', chapters: 42 },
      { id: 'PSA', name: 'Psaumes', testament: 'OLD', chapters: 150 },
      { id: 'PRO', name: 'Proverbes', testament: 'OLD', chapters: 31 },
      { id: 'ECC', name: 'Ecclésiaste', testament: 'OLD', chapters: 12 },
      { id: 'SNG', name: 'Cantique des Cantiques', testament: 'OLD', chapters: 8 },
      { id: 'ISA', name: 'Ésaïe', testament: 'OLD', chapters: 66 },
      { id: 'JER', name: 'Jérémie', testament: 'OLD', chapters: 52 },
      { id: 'LAM', name: 'Lamentations', testament: 'OLD', chapters: 5 },
      { id: 'EZK', name: 'Ézéchiel', testament: 'OLD', chapters: 48 },
      { id: 'DAN', name: 'Daniel', testament: 'OLD', chapters: 12 },
      { id: 'HOS', name: 'Osée', testament: 'OLD', chapters: 14 },
      { id: 'JOL', name: 'Joël', testament: 'OLD', chapters: 3 },
      { id: 'AMO', name: 'Amos', testament: 'OLD', chapters: 9 },
      { id: 'OBA', name: 'Abdias', testament: 'OLD', chapters: 1 },
      { id: 'JON', name: 'Jonas', testament: 'OLD', chapters: 4 },
      { id: 'MIC', name: 'Michée', testament: 'OLD', chapters: 7 },
      { id: 'NAM', name: 'Nahum', testament: 'OLD', chapters: 3 },
      { id: 'HAB', name: 'Habacuc', testament: 'OLD', chapters: 3 },
      { id: 'ZEP', name: 'Sophonie', testament: 'OLD', chapters: 3 },
      { id: 'HAG', name: 'Aggée', testament: 'OLD', chapters: 2 },
      { id: 'ZEC', name: 'Zacharie', testament: 'OLD', chapters: 14 },
      { id: 'MAL', name: 'Malachie', testament: 'OLD', chapters: 4 },
      
      // Nouveau Testament
      { id: 'MAT', name: 'Matthieu', testament: 'NEW', chapters: 28 },
      { id: 'MRK', name: 'Marc', testament: 'NEW', chapters: 16 },
      { id: 'LUK', name: 'Luc', testament: 'NEW', chapters: 24 },
      { id: 'JHN', name: 'Jean', testament: 'NEW', chapters: 21 },
      { id: 'ACT', name: 'Actes', testament: 'NEW', chapters: 28 },
      { id: 'ROM', name: 'Romains', testament: 'NEW', chapters: 16 },
      { id: '1CO', name: '1 Corinthiens', testament: 'NEW', chapters: 16 },
      { id: '2CO', name: '2 Corinthiens', testament: 'NEW', chapters: 13 },
      { id: 'GAL', name: 'Galates', testament: 'NEW', chapters: 6 },
      { id: 'EPH', name: 'Éphésiens', testament: 'NEW', chapters: 6 },
      { id: 'PHP', name: 'Philippiens', testament: 'NEW', chapters: 4 },
      { id: 'COL', name: 'Colossiens', testament: 'NEW', chapters: 4 },
      { id: '1TH', name: '1 Thessaloniciens', testament: 'NEW', chapters: 5 },
      { id: '2TH', name: '2 Thessaloniciens', testament: 'NEW', chapters: 3 },
      { id: '1TI', name: '1 Timothée', testament: 'NEW', chapters: 6 },
      { id: '2TI', name: '2 Timothée', testament: 'NEW', chapters: 4 },
      { id: 'TIT', name: 'Tite', testament: 'NEW', chapters: 3 },
      { id: 'PHM', name: 'Philémon', testament: 'NEW', chapters: 1 },
      { id: 'HEB', name: 'Hébreux', testament: 'NEW', chapters: 13 },
      { id: 'JAS', name: 'Jacques', testament: 'NEW', chapters: 5 },
      { id: '1PE', name: '1 Pierre', testament: 'NEW', chapters: 5 },
      { id: '2PE', name: '2 Pierre', testament: 'NEW', chapters: 3 },
      { id: '1JN', name: '1 Jean', testament: 'NEW', chapters: 5 },
      { id: '2JN', name: '2 Jean', testament: 'NEW', chapters: 1 },
      { id: '3JN', name: '3 Jean', testament: 'NEW', chapters: 1 },
      { id: 'JUD', name: 'Jude', testament: 'NEW', chapters: 1 },
      { id: 'REV', name: 'Apocalypse', testament: 'NEW', chapters: 22 }
    ];
  }

  async getChapter(bookId: string, chapterNumber: number): Promise<BibleChapter> {
    const response = await this.request<any>(
      `bibles/${this.frenchVersion}/passages/${bookId}.${chapterNumber}?include-notes=false&include-titles=false&include-verse-numbers=true`
    );

    const verses = response.data.content
      .split('\n')
      .filter((line: string) => line.trim())
      .map((verse: string, index: number) => ({
        id: `${bookId}.${chapterNumber}.${index + 1}`,
        bookId,
        chapterId: `${bookId}.${chapterNumber}`,
        number: index + 1,
        text: verse.trim(),
      }));

    return {
      id: `${bookId}.${chapterNumber}`,
      bookId,
      number: chapterNumber,
      verses,
    };
  }

  async getVerse(verseId: string): Promise<BibleVerse> {
    const [bookId, chapter, verse] = verseId.split('.');
    
    const response = await this.request<any>(
      `bibles/${this.frenchVersion}/verses/${bookId}.${chapter}.${verse}?include-notes=false&include-titles=false`
    );

    return {
      id: verseId,
      bookId,
      chapterId: `${bookId}.${chapter}`,
      number: parseInt(verse),
      text: response.data.content.trim(),
    };
  }

  async searchVerses(query: string): Promise<BibleSearchResult> {
    const response = await this.request<any>(
      `bibles/${this.frenchVersion}/search?query=${encodeURIComponent(query)}&limit=100`
    );

    return {
      total: response.data.total || 0,
      verses: (response.data.verses || []).map((result: any) => ({
        id: result.reference,
        bookId: result.reference.split('.')[0],
        chapterId: result.reference.split(':')[0],
        number: parseInt(result.reference.split(':')[1]),
        text: result.content,
      })),
    };
  }
}