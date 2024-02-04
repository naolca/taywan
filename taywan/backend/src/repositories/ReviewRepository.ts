// repositories/ReviewRepository.ts
import ReviewModel from '../models/ReviewModel';

class ReviewRepository {
  static async createReview(userId: string | undefined, productId: string, rating: number, comment: string) {
    await ReviewModel.create({ userId, productId, rating, comment });
  }

  static async getProductReviews(productId: string) {
    return ReviewModel.find({ productId }).populate('userId', 'username'); // Populate user details in the reviews
  }

    static async deleteReview(reviewId: string) {
        await ReviewModel.findByIdAndDelete(reviewId);
    }

    static async updateReview(reviewId: string, rating: number, comment: string) {
        await ReviewModel.findByIdAndUpdate
        (reviewId, { rating, comment });
    }

    
}

export default ReviewRepository;
