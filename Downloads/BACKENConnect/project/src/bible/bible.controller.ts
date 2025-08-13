import { Controller, Get, Param, Query, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { 
  ApiTags, 
  ApiBearerAuth, 
  ApiOperation, 
  ApiParam,
  ApiQuery,
  ApiBadRequestResponse
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BibleService } from './bible.service';
import { 
  ApiSuccessResponse, 
  ApiErrorResponse,
  ApiCommonResponses
} from '../common/decorators/swagger.decorators';
import { 
  BibleBookDto, 
  BibleChapterDto, 
  BibleVerseDto, 
  BibleSearchResultDto 
} from './dto/bible-response.dto';

@ApiTags('Bible Content')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('bible')
export class BibleController {
  constructor(private readonly bibleService: BibleService) {}

  @Get('books')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Récupérer tous les livres de la Bible',
    description: 'Retourne la liste complète des livres bibliques avec leurs informations'
  })
  @ApiSuccessResponse(BibleBookDto, 'Liste des livres bibliques récupérée avec succès')
  @ApiCommonResponses()
  async getBooks(): Promise<BibleBookDto[]> {
    return this.bibleService.getBooks();
  }

  @Get('books/:bookId/chapters/:chapterNumber')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Récupérer un chapitre spécifique de la Bible',
    description: 'Retourne le contenu complet d\'un chapitre avec tous ses versets'
  })
  @ApiParam({ 
    name: 'bookId', 
    description: 'Identifiant du livre biblique',
    example: 'genesis'
  })
  @ApiParam({ 
    name: 'chapterNumber', 
    description: 'Numéro du chapitre',
    example: 1
  })
  @ApiSuccessResponse(BibleChapterDto, 'Chapitre récupéré avec succès')
  @ApiErrorResponse(404, 'Livre ou chapitre non trouvé', 'NOT_FOUND')
  @ApiCommonResponses()
  async getChapter(
    @Param('bookId') bookId: string,
    @Param('chapterNumber') chapterNumber: number,
  ): Promise<BibleChapterDto> {
    return this.bibleService.getChapter(bookId, chapterNumber);
  }

  @Get('verses/:verseId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Récupérer un verset spécifique de la Bible',
    description: 'Retourne le contenu d\'un verset individuel'
  })
  @ApiParam({ 
    name: 'verseId', 
    description: 'Identifiant unique du verset',
    example: 'genesis-1-1'
  })
  @ApiSuccessResponse(BibleVerseDto, 'Verset récupéré avec succès')
  @ApiErrorResponse(404, 'Verset non trouvé', 'NOT_FOUND')
  @ApiCommonResponses()
  async getVerse(@Param('verseId') verseId: string): Promise<BibleVerseDto> {
    return this.bibleService.getVerse(verseId);
  }

  @Get('search')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Rechercher des versets dans la Bible',
    description: 'Effectue une recherche textuelle dans tous les versets de la Bible'
  })
  @ApiQuery({ 
    name: 'query', 
    description: 'Terme de recherche',
    example: 'Dieu',
    required: true
  })
  @ApiSuccessResponse(BibleSearchResultDto, 'Recherche effectuée avec succès')
  @ApiBadRequestResponse({ 
    description: 'Terme de recherche manquant ou invalide',
    schema: {
      example: {
        success: false,
        message: 'Query parameter is required',
        error: 'BAD_REQUEST',
        statusCode: 400,
        timestamp: '2024-01-15T10:30:00Z'
      }
    }
  })
  @ApiCommonResponses()
  async searchVerses(@Query('query') query: string): Promise<BibleSearchResultDto> {
    return this.bibleService.searchVerses(query);
  }
}