import mongoose, { Document, Schema } from 'mongoose';

export interface CartItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
}

export interface Cart extends Document {
  userId: mongoose.Types.ObjectId;
  items: CartItem[];
  totalPrice: number;
  discount: number;
  deliveryFee: number;
  createdAt: Date;
  updatedAt: Date;
}

const cartSchema = new Schema<Cart>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        productId: { type: mongoose.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 },
      },
    ],
    totalPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    deliveryFee: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const CartModel = mongoose.model<Cart>('Cart', cartSchema);

export default CartModel;
