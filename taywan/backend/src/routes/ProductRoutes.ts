// routes/productRoutes.ts
import express from 'express';
import ProductController from '../controllers/ProductController';
import { authenticateUser } from '../middlewares/AuthenticationMiddleware';


const router = express.Router();

router.post('/create', authenticateUser, ProductController.createProduct);
router.get('/:id', authenticateUser, ProductController.getProductDetails);
router.get('/', authenticateUser, ProductController.getProducts);


module.exports = router;

// default export ProductRoutes
export default { router }



//dfs