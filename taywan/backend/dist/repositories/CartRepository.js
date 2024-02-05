"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// repositories/CartRepository.ts
const CartModel_1 = __importDefault(require("../models/CartModel"));
class CartRepository {
    static async getCartByUserId(userId) {
        return CartModel_1.default.findOne({ userId }).populate('items.productId');
    }
    static async addToCart(userId, productId, quantity) {
        await CartModel_1.default.updateOne({ userId }, {
            $addToSet: { items: { productId, quantity } },
            $setOnInsert: { userId },
        }, { upsert: true });
    }
    static async removeFromCart(userId, productId) {
        await CartModel_1.default.updateOne({ userId }, { $pull: { items: { productId } } });
    }
    static async updateCartItemQuantity(userId, productId, quantity) {
        await CartModel_1.default.updateOne({ userId, 'items.productId': productId }, { $set: { 'items.$.quantity': quantity } });
    }
    static async clearCart(userId) {
        await CartModel_1.default.deleteOne({ userId });
    }
    static async updateCartTotalPrice(userId, totalPrice) {
        await CartModel_1.default.updateOne({ userId
        }, { totalPrice });
    }
}
exports.default = CartRepository;
//# sourceMappingURL=CartRepository.js.map