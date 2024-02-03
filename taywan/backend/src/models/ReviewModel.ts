import mongoose, { Document, Schema } from 'mongoose';

export interface Review extends Document {
  userId: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
}

const reviewSchema = new Schema<Review>(
  {
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { versionKey: false }
);

const ReviewModel = mongoose.model<Review>('Review', reviewSchema);

export default ReviewModel;
