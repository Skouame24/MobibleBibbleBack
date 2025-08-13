import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {  } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ example: 'Jean' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Dupont' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'jean.dupont@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'motdepasse123' })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ example: '+33612345678' })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ example: 5.3325, required: false })
  @IsOptional()
  @IsNumber()
  latitude?: number;

  @ApiProperty({ example: -4.0314, required: false })
  @IsOptional()
  @IsNumber()
  longitude?: number;
}
