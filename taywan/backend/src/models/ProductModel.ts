import mongoose, { Document, Schema, SchemaDefinitionProperty } from 'mongoose';
import { Review } from './ReviewModel';

export interface Product extends Document {
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
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    colors: { type: [String], default: [] } as unknown as SchemaDefinitionProperty<string[], Product>,
    sizes: { type: [String], default: [] } as unknown as SchemaDefinitionProperty<string[], Product>,
    category: { type: String, required: true } as unknown as SchemaDefinitionProperty<string, Product>,
    style: { type: String, required: true },
    images: { type: [String], default: [] } as unknown as SchemaDefinitionProperty<string[], Product>,
    reviews: [{ type: mongoose.Types.ObjectId, ref: 'Review' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
},
  { versionKey: false }
);

const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;
