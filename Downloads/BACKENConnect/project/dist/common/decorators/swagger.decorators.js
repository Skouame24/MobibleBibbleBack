"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCommonResponses = exports.ApiErrorResponse = exports.ApiPaginatedResponse = exports.ApiCreatedResponse = exports.ApiSuccessResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_response_dto_1 = require("../dto/api-response.dto");
const ApiSuccessResponse = (model, description) => (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
    status: 200,
    description: description || 'Success',
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(api_response_dto_1.ApiResponseDto) },
            {
                properties: {
                    data: { $ref: (0, swagger_1.getSchemaPath)(model) }
                }
            }
        ]
    }
}));
exports.ApiSuccessResponse = ApiSuccessResponse;
const ApiCreatedResponse = (model, description) => (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
    status: 201,
    description: description || 'Created successfully',
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(api_response_dto_1.ApiResponseDto) },
            {
                properties: {
                    data: { $ref: (0, swagger_1.getSchemaPath)(model) }
                }
            }
        ]
    }
}));
exports.ApiCreatedResponse = ApiCreatedResponse;
const ApiPaginatedResponse = (model, description) => (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
    status: 200,
    description: description || 'Paginated results',
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(api_response_dto_1.ApiResponseDto) },
            {
                properties: {
                    data: {
                        type: 'array',
                        items: { $ref: (0, swagger_1.getSchemaPath)(model) }
                    },
                    page: { type: 'number', example: 1 },
                    limit: { type: 'number', example: 10 },
                    total: { type: 'number', example: 100 },
                    totalPages: { type: 'number', example: 10 }
                }
            }
        ]
    }
}));
exports.ApiPaginatedResponse = ApiPaginatedResponse;
const ApiErrorResponse = (status, description, errorCode) => (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
    status,
    description,
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(api_response_dto_1.ErrorResponseDto) },
            {
                properties: {
                    statusCode: { example: status },
                    error: { example: errorCode || 'ERROR' }
                }
            }
        ]
    }
}));
exports.ApiErrorResponse = ApiErrorResponse;
const ApiCommonResponses = () => (0, common_1.applyDecorators)((0, exports.ApiErrorResponse)(400, 'Bad Request', 'BAD_REQUEST'), (0, exports.ApiErrorResponse)(401, 'Unauthorized', 'UNAUTHORIZED'), (0, exports.ApiErrorResponse)(403, 'Forbidden', 'FORBIDDEN'), (0, exports.ApiErrorResponse)(404, 'Not Found', 'NOT_FOUND'), (0, exports.ApiErrorResponse)(500, 'Internal Server Error', 'INTERNAL_SERVER_ERROR'));
exports.ApiCommonResponses = ApiCommonResponses;
//# sourceMappingURL=swagger.decorators.js.map