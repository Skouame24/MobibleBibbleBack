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
exports.TestimoniesController = void 0;
const common_1 = require("@nestjs/common");
const testimonies_service_1 = require("./testimonies.service");
const create_testimony_dto_1 = require("./dto/create-testimony.dto");
const update_testimony_dto_1 = require("./dto/update-testimony.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let TestimoniesController = class TestimoniesController {
    constructor(testimoniesService) {
        this.testimoniesService = testimoniesService;
    }
    create(req, createTestimonyDto) {
        return this.testimoniesService.create(req.user.id, createTestimonyDto);
    }
    findAll() {
        return this.testimoniesService.findAll();
    }
    findDrafts(req) {
        return this.testimoniesService.findDrafts(req.user.id);
    }
    findOne(id) {
        return this.testimoniesService.findOne(id);
    }
    update(id, req, updateTestimonyDto) {
        return this.testimoniesService.update(id, req.user.id, updateTestimonyDto);
    }
    publish(id, req) {
        return this.testimoniesService.publish(id, req.user.id);
    }
    remove(id, req) {
        return this.testimoniesService.remove(id, req.user.id);
    }
};
exports.TestimoniesController = TestimoniesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create testimony (published or draft)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Testimony created successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_testimony_dto_1.CreateTestimonyDto]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all published testimonies' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all published testimonies' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('drafts'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all unpublished testimonies for current user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all unpublished testimonies' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "findDrafts", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get testimony by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return testimony by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update testimony' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Testimony updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_testimony_dto_1.UpdateTestimonyDto]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/publish'),
    (0, swagger_1.ApiOperation)({ summary: 'Publish testimony' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Testimony published successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "publish", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete testimony' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Testimony deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "remove", null);
exports.TestimoniesController = TestimoniesController = __decorate([
    (0, swagger_1.ApiTags)('testimonies'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('testimonies'),
    __metadata("design:paramtypes", [testimonies_service_1.TestimoniesService])
], TestimoniesController);
//# sourceMappingURL=testimonies.controller.js.map