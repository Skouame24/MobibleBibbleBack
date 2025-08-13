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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTestExamples = exports.RegisterResponseDto = exports.LoginResponseDto = exports.UserAuthDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class UserAuthDto {
}
exports.UserAuthDto = UserAuthDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant unique de l\'utilisateur (UUID)'
    }),
    __metadata("design:type", String)
], UserAuthDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'user@example.com',
        description: 'Adresse email de l\'utilisateur (unique)'
    }),
    __metadata("design:type", String)
], UserAuthDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'Nom complet de l\'utilisateur',
        required: false,
        nullable: true
    }),
    __metadata("design:type", Object)
], UserAuthDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserRole,
        example: client_1.UserRole.USER,
        description: 'Rôle de l\'utilisateur dans l\'application',
        default: client_1.UserRole.USER
    }),
    __metadata("design:type", String)
], UserAuthDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Indique si le compte utilisateur est actif'
    }),
    __metadata("design:type", Boolean)
], UserAuthDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date de création du compte (ISO 8601)'
    }),
    __metadata("design:type", Date)
], UserAuthDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date de dernière connexion (ISO 8601)',
        required: false,
        nullable: true
    }),
    __metadata("design:type", Object)
], UserAuthDto.prototype, "lastLogin", void 0);
class LoginResponseDto {
}
exports.LoginResponseDto = LoginResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: UserAuthDto,
        description: 'Informations complètes de l\'utilisateur connecté'
    }),
    __metadata("design:type", UserAuthDto)
], LoginResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        description: 'Token JWT pour l\'authentification (valide 24h)',
        minLength: 100
    }),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "token", void 0);
class RegisterResponseDto {
}
exports.RegisterResponseDto = RegisterResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: UserAuthDto,
        description: 'Informations complètes du nouvel utilisateur créé'
    }),
    __metadata("design:type", UserAuthDto)
], RegisterResponseDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        description: 'Token JWT pour l\'authentification (valide 24h)',
        minLength: 100
    }),
    __metadata("design:type", String)
], RegisterResponseDto.prototype, "token", void 0);
class AuthTestExamples {
}
exports.AuthTestExamples = AuthTestExamples;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            user: {
                id: '123e4567-e89b-12d3-a456-426614174000',
                email: 'john.doe@example.com',
                name: 'John Doe',
                role: 'USER',
                isActive: true,
                createdAt: '2024-01-15T10:30:00Z',
                lastLogin: '2024-01-15T10:30:00Z'
            },
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
        },
        description: 'Exemple de réponse de connexion réussie'
    }),
    __metadata("design:type", LoginResponseDto)
], AuthTestExamples.prototype, "loginSuccess", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            user: {
                id: '456e7890-e89b-12d3-a456-426614174000',
                email: 'jane.smith@example.com',
                name: 'Jane Smith',
                role: 'ADMIN',
                isActive: true,
                createdAt: '2024-01-15T11:00:00Z',
                lastLogin: null
            },
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
        },
        description: 'Exemple de réponse d\'inscription réussie'
    }),
    __metadata("design:type", RegisterResponseDto)
], AuthTestExamples.prototype, "registerSuccess", void 0);
//# sourceMappingURL=auth-response.dto.js.map