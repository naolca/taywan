import express from 'express';
import UserController from '../controllers/UserController';



  
const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/profile', UserController.getProfile);

export default router;
