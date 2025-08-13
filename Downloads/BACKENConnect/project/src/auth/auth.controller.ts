import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiBody,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiConflictResponse
} from '@nestjs/swagger';
import { 
  ApiCreatedResponse, 
  ApiSuccessResponse, 
  ApiErrorResponse 
} from '../common/decorators/swagger.decorators';
import { LoginResponseDto, RegisterResponseDto } from './dto/auth-response.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ 
    summary: 'Inscription d\'un nouvel utilisateur',
    description: 'Crée un nouveau compte utilisateur avec email, mot de passe et nom'
  })
  @ApiBody({ 
    type: RegisterDto,
    description: 'Données d\'inscription de l\'utilisateur'
  })
  @ApiCreatedResponse(RegisterResponseDto, 'Utilisateur créé avec succès')
  @ApiBadRequestResponse({ 
    description: 'Données d\'inscription invalides',
    schema: {
      example: {
        success: false,
        message: 'Validation failed',
        error: 'BAD_REQUEST',
        statusCode: 400,
        timestamp: '2024-01-15T10:30:00Z',
        data: {
          email: ['email must be an email'],
          password: ['password must be longer than or equal to 8 characters']
        }
      }
    }
  })
  @ApiConflictResponse({ 
    description: 'Email déjà utilisé',
    schema: {
      example: {
        success: false,
        message: 'Email already exists',
        error: 'CONFLICT',
        statusCode: 409,
        timestamp: '2024-01-15T10:30:00Z'
      }
    }
  })
  @ApiErrorResponse(500, 'Erreur interne du serveur', 'INTERNAL_SERVER_ERROR')
  async register(@Body() registerDto: RegisterDto): Promise<RegisterResponseDto> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ 
    summary: 'Connexion utilisateur',
    description: 'Authentifie un utilisateur avec email et mot de passe'
  })
  @ApiBody({ 
    type: LoginDto,
    description: 'Données de connexion'
  })
  @ApiSuccessResponse(LoginResponseDto, 'Connexion réussie')
  @ApiBadRequestResponse({ 
    description: 'Données de connexion invalides',
    schema: {
      example: {
        success: false,
        message: 'Validation failed',
        error: 'BAD_REQUEST',
        statusCode: 400,
        timestamp: '2024-01-15T10:30:00Z',
        data: {
          email: ['email must be an email'],
          password: ['password should not be empty']
        }
      }
    }
  })
  @ApiUnauthorizedResponse({ 
    description: 'Identifiants invalides',
    schema: {
      example: {
        success: false,
        message: 'Invalid credentials',
        error: 'UNAUTHORIZED',
        statusCode: 401,
        timestamp: '2024-01-15T10:30:00Z'
      }
    }
  })
  @ApiErrorResponse(500, 'Erreur interne du serveur', 'INTERNAL_SERVER_ERROR')
  async login(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.login(loginDto);
  }
}