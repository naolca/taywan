"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ProductService_1 = tslib_1.__importDefault(require("../services/ProductService"));
class ProductController {
    static async createProduct(req, res) {
        try {
            console.log(req.user);
            const productData = req.body;
            productData.userId = req.user.userId;
            const newProduct = await ProductService_1.default.createProduct(productData);
            res.status(201).json(newProduct);
        }
        catch (error) {
            console.error('Error creating product:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getProductDetails(req, res) {
        try {
            const productId = req.params.id;
            const product = await ProductService_1.default.getProductById(productId);
            res.json(product);
        }
        catch (error) {
            console.error('Error getting product details:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getProducts(req, res) {
        try {
            const products = await ProductService_1.default.getProducts();
            res.json(products);
        }
        catch (error) {
            console.error('Error getting products:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async updateProduct(req, res) {
        try {
            const productId = req.params.id;
            const productData = req.body;
            const updatedProduct = await ProductService_1.default.updateProduct(productId, productData);
            res.json(updatedProduct);
        }
        catch (error) {
            console.error('Error updating product:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async deleteProduct(req, res) {
        try {
            const productId = req.params.id;
            const deletedProduct = await ProductService_1.default.deleteProduct(productId);
            res.json(deletedProduct);
        }
        catch (error) {
            console.error('Error deleting product:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getProductsByCategory(req, res) {
        try {
            const category = req.params.category;
            const products = await ProductService_1.default.getProductsByCategory(category);
            res.json(products);
        }
        catch (error) {
            console.error('Error getting products by category:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getProductsByPrice(req, res) {
        try {
            const price = Number(req.params.price); // Convert the price parameter to a number
            const products = await ProductService_1.default.getProductsByPrice(price);
            res.json(products);
        }
        catch (error) {
            console.error('Error getting products by price:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getProductsByStyle(req, res) {
        try {
            const style = req.params.style;
            const products = await ProductService_1.default.getProductsByStyle(style);
            res.json(products);
        }
        catch (error) {
            console.error('Error getting products by style:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getProductsByColor(req, res) {
        try {
            const color = req.params.color;
            const products = await ProductService_1.default.getProductsByColor(color);
            res.json(products);
        }
        catch (error) {
            console.error('Error getting products by color:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getProductsBySize(req, res) {
        try {
            const size = req.params.size;
            const products = await ProductService_1.default.getProductsBySize(size);
            res.json(products);
        }
        catch (error) {
            console.error('Error getting products by size:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}
exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map