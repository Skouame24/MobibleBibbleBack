import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
  @ApiProperty({ example: true, description: 'Indique si l\'opération a réussi' })
  success: boolean;
  
  @ApiProperty({ description: 'Données de la réponse' })
  data: T;
  
  @ApiProperty({ example: 'Operation successful', description: 'Message de succès', required: false })
  message?: string;
  
  @ApiProperty({ example: '2024-01-15T10:30:00Z', description: 'Timestamp de la réponse' })
  timestamp: string;
}

export class PaginatedResponseDto<T> extends ApiResponseDto<T[]> {
  @ApiProperty({ example: 1, description: 'Page actuelle' })
  page: number;
  
  @ApiProperty({ example: 10, description: 'Nombre d\'éléments par page' })
  limit: number;
  
  @ApiProperty({ example: 100, description: 'Nombre total d\'éléments' })
  total: number;
  
  @ApiProperty({ example: 10, description: 'Nombre total de pages' })
  totalPages: number;
}

export class ErrorResponseDto {
  @ApiProperty({ example: false, description: 'Indique si l\'opération a échoué' })
  success: boolean;
  
  @ApiProperty({ example: 'User not found', description: 'Message d\'erreur' })
  message: string;
  
  @ApiProperty({ example: 'NOT_FOUND', description: 'Code d\'erreur' })
  error: string;
  
  @ApiProperty({ example: 404, description: 'Code de statut HTTP' })
  statusCode: number;
  
  @ApiProperty({ example: '2024-01-15T10:30:00Z', description: 'Timestamp de l\'erreur' })
  timestamp: string;
} 