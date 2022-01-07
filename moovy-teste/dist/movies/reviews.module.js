"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const review_provider_1 = require("../providers/review.provider");
const reviews_controller_1 = require("./reviews.controller");
const reviews_service_1 = require("./reviews.service");
let ReviewsModule = class ReviewsModule {
};
ReviewsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule
        ],
        controllers: [reviews_controller_1.ReviewsController],
        providers: [...review_provider_1.reviewProvider, reviews_service_1.ReviewsService],
    })
], ReviewsModule);
exports.ReviewsModule = ReviewsModule;
//# sourceMappingURL=reviews.module.js.map