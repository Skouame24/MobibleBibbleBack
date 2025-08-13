import { Controller, Get, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { 
  ApiTags, 
  ApiBearerAuth, 
  ApiOperation, 
  ApiParam,
  ApiBody,
  ApiBadRequestResponse,
  ApiForbiddenResponse
} from '@nestjs/swagger';
import { 
  ApiSuccessResponse, 
  ApiErrorResponse,
  ApiCommonResponses
} from '../common/decorators/swagger.decorators';
import { UserResponseDto } from './dto/user-response.dto';

@ApiTags('Users Management')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Récupérer tous les utilisateurs',
    description: 'Retourne la liste de tous les utilisateurs actifs (réservé aux administrateurs)'
  })
  @ApiSuccessResponse(UserResponseDto, 'Liste des utilisateurs récupérée avec succès')
  @ApiForbiddenResponse({ 
    description: 'Accès refusé - Rôle administrateur requis',
    schema: {
      example: {
        success: false,
        message: 'Access denied - Admin role required',
        error: 'FORBIDDEN',
        statusCode: 403,
        timestamp: '2024-01-15T10:30:00Z'
      }
    }
  })
  @ApiCommonResponses()
  async findAll(): Promise<UserResponseDto[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Récupérer un utilisateur par ID',
    description: 'Retourne les informations d\'un utilisateur spécifique'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'Identifiant unique de l\'utilisateur',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @ApiSuccessResponse(UserResponseDto, 'Utilisateur récupéré avec succès')
  @ApiErrorResponse(404, 'Utilisateur non trouvé', 'NOT_FOUND')
  @ApiCommonResponses()
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Mettre à jour un utilisateur',
    description: 'Modifie les informations d\'un utilisateur existant'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'Identifiant unique de l\'utilisateur',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @ApiBody({ 
    type: UpdateUserDto,
    description: 'Données de mise à jour de l\'utilisateur'
  })
  @ApiSuccessResponse(UserResponseDto, 'Utilisateur mis à jour avec succès')
  @ApiBadRequestResponse({ 
    description: 'Données de mise à jour invalides',
    schema: {
      example: {
        success: false,
        message: 'Validation failed',
        error: 'BAD_REQUEST',
        statusCode: 400,
        timestamp: '2024-01-15T10:30:00Z',
        data: {
          email: ['email must be an email'],
          name: ['name should not be empty']
        }
      }
    }
  })
  @ApiErrorResponse(404, 'Utilisateur non trouvé', 'NOT_FOUND')
  @ApiCommonResponses()
  async update(
    @Param('id') id: string, 
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserResponseDto> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Désactiver un utilisateur',
    description: 'Désactive un utilisateur (soft delete) - L\'utilisateur n\'est pas supprimé de la base'
  })
  @ApiParam({ 
    name: 'id', 
    description: 'Identifiant unique de l\'utilisateur',
    example: '123e4567-e89b-12d3-a456-426614174000'
  })
  @ApiSuccessResponse(null, 'Utilisateur désactivé avec succès')
  @ApiErrorResponse(404, 'Utilisateur non trouvé', 'NOT_FOUND')
  @ApiCommonResponses()
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}