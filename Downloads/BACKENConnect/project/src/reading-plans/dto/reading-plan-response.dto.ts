import { ApiProperty } from '@nestjs/swagger';

export class ReadingPlanResponseDto {
  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant unique du plan de lecture (UUID v4)',
    minLength: 36,
    maxLength: 36
  })
  id: string;

  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant de l\'utilisateur propriétaire du plan',
    minLength: 36,
    maxLength: 36
  })
  userId: string;

  @ApiProperty({ 
    example: 'Lecture quotidienne de la Bible',
    description: 'Titre du plan de lecture',
    minLength: 3,
    maxLength: 200
  })
  title: string;

  @ApiProperty({ 
    example: 'Plan de lecture biblique sur 365 jours pour couvrir toute la Bible',
    description: 'Description détaillée du plan de lecture',
    required: false,
    nullable: true,
    maxLength: 1000
  })
  description: string | null;

  @ApiProperty({ 
    example: '2024-01-01T00:00:00Z',
    description: 'Date de début du plan de lecture (ISO 8601)',
    format: 'date-time'
  })
  startDate: Date;

  @ApiProperty({ 
    example: '2024-12-31T23:59:59Z',
    description: 'Date de fin prévue du plan de lecture (ISO 8601)',
    format: 'date-time'
  })
  endDate: Date;

  @ApiProperty({ 
    example: true,
    description: 'Indique si le plan de lecture est actuellement actif'
  })
  isActive: boolean;

  @ApiProperty({ 
    example: '2024-01-01T00:00:00Z',
    description: 'Date de création du plan (ISO 8601)',
    format: 'date-time'
  })
  createdAt: Date;

  @ApiProperty({ 
    example: '2024-01-01T00:00:00Z',
    description: 'Date de dernière modification du plan (ISO 8601)',
    format: 'date-time'
  })
  updatedAt: Date;

  @ApiProperty({ 
    example: 45,
    description: 'Nombre de jours écoulés depuis le début',
    minimum: 0
  })
  daysElapsed: number;

  @ApiProperty({ 
    example: 320,
    description: 'Nombre de jours restants jusqu\'à la fin',
    minimum: 0
  })
  daysRemaining: number;

  @ApiProperty({ 
    example: 0.12,
    description: 'Pourcentage de progression du plan (0.0 à 1.0)',
    minimum: 0,
    maximum: 1
  })
  progressPercentage: number;
}

export class ReadingProgressDto {
  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant unique de la progression (UUID v4)',
    minLength: 36,
    maxLength: 36
  })
  id: string;

  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant du plan de lecture associé',
    minLength: 36,
    maxLength: 36
  })
  readingPlanId: string;

  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant de l\'utilisateur',
    minLength: 36,
    maxLength: 36
  })
  userId: string;

  @ApiProperty({ 
    example: 'genesis-1-1',
    description: 'Identifiant du verset lu',
    pattern: '^[a-z]+-[0-9]+-[0-9]+$'
  })
  verseId: string;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date de lecture du verset (ISO 8601)',
    format: 'date-time',
    required: false,
    nullable: true
  })
  completedAt: Date | null;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date de création de l\'entrée de progression (ISO 8601)',
    format: 'date-time'
  })
  createdAt: Date;
}

export class ReadingPlanWithProgressDto extends ReadingPlanResponseDto {
  @ApiProperty({ 
    type: [ReadingProgressDto],
    description: 'Liste des progrès de lecture associés au plan'
  })
  progress: ReadingProgressDto[];
}

export class ReadingPlanListResponseDto {
  @ApiProperty({ 
    type: [ReadingPlanResponseDto],
    description: 'Liste des plans de lecture de l\'utilisateur'
  })
  plans: ReadingPlanResponseDto[];

  @ApiProperty({ 
    example: 5,
    description: 'Nombre total de plans de lecture'
  })
  total: number;

  @ApiProperty({ 
    example: 3,
    description: 'Nombre de plans actifs'
  })
  activeCount: number;

  @ApiProperty({ 
    example: 2,
    description: 'Nombre de plans terminés'
  })
  completedCount: number;
}

// DTOs pour les tests et exemples
export class ReadingPlanTestExamples {
  @ApiProperty({
    example: {
      id: '123e4567-e89b-12d3-a456-426614174000',
      userId: '123e4567-e89b-12d3-a456-426614174000',
      title: 'Lecture quotidienne de la Bible',
      description: 'Plan de lecture biblique sur 365 jours pour couvrir toute la Bible',
      startDate: '2024-01-01T00:00:00Z',
      endDate: '2024-12-31T23:59:59Z',
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      daysElapsed: 45,
      daysRemaining: 320,
      progressPercentage: 0.12
    },
    description: 'Exemple de plan de lecture actif'
  })
  activePlan: ReadingPlanResponseDto;

  @ApiProperty({
    example: {
      id: '456e7890-e89b-12d3-a456-426614174000',
      userId: '123e4567-e89b-12d3-a456-426614174000',
      title: 'Étude des Psaumes',
      description: 'Lecture et méditation des 150 Psaumes sur 3 mois',
      startDate: '2023-10-01T00:00:00Z',
      endDate: '2023-12-31T23:59:59Z',
      isActive: false,
      createdAt: '2023-10-01T00:00:00Z',
      updatedAt: '2023-12-31T23:59:59Z',
      daysElapsed: 92,
      daysRemaining: 0,
      progressPercentage: 1.0
    },
    description: 'Exemple de plan de lecture terminé'
  })
  completedPlan: ReadingPlanResponseDto;
} 