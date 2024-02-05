"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartService_1 = __importDefault(require("../services/CartService"));
class CartController {
    static async getCartDetails(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId; // Get user ID from the authenticated user
            const cartDetails = await CartService_1.default.getCartDetails(userId);
            res.json(cartDetails);
        }
        catch (error) {
            console.error('Error fetching cart details:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async addToCart(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId; // Get user ID from the authenticated user
            const productId = req.body.productId;
            const quantity = req.body.quantity || 1; // Default quantity to 1 if not provided
            await CartService_1.default.addToCart(userId, productId, quantity);
            res.status(201).json({ message: 'Item added to cart successfully' });
        }
        catch (error) {
            console.error('Error adding item to cart:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async removeFromCart(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId; // Get user ID from the authenticated user
            const productId = req.body.productId;
            await CartService_1.default.removeFromCart(userId, productId);
            res.json({ message: 'Item removed from cart successfully' });
        }
        catch (error) {
            console.error('Error removing item from cart:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async updateCartItemQuantity(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId; // Get user ID from the authenticated user
            const productId = req.body.productId;
            const quantity = req.body.quantity;
            await CartService_1.default.updateCartItemQuantity(userId, productId, quantity);
            res.json({ message: 'Cart item quantity updated successfully' });
        }
        catch (error) {
            console.error('Error updating cart item quantity:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async clearCart(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId; // Get user ID from the authenticated user
            await CartService_1.default.clearCart(userId);
            res.json({ message: 'Cart cleared successfully' });
        }
        catch (error) {
            console.error('Error clearing cart:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async updateCartTotalPrice(req, res) {
        var _a;
        try {
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId; // Get user ID from the authenticated user
            const totalPrice = req.body.totalPrice;
            await CartService_1.default.updateCartTotalPrice(userId, totalPrice);
            res.json({ message: 'Cart total price updated successfully' });
        }
        catch (error) {
            console.error('Error updating cart total price:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
exports.default = CartController;
// {
//     "name":"Polo",
//     "description":"This is a pink polo",
//     "price":100,
//     "discount":10,
//     "colors":["black", "pink"],
//     "sizes":["XL", "L"],
//     "category":"T-shirt",
//     "style":"Casual",
//     "images":["www.example.come/placeholder"],
//     "reviews":[]
//   }
//# sourceMappingURL=CartController.js.map