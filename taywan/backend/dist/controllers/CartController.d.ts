import { Response } from 'express';
import { MyUserRequest } from '../config/definitions/MyRequest';
declare class CartController {
    static getCartDetails(req: MyUserRequest, res: Response): Promise<void>;
    static addToCart(req: MyUserRequest, res: Response): Promise<void>;
    static removeFromCart(req: MyUserRequest, res: Response): Promise<void>;
    static updateCartItemQuantity(req: MyUserRequest, res: Response): Promise<void>;
    static clearCart(req: MyUserRequest, res: Response): Promise<void>;
    static updateCartTotalPrice(req: MyUserRequest, res: Response): Promise<void>;
}
export default CartController;
