/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
declare class ProductRepository {
    static createProduct(productData: any): Promise<import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static getProductById(productId: string): Promise<import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static getProducts(): Promise<(import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    static updateProduct(productId: string, productData: any): Promise<import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static deleteProduct(productId: string): Promise<import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static getProductsByCategory(category: string): Promise<(import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    static getProductsByPrice(price: number): Promise<(import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    static getProductsByStyle(style: string): Promise<(import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    static getProductsByColor(color: string): Promise<(import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    static getProductsBySize(size: string): Promise<(import("../models/ProductModel").Product & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
export default ProductRepository;
