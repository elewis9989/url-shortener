import mongoose, { Document, Schema } from 'mongoose';
import { ShortURL } from './shortUrl.model';

export interface Analytics extends Document {
  shortUrl: ShortURL;
}

const schema = new Schema(
  {
    shortUrl: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'shortUrl',
      required: true,
    },
  },
  { timestamps: true }
);

const analytics = mongoose.model<Analytics>('analytics', schema);

export default analytics;
