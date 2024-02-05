"use strict";
// repositories/ProductRepository.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
class ProductRepository {
    static async createProduct(productData) {
        const newProduct = await ProductModel_1.default.create(productData);
        return newProduct;
    }
    static async getProductById(productId) {
        return ProductModel_1.default.findById(productId);
    }
    static async getProducts() {
        return ProductModel_1.default.find();
    }
    static async updateProduct(productId, productData) {
        return ProductModel_1.default.findByIdAndUpdate(productId, productData, { new: true });
    }
    static async deleteProduct(productId) {
        return ProductModel_1.default.findByIdAndDelete(productId);
    }
    static async getProductsByCategory(category) {
        return ProductModel_1.default.find({
            category: category
        });
    }
    static async getProductsByPrice(price) {
        return ProductModel_1.default.find({
            price: price
        });
    }
    static async getProductsByStyle(style) {
        return ProductModel_1.default.find({
            style: style
        });
    }
    static async getProductsByColor(color) {
        return ProductModel_1.default.find({
            colors: color
        });
    }
    static async getProductsBySize(size) {
        return ProductModel_1.default.find({
            sizes: size
        });
    }
}
exports.default = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map