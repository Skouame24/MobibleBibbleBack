import { IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateReadingPlanDto {
  @ApiProperty({ description: 'Titre du plan de lecture' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'Description du plan de lecture' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Date de début du plan' })
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @ApiProperty({ description: 'Date de fin du plan' })
  @IsNotEmpty()
  @IsDateString()
  endDate: string;
}