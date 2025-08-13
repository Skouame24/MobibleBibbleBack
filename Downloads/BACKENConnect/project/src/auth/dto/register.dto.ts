import { IsEmail, IsString, IsOptional, IsEnum, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';

export class RegisterDto {
  @ApiProperty({ 
    example: 'user@example.com',
    description: 'Adresse email de l\'utilisateur'
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ 
    example: 'password123',
    description: 'Mot de passe de l\'utilisateur',
    minLength: 8
  })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ 
    example: 'John Doe',
    description: 'Nom de l\'utilisateur'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ 
    enum: UserRole,
    example: UserRole.USER,
    description: 'Rôle de l\'utilisateur',
    required: false,
    default: UserRole.USER
  })
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}