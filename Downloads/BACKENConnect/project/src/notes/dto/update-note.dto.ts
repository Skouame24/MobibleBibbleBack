import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNoteDto {
  @ApiProperty({ example: 'Ma note mise à jour...' })
  @IsString()
  @IsNotEmpty()
  content: string;
}