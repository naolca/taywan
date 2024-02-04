import express from 'express';
import UserController from '../controllers/UserController';
import { Request } from 'express';

interface MyUserRequest extends Request {
    // Use `user?:` here instead of `user:`.
    user?: string;
  }
  
const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);

export default router;
