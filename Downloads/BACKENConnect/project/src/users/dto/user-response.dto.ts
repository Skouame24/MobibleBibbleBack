import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';

export class UserResponseDto {
  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant unique de l\'utilisateur (UUID v4)',
    minLength: 36,
    maxLength: 36
  })
  id: string;

  @ApiProperty({ 
    example: 'john.doe@example.com',
    description: 'Adresse email de l\'utilisateur (unique, format email valide)',
    format: 'email'
  })
  email: string;

  @ApiProperty({ 
    example: 'John Doe',
    description: 'Nom complet de l\'utilisateur (optionnel)',
    required: false,
    nullable: true,
    minLength: 2,
    maxLength: 100
  })
  name: string | null;

  @ApiProperty({ 
    enum: UserRole,
    example: UserRole.USER,
    description: 'Rôle de l\'utilisateur dans l\'application',
    default: UserRole.USER
  })
  role: UserRole;

  @ApiProperty({ 
    example: true,
    description: 'Indique si le compte utilisateur est actif (soft delete)'
  })
  isActive: boolean;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date de création du compte (ISO 8601)',
    format: 'date-time'
  })
  createdAt: Date;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date de dernière modification du compte (ISO 8601)',
    format: 'date-time'
  })
  updatedAt: Date;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date de dernière connexion (ISO 8601)',
    required: false,
    nullable: true,
    format: 'date-time'
  })
  lastLogin?: Date | null;
}

export class UserListResponseDto {
  @ApiProperty({ 
    type: [UserResponseDto],
    description: 'Liste des utilisateurs avec pagination'
  })
  users: UserResponseDto[];

  @ApiProperty({ 
    example: 100,
    description: 'Nombre total d\'utilisateurs dans la base'
  })
  total: number;
}

// DTOs pour les tests et exemples
export class UserTestExamples {
  @ApiProperty({
    example: {
      id: '123e4567-e89b-12d3-a456-426614174000',
      email: 'john.doe@example.com',
      name: 'John Doe',
      role: 'USER',
      isActive: true,
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-15T10:30:00Z',
      lastLogin: '2024-01-15T10:30:00Z'
    },
    description: 'Exemple d\'utilisateur standard'
  })
  standardUser: UserResponseDto;

  @ApiProperty({
    example: {
      id: '456e7890-e89b-12d3-a456-426614174000',
      email: 'admin@foiconnectee.com',
      name: 'Admin User',
      role: 'ADMIN',
      isActive: true,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T12:00:00Z',
      lastLogin: '2024-01-15T12:00:00Z'
    },
    description: 'Exemple d\'utilisateur administrateur'
  })
  adminUser: UserResponseDto;

  @ApiProperty({
    example: {
      id: '789e0123-e89b-12d3-a456-426614174000',
      email: 'anonymous@example.com',
      name: null,
      role: 'USER',
      isActive: true,
      createdAt: '2024-01-10T15:30:00Z',
      updatedAt: '2024-01-10T15:30:00Z',
      lastLogin: null
    },
    description: 'Exemple d\'utilisateur sans nom'
  })
  anonymousUser: UserResponseDto;
} 