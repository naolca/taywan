import mongoose, { Document, Schema } from 'mongoose';

export interface Review extends Document {
  productId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
}

const reviewSchema = new Schema<Review>(

  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { versionKey: false }
);

const ReviewModel = mongoose.model<Review>('Review', reviewSchema);

export default ReviewModel;
