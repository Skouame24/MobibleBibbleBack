"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dto/register.dto");
const login_dto_1 = require("./dto/login.dto");
const swagger_1 = require("@nestjs/swagger");
const swagger_decorators_1 = require("../common/decorators/swagger.decorators");
const auth_response_dto_1 = require("./dto/auth-response.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        return this.authService.register(registerDto);
    }
    async login(loginDto) {
        return this.authService.login(loginDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Inscription d\'un nouvel utilisateur',
        description: 'Crée un nouveau compte utilisateur avec email, mot de passe et nom'
    }),
    (0, swagger_1.ApiBody)({
        type: register_dto_1.RegisterDto,
        description: 'Données d\'inscription de l\'utilisateur'
    }),
    (0, swagger_decorators_1.ApiCreatedResponse)(auth_response_dto_1.RegisterResponseDto, 'Utilisateur créé avec succès'),
    (0, swagger_1.ApiBadRequestResponse)({
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
    }),
    (0, swagger_1.ApiConflictResponse)({
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
    }),
    (0, swagger_decorators_1.ApiErrorResponse)(500, 'Erreur interne du serveur', 'INTERNAL_SERVER_ERROR'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Connexion utilisateur',
        description: 'Authentifie un utilisateur avec email et mot de passe'
    }),
    (0, swagger_1.ApiBody)({
        type: login_dto_1.LoginDto,
        description: 'Données de connexion'
    }),
    (0, swagger_decorators_1.ApiSuccessResponse)(auth_response_dto_1.LoginResponseDto, 'Connexion réussie'),
    (0, swagger_1.ApiBadRequestResponse)({
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
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
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
    }),
    (0, swagger_decorators_1.ApiErrorResponse)(500, 'Erreur interne du serveur', 'INTERNAL_SERVER_ERROR'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map