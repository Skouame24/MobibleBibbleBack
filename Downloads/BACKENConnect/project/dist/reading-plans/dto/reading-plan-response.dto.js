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
exports.ReadingPlanTestExamples = exports.ReadingPlanListResponseDto = exports.ReadingPlanWithProgressDto = exports.ReadingProgressDto = exports.ReadingPlanResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReadingPlanResponseDto {
}
exports.ReadingPlanResponseDto = ReadingPlanResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant unique du plan de lecture (UUID v4)',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], ReadingPlanResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant de l\'utilisateur propriétaire du plan',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], ReadingPlanResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Lecture quotidienne de la Bible',
        description: 'Titre du plan de lecture',
        minLength: 3,
        maxLength: 200
    }),
    __metadata("design:type", String)
], ReadingPlanResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Plan de lecture biblique sur 365 jours pour couvrir toute la Bible',
        description: 'Description détaillée du plan de lecture',
        required: false,
        nullable: true,
        maxLength: 1000
    }),
    __metadata("design:type", Object)
], ReadingPlanResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-01T00:00:00Z',
        description: 'Date de début du plan de lecture (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], ReadingPlanResponseDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-12-31T23:59:59Z',
        description: 'Date de fin prévue du plan de lecture (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], ReadingPlanResponseDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Indique si le plan de lecture est actuellement actif'
    }),
    __metadata("design:type", Boolean)
], ReadingPlanResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-01T00:00:00Z',
        description: 'Date de création du plan (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], ReadingPlanResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-01T00:00:00Z',
        description: 'Date de dernière modification du plan (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], ReadingPlanResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 45,
        description: 'Nombre de jours écoulés depuis le début',
        minimum: 0
    }),
    __metadata("design:type", Number)
], ReadingPlanResponseDto.prototype, "daysElapsed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 320,
        description: 'Nombre de jours restants jusqu\'à la fin',
        minimum: 0
    }),
    __metadata("design:type", Number)
], ReadingPlanResponseDto.prototype, "daysRemaining", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0.12,
        description: 'Pourcentage de progression du plan (0.0 à 1.0)',
        minimum: 0,
        maximum: 1
    }),
    __metadata("design:type", Number)
], ReadingPlanResponseDto.prototype, "progressPercentage", void 0);
class ReadingProgressDto {
}
exports.ReadingProgressDto = ReadingProgressDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant unique de la progression (UUID v4)',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], ReadingProgressDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant du plan de lecture associé',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], ReadingProgressDto.prototype, "readingPlanId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123e4567-e89b-12d3-a456-426614174000',
        description: 'Identifiant de l\'utilisateur',
        minLength: 36,
        maxLength: 36
    }),
    __metadata("design:type", String)
], ReadingProgressDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'genesis-1-1',
        description: 'Identifiant du verset lu',
        pattern: '^[a-z]+-[0-9]+-[0-9]+$'
    }),
    __metadata("design:type", String)
], ReadingProgressDto.prototype, "verseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date de lecture du verset (ISO 8601)',
        format: 'date-time',
        required: false,
        nullable: true
    }),
    __metadata("design:type", Object)
], ReadingProgressDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-01-15T10:30:00Z',
        description: 'Date de création de l\'entrée de progression (ISO 8601)',
        format: 'date-time'
    }),
    __metadata("design:type", Date)
], ReadingProgressDto.prototype, "createdAt", void 0);
class ReadingPlanWithProgressDto extends ReadingPlanResponseDto {
}
exports.ReadingPlanWithProgressDto = ReadingPlanWithProgressDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ReadingProgressDto],
        description: 'Liste des progrès de lecture associés au plan'
    }),
    __metadata("design:type", Array)
], ReadingPlanWithProgressDto.prototype, "progress", void 0);
class ReadingPlanListResponseDto {
}
exports.ReadingPlanListResponseDto = ReadingPlanListResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ReadingPlanResponseDto],
        description: 'Liste des plans de lecture de l\'utilisateur'
    }),
    __metadata("design:type", Array)
], ReadingPlanListResponseDto.prototype, "plans", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 5,
        description: 'Nombre total de plans de lecture'
    }),
    __metadata("design:type", Number)
], ReadingPlanListResponseDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 3,
        description: 'Nombre de plans actifs'
    }),
    __metadata("design:type", Number)
], ReadingPlanListResponseDto.prototype, "activeCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Nombre de plans terminés'
    }),
    __metadata("design:type", Number)
], ReadingPlanListResponseDto.prototype, "completedCount", void 0);
class ReadingPlanTestExamples {
}
exports.ReadingPlanTestExamples = ReadingPlanTestExamples;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '123e4567-e89b-12d3-a456-426614174000',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            title: 'Lecture quotidienne de la Bible',
            description: 'Plan de lecture biblique sur 365 jours pour couvrir toute la Bible',
            startDate: '2024-01-01T00:00:00Z',
            endDate: '2024-12-31T23:59:59Z',
            isActive: true,
            createdAt: '2024-01-01T00:00:00Z',
            updatedAt: '2024-01-01T00:00:00Z',
            daysElapsed: 45,
            daysRemaining: 320,
            progressPercentage: 0.12
        },
        description: 'Exemple de plan de lecture actif'
    }),
    __metadata("design:type", ReadingPlanResponseDto)
], ReadingPlanTestExamples.prototype, "activePlan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: '456e7890-e89b-12d3-a456-426614174000',
            userId: '123e4567-e89b-12d3-a456-426614174000',
            title: 'Étude des Psaumes',
            description: 'Lecture et méditation des 150 Psaumes sur 3 mois',
            startDate: '2023-10-01T00:00:00Z',
            endDate: '2023-12-31T23:59:59Z',
            isActive: false,
            createdAt: '2023-10-01T00:00:00Z',
            updatedAt: '2023-12-31T23:59:59Z',
            daysElapsed: 92,
            daysRemaining: 0,
            progressPercentage: 1.0
        },
        description: 'Exemple de plan de lecture terminé'
    }),
    __metadata("design:type", ReadingPlanResponseDto)
], ReadingPlanTestExamples.prototype, "completedPlan", void 0);
//# sourceMappingURL=reading-plan-response.dto.js.map