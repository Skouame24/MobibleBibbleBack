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
exports.UserTestExamples = exports.UserListResponseDto = exports.UserResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class UserResponseDto {
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant unique de l\'utilisateur (UUID v4)',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john.doe@example.com',
        description: 'Adresse email de l\'utilisateur (unique, format email valide)',
        format: 'email'
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'Nom complet de l\'utilisateur (optionnel)',
        required: false,
        nullable: true,
        minLength: 2,
        maxLength: 100
    }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.UserRole,
        example: client_1.UserRole.USER,
        description: 'Rôle de l\'utilisateur dans l\'application',
        default: client_1.UserRole.USER
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Indique si le compte utilisateur est actif (soft delete)'
    }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date de création du compte (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date de dernière modification du compte (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date de dernière connexion (ISO 8601)',
        required: false,
        nullable: true,
        format: 'date-time'
    }),
    __metadata("design:type", Object)
], UserResponseDto.prototype, "lastLogin", void 0);
class UserListResponseDto {
}
exports.UserListResponseDto = UserListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [UserResponseDto],
        description: 'Liste des utilisateurs avec pagination'
    }),
    __metadata("design:type", Array)
], UserListResponseDto.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 100,
        description: 'Nombre total d\'utilisateurs dans la base'
    }),
    __metadata("design:type", Number)
], UserListResponseDto.prototype, "total", void 0);
class UserTestExamples {
}
exports.UserTestExamples = UserTestExamples;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '123e4567-e89b-12d3-a456-426614174000',
            email: 'john.doe@example.com',
            name: 'John Doe',
            role: 'USER',
            isActive: true,
            createdAt: '2024-01-15T10:30:00Z',
            updatedAt: '2024-01-15T10:30:00Z',
            lastLogin: '2024-01-15T10:30:00Z'
        },
        description: 'Exemple d\'utilisateur standard'
    }),
    __metadata("design:type", UserResponseDto)
], UserTestExamples.prototype, "standardUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '456e7890-e89b-12d3-a456-426614174000',
            email: 'admin@foiconnectee.com',
            name: 'Admin User',
            role: 'ADMIN',
            isActive: true,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-15T12:00:00Z',
            lastLogin: '2024-01-15T12:00:00Z'
        },
        description: 'Exemple d\'utilisateur administrateur'
    }),
    __metadata("design:type", UserResponseDto)
], UserTestExamples.prototype, "adminUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '789e0123-e89b-12d3-a456-426614174000',
            email: 'anonymous@example.com',
            name: null,
            role: 'USER',
            isActive: true,
            createdAt: '2024-01-10T15:30:00Z',
            updatedAt: '2024-01-10T15:30:00Z',
            lastLogin: null
        },
        description: 'Exemple d\'utilisateur sans nom'
    }),
    __metadata("design:type", UserResponseDto)
], UserTestExamples.prototype, "anonymousUser", void 0);
//# sourceMappingURL=user-response.dto.js.map