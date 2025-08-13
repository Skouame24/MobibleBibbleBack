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
exports.ReadingPlansController = void 0;
const common_1 = require("@nestjs/common");
const reading_plans_service_1 = require("./reading-plans.service");
const swagger_1 = require("@nestjs/swagger");
const create_reading_plan_dto_1 = require("./dto/create-reading-plan.dto");
const update_progress_dto_1 = require("./dto/update-progress.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ReadingPlansController = class ReadingPlansController {
    constructor(readingPlansService) {
        this.readingPlansService = readingPlansService;
    }
    async createPlan(data, req) {
        return this.readingPlansService.createReadingPlan(req.user.id, data);
    }
    async getUserPlans(req, isActive) {
        return this.readingPlansService.getUserPlans(req.user.id, isActive);
    }
    async getPlan(id) {
        return this.readingPlansService.getReadingPlan(id);
    }
    async updateProgress(planId, data) {
        return this.readingPlansService.updateProgress(planId, data);
    }
    async deactivatePlan(id) {
        return this.readingPlansService.deactivatePlan(id);
    }
};
exports.ReadingPlansController = ReadingPlansController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau plan de lecture' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reading_plan_dto_1.CreateReadingPlanDto, Object]),
    __metadata("design:returntype", Promise)
], ReadingPlansController.prototype, "createPlan", null);
__decorate([
    (0, common_1.Get)('user'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtenir les plans de lecture de l\'utilisateur' }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, type: Boolean }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", Promise)
], ReadingPlansController.prototype, "getUserPlans", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtenir un plan de lecture spécifique' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReadingPlansController.prototype, "getPlan", null);
__decorate([
    (0, common_1.Post)(':id/progress'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour la progression d\'un plan de lecture' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_progress_dto_1.UpdateProgressDto]),
    __metadata("design:returntype", Promise)
], ReadingPlansController.prototype, "updateProgress", null);
__decorate([
    (0, common_1.Patch)(':id/deactivate'),
    (0, swagger_1.ApiOperation)({ summary: 'Désactiver un plan de lecture' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReadingPlansController.prototype, "deactivatePlan", null);
exports.ReadingPlansController = ReadingPlansController = __decorate([
    (0, swagger_1.ApiTags)('Plans de lecture'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('reading-plans'),
    __metadata("design:paramtypes", [reading_plans_service_1.ReadingPlansService])
], ReadingPlansController);
//# sourceMappingURL=reading-plans.controller.js.map