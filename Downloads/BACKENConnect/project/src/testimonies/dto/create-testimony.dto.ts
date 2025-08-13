import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTestimonyDto {
  @ApiProperty({ example: 'Mon témoignage' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Contenu de mon témoignage...' })
  @IsString()
  content: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;
}