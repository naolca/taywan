import { Request, Response } from 'express';
import { MyUserRequest } from '../config/definitions/MyRequest';
declare class ProductController {
    static createProduct(req: MyUserRequest, res: Response): Promise<void>;
    static getProductDetails(req: Request, res: Response): Promise<void>;
    static getProducts(req: Request, res: Response): Promise<void>;
    static updateProduct(req: Request, res: Response): Promise<void>;
    static deleteProduct(req: Request, res: Response): Promise<void>;
    static getProductsByCategory(req: Request, res: Response): Promise<void>;
    static getProductsByPrice(req: Request, res: Response): Promise<void>;
    static getProductsByStyle(req: Request, res: Response): Promise<void>;
    static getProductsByColor(req: Request, res: Response): Promise<void>;
    static getProductsBySize(req: Request, res: Response): Promise<void>;
}
export default ProductController;
