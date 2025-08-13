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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const swagger_decorators_1 = require("../common/decorators/swagger.decorators");
const user_response_dto_1 = require("./dto/user-response.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async findOne(id) {
        return this.usersService.findOne(id);
    }
    async update(id, updateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
    async remove(id) {
        return this.usersService.remove(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Récupérer tous les utilisateurs',
        description: 'Retourne la liste de tous les utilisateurs actifs (réservé aux administrateurs)'
    }),
    (0, swagger_decorators_1.ApiSuccessResponse)(user_response_dto_1.UserResponseDto, 'Liste des utilisateurs récupérée avec succès'),
    (0, swagger_1.ApiForbiddenResponse)({
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
    }),
    (0, swagger_decorators_1.ApiCommonResponses)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Récupérer un utilisateur par ID',
        description: 'Retourne les informations d\'un utilisateur spécifique'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identifiant unique de l\'utilisateur',
        example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    (0, swagger_decorators_1.ApiSuccessResponse)(user_response_dto_1.UserResponseDto, 'Utilisateur récupéré avec succès'),
    (0, swagger_decorators_1.ApiErrorResponse)(404, 'Utilisateur non trouvé', 'NOT_FOUND'),
    (0, swagger_decorators_1.ApiCommonResponses)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Mettre à jour un utilisateur',
        description: 'Modifie les informations d\'un utilisateur existant'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identifiant unique de l\'utilisateur',
        example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    (0, swagger_1.ApiBody)({
        type: update_user_dto_1.UpdateUserDto,
        description: 'Données de mise à jour de l\'utilisateur'
    }),
    (0, swagger_decorators_1.ApiSuccessResponse)(user_response_dto_1.UserResponseDto, 'Utilisateur mis à jour avec succès'),
    (0, swagger_1.ApiBadRequestResponse)({
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
    }),
    (0, swagger_decorators_1.ApiErrorResponse)(404, 'Utilisateur non trouvé', 'NOT_FOUND'),
    (0, swagger_decorators_1.ApiCommonResponses)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Désactiver un utilisateur',
        description: 'Désactive un utilisateur (soft delete) - L\'utilisateur n\'est pas supprimé de la base'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identifiant unique de l\'utilisateur',
        example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    (0, swagger_decorators_1.ApiSuccessResponse)(null, 'Utilisateur désactivé avec succès'),
    (0, swagger_decorators_1.ApiErrorResponse)(404, 'Utilisateur non trouvé', 'NOT_FOUND'),
    (0, swagger_decorators_1.ApiCommonResponses)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users Management'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map