"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// services/ReviewService.ts
const ReviewRepository_1 = tslib_1.__importDefault(require("../repositories/ReviewRepository"));
class ReviewService {
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