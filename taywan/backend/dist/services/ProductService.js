"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// services/ProductService.ts
const ProductRepository_1 = tslib_1.__importDefault(require("../repositories/ProductRepository"));
class ProductService {
    static async createProduct(productData) {
        const newProduct = await ProductRepository_1.default.createProduct(productData);
        return newProduct;
    }
    static async getProductById(productId) {
        const product = await ProductRepository_1.default.getProductById(productId);
        return product;
    }
    static async getProducts() {
        const products = await ProductRepository_1.default.getProducts();
        return products;
    }
    static async updateProduct(productId, productData) {
        const updatedProduct = await ProductRepository_1.default.updateProduct(productId, productData);
        return updatedProduct;
    }
    static async deleteProduct(productId) {
        const deletedProduct = await ProductRepository_1.default.deleteProduct(productId);
        return deletedProduct;
    }
    static async getProductsByCategory(category) {
        const products = await ProductRepository_1.default.getProductsByCategory(category);
        return products;
    }
    static async getProductsByPrice(price) {
        const products = await ProductRepository_1.default.getProductsByPrice(price);
        return products;
    }
    static async getProductsByStyle(style) {
        const products = await ProductRepository_1.default.getProductsByStyle(style);
        return products;
    }
    static async getProductsByColor(color) {
        const products = await ProductRepository_1.default.getProductsByColor(color);
        return products;
    }
    static async getProductsBySize(size) {
        const products = await ProductRepository_1.default.getProductsBySize(size);
        return products;
    }
}
exports.default = ProductService;
//# sourceMappingURL=ProductService.js.map