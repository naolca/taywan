// services/CartService.ts
import CartRepository from '../repositories/CartRepository';

class CartService {

  static async getCartDetails(userId: string | undefined) {
    const cartDetails = await CartRepository.getCartByUserId(userId);
    return cartDetails;
  }

  static async addToCart(userId: string | undefined, productId: string, quantity: number) {
    await CartRepository.addToCart(userId, productId, quantity);
  }

    static async removeFromCart(userId: string | undefined, productId: string) {
        await CartRepository.removeFromCart(userId, productId);
    }

    static async updateCartItemQuantity(userId: string | undefined, productId: string, quantity: number) {
        await CartRepository.updateCartItemQuantity(userId, productId, quantity);
    }

    static async clearCart(userId: string | undefined) {
        await CartRepository.clearCart(userId);
    }

    static async updateCartTotalPrice(userId: string | undefined, totalPrice: number) {
        await CartRepository.updateCartTotalPrice(userId, totalPrice);

    }

    
}

export default CartService;
