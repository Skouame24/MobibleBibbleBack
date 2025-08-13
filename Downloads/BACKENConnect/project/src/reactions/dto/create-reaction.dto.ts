import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ReactionType } from '@prisma/client';

export class CreateReactionDto {
  @ApiProperty({ enum: ReactionType, example: 'LIKE', description: 'Type de réaction (LIKE ou HEART)' })
  @IsEnum(ReactionType)
  type: ReactionType;
}