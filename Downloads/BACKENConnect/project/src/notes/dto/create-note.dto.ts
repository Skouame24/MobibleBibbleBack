import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({ example: 'GEN.1.1' })
  @IsString()
  @IsNotEmpty()
  verseId: string;

  @ApiProperty({ example: 'Ma note sur ce verset...' })
  @IsString()
  @IsNotEmpty()
  content: string;
}