import { applyDecorators } from '@nestjs/common';
import { ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { ApiResponseDto, ErrorResponseDto } from '../dto/api-response.dto';

export const ApiSuccessResponse = <T>(model: any, description?: string) => 
  applyDecorators(
    ApiResponse({
      status: 200,
      description: description || 'Success',
      schema: {
        allOf: [
          { $ref: getSchemaPath(ApiResponseDto) },
          {
            properties: {
              data: { $ref: getSchemaPath(model) }
            }
          }
        ]
      }
    })
  );

export const ApiCreatedResponse = <T>(model: any, description?: string) =>
  applyDecorators(
    ApiResponse({
      status: 201,
      description: description || 'Created successfully',
      schema: {
        allOf: [
          { $ref: getSchemaPath(ApiResponseDto) },
          {
            properties: {
              data: { $ref: getSchemaPath(model) }
            }
          }
        ]
      }
    })
  );

export const ApiPaginatedResponse = <T>(model: any, description?: string) =>
  applyDecorators(
    ApiResponse({
      status: 200,
      description: description || 'Paginated results',
      schema: {
        allOf: [
          { $ref: getSchemaPath(ApiResponseDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) }
              },
              page: { type: 'number', example: 1 },
              limit: { type: 'number', example: 10 },
              total: { type: 'number', example: 100 },
              totalPages: { type: 'number', example: 10 }
            }
          }
        ]
      }
    })
  );

export const ApiErrorResponse = (status: number, description: string, errorCode?: string) =>
  applyDecorators(
    ApiResponse({
      status,
      description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(ErrorResponseDto) },
          {
            properties: {
              statusCode: { example: status },
              error: { example: errorCode || 'ERROR' }
            }
          }
        ]
      }
    })
  );

export const ApiCommonResponses = () =>
  applyDecorators(
    ApiErrorResponse(400, 'Bad Request', 'BAD_REQUEST'),
    ApiErrorResponse(401, 'Unauthorized', 'UNAUTHORIZED'),
    ApiErrorResponse(403, 'Forbidden', 'FORBIDDEN'),
    ApiErrorResponse(404, 'Not Found', 'NOT_FOUND'),
    ApiErrorResponse(500, 'Internal Server Error', 'INTERNAL_SERVER_ERROR')
  ); 