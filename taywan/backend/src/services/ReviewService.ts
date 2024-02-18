// services/ReviewService.ts
import ReviewRepository from '../repositories/ReviewRepository';

class ReviewService {

  static async getAllReviews() {
    const reviews = await ReviewRepository.getAllReviews();
    return reviews;
  }
  static async createReview(userId: string | undefined, productId: string, rating: number, comment: string) {
    await ReviewRepository.createReview(userId, productId, rating, comment);
  }

  static async getProductReviews(productId: string) {
    const reviews = await ReviewRepository.getProductReviews(productId);
    return reviews;
  }

    static async deleteReview(reviewId: string) {
        await ReviewRepository.deleteReview(reviewId);
    }

    static async updateReview(reviewId: string, rating: number, comment: string) {
        await ReviewRepository.updateReview(reviewId, rating, comment);
    }

    
}

export default ReviewService;
