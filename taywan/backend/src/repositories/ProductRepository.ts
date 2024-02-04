// repositories/ProductRepository.ts

import ProductModel from '../models/ProductModel';

class ProductRepository {

    static async createProduct(productData: any) {
        const newProduct = await ProductModel.create(productData);
        return newProduct;
    }


  static async getProductById(productId: string) {
    return ProductModel.findById(productId);
  }

  static async getProducts() {
    return ProductModel.find();
  }

  static async updateProduct(productId: string, productData: any) {
    return ProductModel.findByIdAndUpdate(productId, productData, { new: true });

    }

    static async deleteProduct(productId: string) {
        return ProductModel.findByIdAndDelete(productId);
    }


    static async getProductsByCategory(category: string) {
        return ProductModel.find({
            category: category
        });
    }

    static async getProductsByPrice(price: number) {
        return ProductModel.find({
            price: price
        });
    }
    static async getProductsByStyle(style: string) {
        return ProductModel.find({
            style: style
        });
    }

    static async getProductsByColor(color: string) {
        return ProductModel.find({
            colors: color
        });
    }

    static async getProductsBySize(size: string) {
        return ProductModel.find({
            sizes: size
        });
    }





}

export default ProductRepository;
