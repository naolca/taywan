import { Response, NextFunction } from 'express';
import { MyUserRequest } from '../config/definitions/MyRequest';
export declare const authenticateUser: (req: MyUserRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
