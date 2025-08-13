"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestimonyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_testimony_dto_1 = require("./create-testimony.dto");
class UpdateTestimonyDto extends (0, swagger_1.PartialType)(create_testimony_dto_1.CreateTestimonyDto) {
}
exports.UpdateTestimonyDto = UpdateTestimonyDto;
//# sourceMappingURL=update-testimony.dto.js.map