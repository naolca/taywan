import mongoose, { Document, Schema, SchemaDefinitionProperty } from 'mongoose';
import { Review } from './ReviewModel';
import { User } from './UserModel';

export interface Product extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  description: string;
  price: number;
  discount: number;
  colors: string[];
  sizes: string[];
  category: string;
  style: string;
  images: string[];
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<Product>(
{
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  colors: { type: [String], default: [] },
  sizes: { type: [String], default: [] },
  category: { type: String, required: true },
  style: { type: String, required: true },
  images: { type: [String], default: [] },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
},
  { versionKey: false }
);

const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;
