// routes/cartRoutes.ts
import express from 'express';
import CartController from '../controllers/CartController';
import { authenticateUser } from '../middlewares/AuthenticationMiddleware';

const router = express.Router();

router.get('/details', authenticateUser, CartController.getCartDetails);
router.post('/add', authenticateUser, CartController.addToCart);


module.exports = router;
