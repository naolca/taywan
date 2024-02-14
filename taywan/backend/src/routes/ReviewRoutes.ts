// routes/reviewRoutes.ts
import express from 'express';
import ReviewController from '../controllers/ReviewController';
import { authenticateUser } from '../middlewares/AuthenticationMiddleware';


const router = express.Router();

router.get('/', ReviewController.getAllReviews);
router.post('/create', authenticateUser, ReviewController.createReview);
router.get('/product/:productId', ReviewController.getProductReviews);


export default router;