"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const moovy_provider_1 = require("../providers/moovy.provider");
const review_provider_1 = require("../providers/review.provider");
const movies_controller_1 = require("./movies.controller");
const movies_service_1 = require("./movies.service");
const reviews_controller_1 = require("./reviews.controller");
const reviews_service_1 = require("./reviews.service");
let MoviesModule = class MoviesModule {
};
MoviesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule
        ],
        controllers: [movies_controller_1.MoviesController, reviews_controller_1.ReviewsController],
        providers: [...moovy_provider_1.moovyProvider, ...review_provider_1.reviewProvider, movies_service_1.MoviesService, reviews_service_1.ReviewsService],
    })
], MoviesModule);
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module%20copy.js.map