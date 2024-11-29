import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Verse {
  id: number;
  text: string;
  isBookmarked?: boolean;
  highlightColor?: string;
}

export interface Chapter {
  book: string;
  number: number;
  verses: Verse[];
}

class BibleService {
  private static instance: BibleService;
  
  private constructor() {}

  static getInstance(): BibleService {
    if (!BibleService.instance) {
      BibleService.instance = new BibleService();
    }
    return BibleService.instance;
  }

  async getChapter(book: string, chapter: number): Promise<Chapter> {
    // Simuler un appel API - À remplacer par votre vraie source de données
    const verses: Verse[] = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      text: `Ceci est le verset ${i + 1} du chapitre ${chapter} de ${book}.`,
      isBookmarked: false,
    }));

    return { book, number: chapter, verses };
  }

  async searchVerses(query: string): Promise<Array<{ book: string, chapter: number, verse: Verse }>> {
    // Implémenter la logique de recherche
    return [];
  }

  async toggleBookmark(book: string, chapter: number, verseId: number): Promise<void> {
    const key = `bookmark_${book}_${chapter}_${verseId}`;
    const isBookmarked = await AsyncStorage.getItem(key);
    
    if (isBookmarked) {
      await AsyncStorage.removeItem(key);
    } else {
      await AsyncStorage.setItem(key, 'true');
    }
  }

  async setHighlight(book: string, chapter: number, verseId: number, color: string): Promise<void> {
    const key = `highlight_${book}_${chapter}_${verseId}`;
    await AsyncStorage.setItem(key, color);
  }

  async getSettings(): Promise<{ fontSize: number; lineHeight: number }> {
    const settings = await AsyncStorage.getItem('reader_settings');
    return settings ? JSON.parse(settings) : { fontSize: 16, lineHeight: 1.5 };
  }

  async saveSettings(settings: { fontSize: number; lineHeight: number }): Promise<void> {
    await AsyncStorage.setItem('reader_settings', JSON.stringify(settings));
  }
}

export default BibleService.getInstance();