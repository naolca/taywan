"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// services/CartService.ts
const CartRepository_1 = tslib_1.__importDefault(require("../repositories/CartRepository"));
class CartService {
    static async getCartDetails(userId) {
        const cartDetails = await CartRepository_1.default.getCartByUserId(userId);
        return cartDetails;
    }
    static async addToCart(userId, productId, quantity) {
        await CartRepository_1.default.addToCart(userId, productId, quantity);
    }
    static async removeFromCart(userId, productId) {
        await CartRepository_1.default.removeFromCart(userId, productId);
    }
    static async updateCartItemQuantity(userId, productId, quantity) {
        await CartRepository_1.default.updateCartItemQuantity(userId, productId, quantity);
    }
    static async clearCart(userId) {
        await CartRepository_1.default.clearCart(userId);
    }
    static async updateCartTotalPrice(userId, totalPrice) {
        await CartRepository_1.default.updateCartTotalPrice(userId, totalPrice);
    }
}
exports.default = CartService;
//# sourceMappingURL=CartService.js.map