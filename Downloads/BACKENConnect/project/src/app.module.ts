import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TestimoniesModule } from './testimonies/testimonies.module';
import { CommentsModule } from './comments/comments.module';
import { LibraryModule } from './library/library.module';
import { ReadingPlansModule } from './reading-plans/reading-plans.module';
import { BibleModule } from './bible/bible.module';
import { ReactionsModule } from './reactions/reactions.module';
import { HighlightsModule } from './highlights/highlights.module';
import { NotesModule } from './notes/notes.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    TestimoniesModule,
    ReadingPlansModule,
    LibraryModule,
    CommentsModule,
    BibleModule,
    ReactionsModule,
    HighlightsModule,
    NotesModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}