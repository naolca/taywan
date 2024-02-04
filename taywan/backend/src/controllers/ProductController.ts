
// controllers/ProductControllers.ts
import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import { MyUserRequest } from '../config/definitions/MyRequest';

class ProductController {
  static async createProduct(req: MyUserRequest, res: Response) {
    try {
        console.log(req.user);
      const productData = req.body;
      productData.userId = req.user.userId;
      const newProduct = await ProductService.createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

    static async getProductDetails(req: Request, res: Response) {
        try {
        const productId = req.params.id;
        const product = await ProductService.getProductById(productId);
        res.json(product);
        } catch (error) {
        console.error('Error getting product details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getProducts(req: Request, res: Response) {
        try {
        const products = await ProductService.getProducts();
        res.json(products);
        } catch (error) {
        console.error('Error getting products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async updateProduct(req: Request, res: Response) {
        try {
        const productId = req.params.id;
        const productData = req.body;
        const updatedProduct = await ProductService.updateProduct(productId, productData);
        res.json(updatedProduct);
        } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    static async deleteProduct(req: Request, res: Response) {
        try {
        const productId = req.params.id;
        const deletedProduct = await ProductService.deleteProduct(productId);
        res.json(deletedProduct);
        } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    static async getProductsByCategory(req: Request, res: Response) {
        try {
        const category = req.params.category;
        const products = await ProductService.getProductsByCategory(category);
        res.json(products);
        } catch (error) {
        console.error('Error getting products by category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    static async getProductsByPrice(req: Request, res: Response) {
        try {
        const price = Number(req.params.price); // Convert the price parameter to a number
        const products = await ProductService.getProductsByPrice(price);
        res.json(products);
        } catch (error) {
        console.error('Error getting products by price:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    static async getProductsByStyle(req: Request, res: Response) {
        try {
        const style = req.params.style;
        const products = await ProductService.getProductsByStyle(style);
        res.json(products);
        } catch (error) {
        console.error('Error getting products by style:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    static async getProductsByColor(req: Request, res: Response) {
        try {
        const color = req.params.color;
        const products = await ProductService.getProductsByColor(color);
        res.json(products);
        } catch (error) {
        console.error('Error getting products by color:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }


    static async getProductsBySize(req: Request, res: Response) {
        try {
        const size = req.params.size;
        const products = await ProductService.getProductsBySize(size);
        res.json(products);
        } catch (error) {
        console.error('Error getting products by size:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default ProductController;
