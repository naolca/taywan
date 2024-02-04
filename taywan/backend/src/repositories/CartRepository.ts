// repositories/CartRepository.ts
import CartModel from '../models/CartModel';

class CartRepository {
  static async getCartByUserId(userId: string | undefined) {
    return CartModel.findOne({ userId }).populate('items.productId');
  }

  static async addToCart(userId: string | undefined, productId: string, quantity: number) {
    await CartModel.updateOne(
      { userId },
      {
        $addToSet: { items: { productId, quantity } },
        $setOnInsert: { userId },
      },
      { upsert: true }
    );
  }

    static async removeFromCart(userId: string | undefined, productId: string) {
        await CartModel.updateOne({ userId }, { $pull: { items: { productId } } });
    }

    static async updateCartItemQuantity(userId: string | undefined, productId: string, quantity: number) {
        await CartModel.updateOne({ userId, 'items.productId': productId }, { $set: { 'items.$.quantity': quantity } });
    }

    static async clearCart(userId: string | undefined) {
        await CartModel.deleteOne({ userId  });
    }

    static async updateCartTotalPrice(userId: string | undefined, totalPrice: number) {
        await CartModel.updateOne({ userId
        }, { totalPrice });

    }


    

}

export default CartRepository;
