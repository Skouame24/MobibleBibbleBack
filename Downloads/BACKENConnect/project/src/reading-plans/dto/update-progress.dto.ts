import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProgressDto {
  @ApiProperty({ description: 'ID du verset' })
  @IsNotEmpty()
  @IsString()
  verseId: string;

  @ApiProperty({ description: 'ID de l\'utilisateur' })
  @IsNotEmpty()
  @IsString()
  userId: string;
}