"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ReviewService_1 = tslib_1.__importDefault(require("../services/ReviewService"));
class ReviewController {
    static async createReview(req, res) {
        try {
            const userId = req.user?.userId; // Get user ID from the authenticated user
            const productId = req.body.productId;
            const { rating, comment } = req.body;
            await ReviewService_1.default.createReview(userId, productId, rating, comment);
            res.status(201).json({ message: 'Review added successfully' });
        }
        catch (error) {
            console.error('Error creating review:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getProductReviews(req, res) {
        try {
            const productId = req.params.productId;
            const reviews = await ReviewService_1.default.getProductReviews(productId);
            res.json(reviews);
        }
        catch (error) {
            console.error('Error fetching product reviews:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async deleteReview(req, res) {
        try {
            const reviewId = req.params.reviewId;
            await ReviewService_1.default.deleteReview(reviewId);
            res.json({ message: 'Review deleted successfully' });
        }
        catch (error) {
            console.error('Error deleting review:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async updateReview(req, res) {
        try {
            const reviewId = req.params.reviewId;
            const { rating, comment } = req.body;
            await ReviewService_1.default.updateReview(reviewId, rating, comment);
            res.json({ message: 'Review updated successfully' });
        }
        catch (error) {
            console.error('Error updating review:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
exports.default = ReviewController;
//# sourceMappingURL=ReviewController.js.map