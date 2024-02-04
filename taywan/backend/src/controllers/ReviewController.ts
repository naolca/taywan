// controllers/ReviewControllers.ts
import { Request, Response } from 'express';
import ReviewService from '../services/ReviewService';
import { MyUserRequest } from '../config/definitions/MyRequest';
class ReviewController {
  static async createReview(req: MyUserRequest, res: Response) {
    try {
      const userId = req.user?.userId; // Get user ID from the authenticated user
      const productId = req.body.productId;
      const { rating, comment } = req.body;
      await ReviewService.createReview(userId, productId, rating, comment);
      res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
      console.error('Error creating review:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getProductReviews(req: Request, res: Response) {
    try {
      const productId = req.params.productId;
      const reviews = await ReviewService.getProductReviews(productId);
      res.json(reviews);
    } catch (error) {
      console.error('Error fetching product reviews:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

    static async deleteReview(req: Request, res: Response) {
        try {
        const reviewId = req.params.reviewId;
        await ReviewService.deleteReview(reviewId);
        res.json({ message: 'Review deleted successfully' });
        } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async updateReview(req: Request, res: Response) {
        try {
        const reviewId = req.params.reviewId;
        const { rating, comment } = req.body;
        await ReviewService.updateReview(reviewId, rating, comment);
        res.json({ message: 'Review updated successfully' });
        } catch (error) {
        console.error('Error updating review:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }


}

export default ReviewController;
