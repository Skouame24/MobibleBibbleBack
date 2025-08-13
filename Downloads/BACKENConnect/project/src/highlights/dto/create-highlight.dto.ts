import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHighlightDto {
  @ApiProperty({ example: 'GEN.1.1' })
  @IsString()
  @IsNotEmpty()
  verseId: string;

  @ApiProperty({ example: '#FFEB3B' })
  @IsString()
  @IsNotEmpty()
  color: string;
}