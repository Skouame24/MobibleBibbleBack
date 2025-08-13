"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const users_module_1 = require("./users/users.module");
const testimonies_module_1 = require("./testimonies/testimonies.module");
const comments_module_1 = require("./comments/comments.module");
const library_module_1 = require("./library/library.module");
const reading_plans_module_1 = require("./reading-plans/reading-plans.module");
const bible_module_1 = require("./bible/bible.module");
const reactions_module_1 = require("./reactions/reactions.module");
const highlights_module_1 = require("./highlights/highlights.module");
const notes_module_1 = require("./notes/notes.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            testimonies_module_1.TestimoniesModule,
            reading_plans_module_1.ReadingPlansModule,
            library_module_1.LibraryModule,
            comments_module_1.CommentsModule,
            bible_module_1.BibleModule,
            reactions_module_1.ReactionsModule,
            highlights_module_1.HighlightsModule,
            notes_module_1.NotesModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map