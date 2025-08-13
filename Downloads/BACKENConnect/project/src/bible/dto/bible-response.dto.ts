import { ApiProperty } from '@nestjs/swagger';

export class BibleVerseDto {
  @ApiProperty({ 
    example: 'genesis-1-1',
    description: 'Identifiant unique du verset (format: livre-chapitre-verset)',
    pattern: '^[a-z]+-[0-9]+-[0-9]+$'
  })
  id: string;

  @ApiProperty({ 
    example: 'genesis',
    description: 'Identifiant du livre biblique (en minuscules)',
    pattern: '^[a-z]+$'
  })
  bookId: string;

  @ApiProperty({ 
    example: 'genesis-1',
    description: 'Identifiant du chapitre parent (format: livre-chapitre)',
    pattern: '^[a-z]+-[0-9]+$'
  })
  chapterId: string;

  @ApiProperty({ 
    example: 1,
    description: 'Numéro du verset dans le chapitre',
    minimum: 1,
    maximum: 999
  })
  number: number;

  @ApiProperty({ 
    example: 'Au commencement, Dieu créa les cieux et la terre.',
    description: 'Contenu textuel du verset (traduction LSG)',
    minLength: 1,
    maxLength: 1000
  })
  text: string;
}

export class BibleBookDto {
  @ApiProperty({ 
    example: 'genesis',
    description: 'Identifiant unique du livre biblique (en minuscules)',
    pattern: '^[a-z]+$'
  })
  id: string;

  @ApiProperty({ 
    example: 'Genèse',
    description: 'Nom complet du livre biblique en français'
  })
  name: string;

  @ApiProperty({ 
    enum: ['OLD', 'NEW'],
    example: 'OLD',
    description: 'Testament auquel appartient le livre (Ancien ou Nouveau)'
  })
  testament: 'OLD' | 'NEW';

  @ApiProperty({ 
    example: 50,
    description: 'Nombre total de chapitres dans le livre',
    minimum: 1,
    maximum: 150
  })
  chapters: number;
}

export class BibleChapterDto {
  @ApiProperty({ 
    example: 'genesis-1',
    description: 'Identifiant unique du chapitre (format: livre-chapitre)',
    pattern: '^[a-z]+-[0-9]+$'
  })
  id: string;

  @ApiProperty({ 
    example: 'genesis',
    description: 'Identifiant du livre parent (en minuscules)',
    pattern: '^[a-z]+$'
  })
  bookId: string;

  @ApiProperty({ 
    example: 1,
    description: 'Numéro du chapitre dans le livre',
    minimum: 1,
    maximum: 150
  })
  number: number;

  @ApiProperty({ 
    type: [BibleVerseDto],
    description: 'Liste complète des versets du chapitre'
  })
  verses: BibleVerseDto[];
}

export class BibleSearchResultDto {
  @ApiProperty({ 
    type: [BibleVerseDto],
    description: 'Liste des versets correspondant à la recherche'
  })
  verses: BibleVerseDto[];

  @ApiProperty({ 
    example: 25,
    description: 'Nombre total de résultats trouvés',
    minimum: 0
  })
  total: number;
}

// DTOs pour les tests et exemples
export class BibleTestExamples {
  @ApiProperty({
    example: {
      id: 'genesis',
      name: 'Genèse',
      testament: 'OLD',
      chapters: 50
    },
    description: 'Exemple de livre de l\'Ancien Testament'
  })
  oldTestamentBook: BibleBookDto;

  @ApiProperty({
    example: {
      id: 'matthew',
      name: 'Matthieu',
      testament: 'NEW',
      chapters: 28
    },
    description: 'Exemple de livre du Nouveau Testament'
  })
  newTestamentBook: BibleBookDto;

  @ApiProperty({
    example: {
      id: 'genesis-1',
      bookId: 'genesis',
      number: 1,
      verses: [
        {
          id: 'genesis-1-1',
          bookId: 'genesis',
          chapterId: 'genesis-1',
          number: 1,
          text: 'Au commencement, Dieu créa les cieux et la terre.'
        },
        {
          id: 'genesis-1-2',
          bookId: 'genesis',
          chapterId: 'genesis-1',
          number: 2,
          text: 'La terre était informe et vide: il y avait des ténèbres à la surface de l\'abîme, et l\'esprit de Dieu se mouvait au-dessus des eaux.'
        }
      ]
    },
    description: 'Exemple de chapitre avec versets'
  })
  chapterWithVerses: BibleChapterDto;

  @ApiProperty({
    example: {
      id: 'genesis-1-1',
      bookId: 'genesis',
      chapterId: 'genesis-1',
      number: 1,
      text: 'Au commencement, Dieu créa les cieux et la terre.'
    },
    description: 'Exemple de verset individuel'
  })
  individualVerse: BibleVerseDto;

  @ApiProperty({
    example: {
      verses: [
        {
          id: 'genesis-1-1',
          bookId: 'genesis',
          chapterId: 'genesis-1',
          number: 1,
          text: 'Au commencement, Dieu créa les cieux et la terre.'
        },
        {
          id: 'john-3-16',
          bookId: 'john',
          chapterId: 'john-3',
          number: 16,
          text: 'Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle.'
        }
      ],
      total: 2
    },
    description: 'Exemple de résultats de recherche'
  })
  searchResults: BibleSearchResultDto;
} 