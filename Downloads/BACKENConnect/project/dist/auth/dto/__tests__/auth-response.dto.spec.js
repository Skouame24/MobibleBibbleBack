"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const auth_response_dto_1 = require("../auth-response.dto");
describe('Auth Response DTOs', () => {
    describe('UserAuthDto', () => {
        it('should create a valid UserAuthDto', async () => {
            const userData = {
                id: '123e4567-e89b-12d3-a456-426614174000',
                email: 'john.doe@example.com',
                name: 'John Doe',
                role: 'USER',
                isActive: true,
                createdAt: new Date('2024-01-15T10:30:00Z'),
                lastLogin: new Date('2024-01-15T10:30:00Z')
            };
            const userDto = (0, class_transformer_1.plainToClass)(auth_response_dto_1.UserAuthDto, userData);
            const errors = await (0, class_validator_1.validate)(userDto);
            expect(errors).toHaveLength(0);
            expect(userDto.id).toBe(userData.id);
            expect(userDto.email).toBe(userData.email);
            expect(userDto.name).toBe(userData.name);
            expect(userDto.role).toBe(userData.role);
            expect(userDto.isActive).toBe(userData.isActive);
        });
        it('should handle null name and lastLogin', async () => {
            const userData = {
                id: '123e4567-e89b-12d3-a456-426614174000',
                email: 'anonymous@example.com',
                name: null,
                role: 'USER',
                isActive: true,
                createdAt: new Date('2024-01-15T10:30:00Z'),
                lastLogin: null
            };
            const userDto = (0, class_transformer_1.plainToClass)(auth_response_dto_1.UserAuthDto, userData);
            const errors = await (0, class_validator_1.validate)(userDto);
            expect(errors).toHaveLength(0);
            expect(userDto.name).toBeNull();
            expect(userDto.lastLogin).toBeNull();
        });
        it('should validate required fields', async () => {
            const userData = {
                role: 'USER',
                isActive: true
            };
            const userDto = (0, class_transformer_1.plainToClass)(auth_response_dto_1.UserAuthDto, userData);
            const errors = await (0, class_validator_1.validate)(userDto);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors.some(e => e.property === 'id')).toBe(true);
            expect(errors.some(e => e.property === 'email')).toBe(true);
            expect(errors.some(e => e.property === 'createdAt')).toBe(true);
        });
    });
    describe('LoginResponseDto', () => {
        it('should create a valid LoginResponseDto', async () => {
            const loginData = {
                user: {
                    id: '123e4567-e89b-12d3-a456-426614174000',
                    email: 'john.doe@example.com',
                    name: 'John Doe',
                    role: 'USER',
                    isActive: true,
                    createdAt: new Date('2024-01-15T10:30:00Z'),
                    lastLogin: new Date('2024-01-15T10:30:00Z')
                },
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            };
            const loginDto = (0, class_transformer_1.plainToClass)(auth_response_dto_1.LoginResponseDto, loginData);
            const errors = await (0, class_validator_1.validate)(loginDto);
            expect(errors).toHaveLength(0);
            expect(loginDto.user).toBeDefined();
            expect(loginDto.token).toBe(loginData.token);
        });
        it('should validate token length', async () => {
            const loginData = {
                user: {
                    id: '123e4567-e89b-12d3-a456-426614174000',
                    email: 'john.doe@example.com',
                    name: 'John Doe',
                    role: 'USER',
                    isActive: true,
                    createdAt: new Date('2024-01-15T10:30:00Z'),
                    lastLogin: new Date('2024-01-15T10:30:00Z')
                },
                token: 'short'
            };
            const loginDto = (0, class_transformer_1.plainToClass)(auth_response_dto_1.LoginResponseDto, loginData);
            const errors = await (0, class_validator_1.validate)(loginDto);
            expect(errors.length).toBeGreaterThan(0);
            expect(errors.some(e => e.property === 'token')).toBe(true);
        });
    });
    describe('RegisterResponseDto', () => {
        it('should create a valid RegisterResponseDto', async () => {
            const registerData = {
                user: {
                    id: '456e7890-e89b-12d3-a456-426614174000',
                    email: 'jane.smith@example.com',
                    name: 'Jane Smith',
                    role: 'ADMIN',
                    isActive: true,
                    createdAt: new Date('2024-01-15T11:00:00Z'),
                    lastLogin: null
                },
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            };
            const registerDto = (0, class_transformer_1.plainToClass)(auth_response_dto_1.RegisterResponseDto, registerData);
            const errors = await (0, class_validator_1.validate)(registerDto);
            expect(errors).toHaveLength(0);
            expect(registerDto.user).toBeDefined();
            expect(registerDto.token).toBe(registerData.token);
        });
    });
    describe('AuthTestExamples', () => {
        it('should have valid example data', () => {
            const examples = new auth_response_dto_1.AuthTestExamples();
            expect(examples.loginSuccess).toBeDefined();
            expect(examples.registerSuccess).toBeDefined();
        });
    });
});
//# sourceMappingURL=auth-response.dto.spec.js.map