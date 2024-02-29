import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository';
import UserModel from '../models/UserModel';

class UserService {
  static async registerUser(userData: any) {
    const { username, email, password } = userData;
    const existingUser = await UserRepository.findByUsername(username);

    if (existingUser) {
      throw new Error('Username is already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({ username, email, password: hashedPassword });

    return newUser;
  }

  static async loginUser(username: string, password: string) {
    console.log("here in the service");
   
    const user = await UserRepository.findByUsername(username);

    if (!user) {
      throw new Error('Invalid username or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Invalid username or password');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret');
    return token;
  }

  static async getUserProfile(userId: string) {
    const user = await UserRepository.findById(userId);
    return user;
  }
}

export default UserService;
