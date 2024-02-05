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
declare class CartRepository {
    static getCartByUserId(userId: string | undefined): Promise<import("../models/CartModel").Cart & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    static addToCart(userId: string | undefined, productId: string, quantity: number): Promise<void>;
    static removeFromCart(userId: string | undefined, productId: string): Promise<void>;
    static updateCartItemQuantity(userId: string | undefined, productId: string, quantity: number): Promise<void>;
    static clearCart(userId: string | undefined): Promise<void>;
    static updateCartTotalPrice(userId: string | undefined, totalPrice: number): Promise<void>;
}
export default CartRepository;