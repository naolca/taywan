import { Request, Response } from 'express';
import { MyUserRequest } from '../config/definitions/MyRequest';
declare class ReviewController {
    static createReview(req: MyUserRequest, res: Response): Promise<void>;
    static getProductReviews(req: Request, res: Response): Promise<void>;
    static deleteReview(req: Request, res: Response): Promise<void>;
    static updateReview(req: Request, res: Response): Promise<void>;
}
export default ReviewController;
