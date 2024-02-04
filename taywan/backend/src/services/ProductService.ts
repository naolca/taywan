// services/ProductService.ts
import ProductRepository from '../repositories/ProductRepository';
import ProductModel from '../models/ProductModel';

class ProductService {
  static async createProduct(productData: any) {
    const newProduct = await ProductRepository.createProduct(productData);
    return newProduct;
  }

    static async getProductById(productId: string) {
        const product = await ProductRepository.getProductById(productId);
        return product;
    }

    static async getProducts() {
        const products = await ProductRepository.getProducts();
        return products;
    }


    static async updateProduct(productId: string, productData: any) {
        const updatedProduct = await ProductRepository.updateProduct(productId, productData);
        return updatedProduct;
    }

    static async deleteProduct(productId: string) {
        const deletedProduct = await ProductRepository.deleteProduct(productId);
        return deletedProduct;
    }

    static async getProductsByCategory(category: string) {
        const products = await ProductRepository.getProductsByCategory(category);
        return products;
    }

    static async getProductsByPrice(price: number) {
        const products = await ProductRepository.getProductsByPrice(price);
        return products;
    }

    static async getProductsByStyle(style: string) {
        const products = await ProductRepository.getProductsByStyle(style);
        return products;
    }

    static async getProductsByColor(color: string) {
        const products = await ProductRepository.getProductsByColor(color);
        return products;
    }

    static async getProductsBySize(size: string) {
        const products = await ProductRepository.getProductsBySize(size);
        return products;
    }

    
}

export default ProductService;

