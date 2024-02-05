"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// repositories/ReviewRepository.ts
const ReviewModel_1 = __importDefault(require("../models/ReviewModel"));
class ReviewRepository {
    static async createReview(userId, productId, rating, comment) {
        await ReviewModel_1.default.create({ userId, productId, rating, comment });
    }
    static async getProductReviews(productId) {
        return ReviewModel_1.default.find({ productId }).populate('userId', 'username'); // Populate user details in the reviews
    }
    static async deleteReview(reviewId) {
        await ReviewModel_1.default.findByIdAndDelete(reviewId);
    }
    static async updateReview(reviewId, rating, comment) {
        await ReviewModel_1.default.findByIdAndUpdate(reviewId, { rating, comment });
    }
}
exports.default = ReviewRepository;
//# sourceMappingURL=ReviewRepository.js.map