import { Schema } from "mongoose";
import { IComment } from '../types/comment.types';

export const CommentSchema = new Schema<IComment>({
  description: {
    type: String
  },
  post_id: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: [true, 'post_id is required'],
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'user_id is required'],
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

// CommentSchema.set();

CommentSchema.methods.toJSON = function() {
  const { description } = this.toObject();
  return { description };
}

