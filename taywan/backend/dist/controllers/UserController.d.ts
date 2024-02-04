import { Request, Response } from 'express';
declare class UserController {
    static register(req: Request, res: Response): Promise<void>;
    static login(req: Request, res: Response): Promise<void>;
}
export default UserController;
