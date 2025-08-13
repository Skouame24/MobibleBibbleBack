import { ApiProperty } from '@nestjs/swagger';

export class HighlightResponseDto {
  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant unique du surlignage (UUID v4)',
    minLength: 36,
    maxLength: 36
  })
  id: string;

  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant de l\'utilisateur propriétaire du surlignage',
    minLength: 36,
    maxLength: 36
  })
  userId: string;

  @ApiProperty({ 
    example: 'genesis-1-1',
    description: 'Identifiant du verset surligné',
    pattern: '^[a-z]+-[0-9]+-[0-9]+$'
  })
  verseId: string;

  @ApiProperty({ 
    example: '#FFD700',
    description: 'Couleur du surlignage (format hexadécimal)',
    pattern: '^#[0-9A-Fa-f]{6}$',
    minLength: 7,
    maxLength: 7
  })
  color: string;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date de création du surlignage (ISO 8601)',
    format: 'date-time'
  })
  createdAt: Date;

  @ApiProperty({ 
    example: '2024-01-16T14:20:00Z',
    description: 'Date de dernière modification du surlignage (ISO 8601)',
    format: 'date-time'
  })
  updatedAt: Date;

  @ApiProperty({ 
    example: 'genesis',
    description: 'Livre biblique associé au surlignage',
    pattern: '^[a-z]+$'
  })
  bookName: string;

  @ApiProperty({ 
    example: 1,
    description: 'Numéro du chapitre associé au surlignage',
    minimum: 1,
    maximum: 150
  })
  chapterNumber: number;

  @ApiProperty({ 
    example: 1,
    description: 'Numéro du verset associé au surlignage',
    minimum: 1,
    maximum: 999
  })
  verseNumber: number;

  @ApiProperty({ 
    example: 'Au commencement, Dieu créa les cieux et la terre.',
    description: 'Texte du verset surligné',
    minLength: 1,
    maxLength: 1000
  })
  verseText: string;

  @ApiProperty({ 
    example: 'yellow',
    description: 'Nom de la couleur pour l\'affichage',
    enum: ['yellow', 'green', 'blue', 'pink', 'purple', 'orange', 'red']
  })
  colorName: string;
}

export class HighlightListResponseDto {
  @ApiProperty({ 
    type: [HighlightResponseDto],
    description: 'Liste des surlignages de l\'utilisateur'
  })
  highlights: HighlightResponseDto[];

  @ApiProperty({ 
    example: 50,
    description: 'Nombre total de surlignages'
  })
  total: number;

  @ApiProperty({ 
    example: {
      '#FFD700': 15,
      '#90EE90': 12,
      '#87CEEB': 8,
      '#FFC0CB': 5,
      '#DDA0DD': 4,
      '#FFA500': 3,
      '#FF6B6B': 3
    },
    description: 'Répartition des surlignages par couleur'
  })
  colorDistribution: Record<string, number>;
}

export class HighlightStatsDto {
  @ApiProperty({ 
    example: 50,
    description: 'Nombre total de surlignages'
  })
  totalHighlights: number;

  @ApiProperty({ 
    example: 25,
    description: 'Nombre de versets surlignés'
  })
  uniqueVerses: number;

  @ApiProperty({ 
    example: 7,
    description: 'Nombre de couleurs utilisées'
  })
  colorsUsed: number;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date du dernier surlignage (ISO 8601)',
    format: 'date-time'
  })
  lastHighlightDate: Date;

  @ApiProperty({ 
    example: {
      '#FFD700': 15,
      '#90EE90': 12,
      '#87CEEB': 8
    },
    description: 'Top 3 des couleurs les plus utilisées'
  })
  topColors: Record<string, number>;
}

// DTOs pour les tests et exemples
export class HighlightTestExamples {
  @ApiProperty({
    example: {
      id: '123e4567-e89b-12d3-a456-426614174000',
      userId: '123e4567-e89b-12d3-a456-426614174000',
      verseId: 'genesis-1-1',
      color: '#FFD700',
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-16T14:20:00Z',
      bookName: 'genesis',
      chapterNumber: 1,
      verseNumber: 1,
      verseText: 'Au commencement, Dieu créa les cieux et la terre.',
      colorName: 'yellow'
    },
    description: 'Exemple de surlignage jaune sur la création'
  })
  yellowHighlight: HighlightResponseDto;

  @ApiProperty({
    example: {
      id: '456e7890-e89b-12d3-a456-426614174000',
      userId: '123e4567-e89b-12d3-a456-426614174000',
      verseId: 'john-3-16',
      color: '#90EE90',
      createdAt: '2024-01-10T09:15:00Z',
      updatedAt: '2024-01-10T09:15:00Z',
      bookName: 'john',
      chapterNumber: 3,
      verseNumber: 16,
      verseText: 'Car Dieu a tant aimé le monde qu\'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu\'il ait la vie éternelle.',
      colorName: 'green'
    },
    description: 'Exemple de surlignage vert sur l\'amour de Dieu'
  })
  greenHighlight: HighlightResponseDto;

  @ApiProperty({
    example: {
      totalHighlights: 50,
      uniqueVerses: 25,
      colorsUsed: 7,
      lastHighlightDate: '2024-01-15T10:30:00Z',
      topColors: {
        '#FFD700': 15,
        '#90EE90': 12,
        '#87CEEB': 8
      }
    },
    description: 'Exemple de statistiques de surlignages'
  })
  highlightStats: HighlightStatsDto;
} 