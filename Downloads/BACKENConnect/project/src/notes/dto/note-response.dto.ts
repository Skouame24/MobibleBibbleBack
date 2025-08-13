import { ApiProperty } from '@nestjs/swagger';

export class NoteResponseDto {
  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant unique de la note (UUID v4)',
    minLength: 36,
    maxLength: 36
  })
  id: string;

  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant de l\'utilisateur propriétaire de la note',
    minLength: 36,
    maxLength: 36
  })
  userId: string;

  @ApiProperty({ 
    example: 'genesis-1-1',
    description: 'Identifiant du verset associé à la note',
    pattern: '^[a-z]+-[0-9]+-[0-9]+$'
  })
  verseId: string;

  @ApiProperty({ 
    example: 'Ce verset parle de la création ex nihilo. Dieu crée à partir de rien, montrant sa puissance infinie.',
    description: 'Contenu textuel de la note personnelle',
    minLength: 1,
    maxLength: 2000
  })
  content: string;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date de création de la note (ISO 8601)',
    format: 'date-time'
  })
  createdAt: Date;

  @ApiProperty({ 
    example: '2024-01-16T14:20:00Z',
    description: 'Date de dernière modification de la note (ISO 8601)',
    format: 'date-time'
  })
  updatedAt: Date;

  @ApiProperty({ 
    example: 'genesis',
    description: 'Livre biblique associé à la note',
    pattern: '^[a-z]+$'
  })
  bookName: string;

  @ApiProperty({ 
    example: 1,
    description: 'Numéro du chapitre associé à la note',
    minimum: 1,
    maximum: 150
  })
  chapterNumber: number;

  @ApiProperty({ 
    example: 1,
    description: 'Numéro du verset associé à la note',
    minimum: 1,
    maximum: 999
  })
  verseNumber: number;

  @ApiProperty({ 
    example: 'Au commencement, Dieu créa les cieux et la terre.',
    description: 'Texte du verset associé à la note',
    minLength: 1,
    maxLength: 1000
  })
  verseText: string;
}

export class NoteListResponseDto {
  @ApiProperty({ 
    type: [NoteResponseDto],
    description: 'Liste des notes de l\'utilisateur'
  })
  notes: NoteResponseDto[];

  @ApiProperty({ 
    example: 25,
    description: 'Nombre total de notes'
  })
  total: number;

  @ApiProperty({ 
    example: 5,
    description: 'Nombre de notes pour ce verset spécifique'
  })
  verseNotesCount: number;
}

// DTOs pour les tests et exemples
export class NoteTestExamples {
  @ApiProperty({
    example: {
      id: '123e4567-e89b-12d3-a456-426614174000',
      userId: '123e4567-e89b-12d3-a456-426614174000',
      verseId: 'genesis-1-1',
      content: 'Ce verset parle de la création ex nihilo. Dieu crée à partir de rien, montrant sa puissance infinie.',
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-16T14:20:00Z',
      bookName: 'genesis',
      chapterNumber: 1,
      verseNumber: 1,
      verseText: 'Au commencement, Dieu créa les cieux et la terre.'
    },
    description: 'Exemple de note théologique sur la création'
  })
  theologicalNote: NoteResponseDto;

  @ApiProperty({
    example: {
      id: '456e7890-e89b-12d3-a456-426614174000',
      userId: '123e4567-e89b-12d3-a456-426614174000',
      verseId: 'john-3-16',
      content: 'Verset clé de l\'évangile. À mémoriser et partager.',
      createdAt: '2024-01-10T09:15:00Z',
      updatedAt: '2024-01-10T09:15:00Z',
      bookName: 'john',
      chapterNumber: 3,
      verseNumber: 16,
      verseText: 'Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle.'
    },
    description: 'Exemple de note de mémorisation'
  })
  memorizationNote: NoteResponseDto;
} 