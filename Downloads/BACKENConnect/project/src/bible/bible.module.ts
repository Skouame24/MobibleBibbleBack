import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { BibleController } from './bible.controller';
import { BibleService } from './bible.service';
import { BibleApiService } from './bible-api.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [BibleController],
  providers: [BibleService, BibleApiService],
  exports: [BibleService],
})
export class BibleModule {}