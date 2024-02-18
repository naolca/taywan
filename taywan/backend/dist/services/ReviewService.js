"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// services/ReviewService.ts
const ReviewRepository_1 = __importDefault(require("../repositories/ReviewRepository"));
class ReviewService {
    static async getAllReviews() {
        const reviews = await ReviewRepository_1.default.getAllReviews();
        return reviews;
    }
    static async createReview(userId, productId, rating, comment) {
        await ReviewRepository_1.default.createReview(userId, productId, rating, comment);
    }
    static async getProductReviews(productId) {
        const reviews = await ReviewRepository_1.default.getProductReviews(productId);
        return reviews;
    }
    static async deleteReview(reviewId) {
        await ReviewRepository_1.default.deleteReview(reviewId);
    }
    static async updateReview(reviewId, rating, comment) {
        await ReviewRepository_1.default.updateReview(reviewId, rating, comment);
    }
}
exports.default = ReviewService;
//# sourceMappingURL=ReviewService.js.map