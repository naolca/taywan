  import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { MyUserRequest } from '../config/definitions/MyRequest';

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

    console.log("here in the controller");
    try {
      const { username, password } = req.body;
      const token = await UserService.loginUser(username, password);
      res.json({ token });
    } catch (error) {
      console.error('Error during user login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async getProfile(req: MyUserRequest, res: Response) {
    try {
      const { user } = req.user;
      res.json(user);
    } catch (error) {
      console.error('Error during user profile retrieval:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default UserController;
