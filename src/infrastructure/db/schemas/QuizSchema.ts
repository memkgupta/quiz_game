// infrastructure/db/mongoose/schemas/QuizSchema.ts
import { Schema, Types } from "mongoose";

export interface QuizDocument {
    title: string;
    hostId: Types.ObjectId;
    isActive: boolean;
    createdAt: Date;
}

export const QuizSchema = new Schema<QuizDocument>({
    title: { type: String, required: true },
    hostId: { type: Schema.Types.ObjectId, required: true, index: true },
    isActive: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});
