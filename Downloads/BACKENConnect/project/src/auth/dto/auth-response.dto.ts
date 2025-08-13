import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';

export class UserAuthDto {
  @ApiProperty({ 
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Identifiant unique de l\'utilisateur (UUID)'
  })
  id: string;

  @ApiProperty({ 
    example: 'user@example.com',
    description: 'Adresse email de l\'utilisateur (unique)'
  })
  email: string;

  @ApiProperty({ 
    example: 'John Doe',
    description: 'Nom complet de l\'utilisateur',
    required: false,
    nullable: true
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
    description: 'Indique si le compte utilisateur est actif'
  })
  isActive: boolean;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date de création du compte (ISO 8601)'
  })
  createdAt: Date;

  @ApiProperty({ 
    example: '2024-01-15T10:30:00Z',
    description: 'Date de dernière connexion (ISO 8601)',
    required: false,
    nullable: true
  })
  lastLogin: Date | null;
}

export class LoginResponseDto {
  @ApiProperty({ 
    type: UserAuthDto,
    description: 'Informations complètes de l\'utilisateur connecté'
  })
  user: UserAuthDto;

  @ApiProperty({ 
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    description: 'Token JWT pour l\'authentification (valide 24h)',
    minLength: 100
  })
  token: string;
}

export class RegisterResponseDto {
  @ApiProperty({ 
    type: UserAuthDto,
    description: 'Informations complètes du nouvel utilisateur créé'
  })
  user: UserAuthDto;

  @ApiProperty({ 
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    description: 'Token JWT pour l\'authentification (valide 24h)',
    minLength: 100
  })
  token: string;
}

// DTOs pour les tests et exemples
export class AuthTestExamples {
  @ApiProperty({
    example: {
      user: {
        id: '123e4567-e89b-12d3-a456-426614174000',
        email: 'john.doe@example.com',
        name: 'John Doe',
        role: 'USER',
        isActive: true,
        createdAt: '2024-01-15T10:30:00Z',
        lastLogin: '2024-01-15T10:30:00Z'
      },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    },
    description: 'Exemple de réponse de connexion réussie'
  })
  loginSuccess: LoginResponseDto;

  @ApiProperty({
    example: {
      user: {
        id: '456e7890-e89b-12d3-a456-426614174000',
        email: 'jane.smith@example.com',
        name: 'Jane Smith',
        role: 'ADMIN',
        isActive: true,
        createdAt: '2024-01-15T11:00:00Z',
        lastLogin: null
      },
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
    },
    description: 'Exemple de réponse d\'inscription réussie'
  })
  registerSuccess: RegisterResponseDto;
} 