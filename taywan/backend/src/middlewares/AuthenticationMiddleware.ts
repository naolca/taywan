// middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { MyUserRequest } from '../config/definitions/MyRequest';

const secret = process.env.JWT_SECRET || 'secret'; // Replace 'secret' with a strong secret in production

export const authenticateUser = (req: MyUserRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
};
