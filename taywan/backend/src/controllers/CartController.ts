// controllers/CartControllers.ts
import { Request, Response } from 'express';
import CartService from '../services/CartService';
import { MyUserRequest } from '../config/definitions/MyRequest';


class CartController {
  static async getCartDetails(req: MyUserRequest, res: Response) {
    try {
      const userId = req.user?.userId; // Get user ID from the authenticated user
      const cartDetails = await CartService.getCartDetails(userId);
      res.json(cartDetails);
    } catch (error) {
      console.error('Error fetching cart details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async addToCart(req: MyUserRequest, res: Response) {
    try {
      const userId = req.user?.userId; // Get user ID from the authenticated user
      const productId = req.body.productId;
      const quantity = req.body.quantity || 1; // Default quantity to 1 if not provided
      await CartService.addToCart(userId, productId, quantity);
      res.status(201).json({ message: 'Item added to cart successfully' });
    } catch (error) {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

    static async removeFromCart(req: MyUserRequest, res: Response) {
        try {
        const userId = req.user?.userId; // Get user ID from the authenticated user
        const productId = req.body.productId;
        await CartService.removeFromCart(userId, productId);
        res.json({ message: 'Item removed from cart successfully' });
        } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async updateCartItemQuantity(req: MyUserRequest, res: Response) {
        try {
        const userId = req.user?.userId; // Get user ID from the authenticated user
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        await CartService.updateCartItemQuantity(userId, productId, quantity);
        res.json({ message: 'Cart item quantity updated successfully' });
        } catch (error) {
        console.error('Error updating cart item quantity:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async clearCart(req: MyUserRequest, res: Response) {
        try {
        const userId = req.user?.userId; // Get user ID from the authenticated user
        await CartService.clearCart(userId);
        res.json({ message: 'Cart cleared successfully' });
        } catch (error) {
        console.error('Error clearing cart:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async updateCartTotalPrice(req: MyUserRequest, res: Response) {
        try {
        const userId = req.user?.userId; // Get user ID from the authenticated user
        const totalPrice = req.body.totalPrice;
        await CartService.updateCartTotalPrice(userId, totalPrice);
        res.json({ message: 'Cart total price updated successfully' });
        } catch (error) {
        console.error('Error updating cart total price:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }



    
}

export default CartController;
