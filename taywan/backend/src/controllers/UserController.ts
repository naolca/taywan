import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const newUser = await UserService.registerUser({ username, email, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const token = await UserService.loginUser(username, password);
      res.json({ token });
    } catch (error) {
      console.error('Error during user login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default UserController;
