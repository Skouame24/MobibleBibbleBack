import { Module } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { HighlightsController } from './highlights.controller';

@Module({
  controllers: [HighlightsController], // Déclare le contrôleur des highlights
  providers: [HighlightsService], // Déclare le service des highlights
  exports: [HighlightsService], // Exporte le service si vous avez besoin de l'utiliser ailleurs
})
export class HighlightsModule {}
