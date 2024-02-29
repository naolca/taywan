import express from 'express';
import UserController from '../controllers/UserController';
import { authenticateUser } from '../middlewares/AuthenticationMiddleware';



  
const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/profile',authenticateUser, UserController.getProfile);
router.get('/:id', UserController.getUserById);

export default router;
