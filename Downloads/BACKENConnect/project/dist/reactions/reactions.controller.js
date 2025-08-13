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
exports.ReactionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const reactions_service_1 = require("./reactions.service");
const create_reaction_dto_1 = require("./dto/create-reaction.dto");
let ReactionsController = class ReactionsController {
    constructor(reactionsService) {
        this.reactionsService = reactionsService;
    }
    create(testimonyId, req, createReactionDto) {
        return this.reactionsService.create(testimonyId, req.user.id, createReactionDto);
    }
    remove(testimonyId, req) {
        return this.reactionsService.remove(testimonyId, req.user.id);
    }
    getReactions(testimonyId) {
        return this.reactionsService.getReactionsByTestimony(testimonyId);
    }
};
exports.ReactionsController = ReactionsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une réaction' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Réaction créée avec succès' }),
    __param(0, (0, common_1.Param)('testimonyId')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, create_reaction_dto_1.CreateReactionDto]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une réaction' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Réaction supprimée avec succès' }),
    __param(0, (0, common_1.Param)('testimonyId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtenir les réactions d\'un témoignage' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retourne les statistiques des réactions' }),
    __param(0, (0, common_1.Param)('testimonyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReactionsController.prototype, "getReactions", null);
exports.ReactionsController = ReactionsController = __decorate([
    (0, swagger_1.ApiTags)('reactions'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('testimonies/:testimonyId/reactions'),
    __metadata("design:paramtypes", [reactions_service_1.ReactionsService])
], ReactionsController);
//# sourceMappingURL=reactions.controller.js.map