// infrastructure/db/mongoose/schemas/QuestionSchema.ts
import { Schema, Types } from "mongoose";

export type QuestionType = "MCQ" | "TRUE_FALSE" | "SHORT";

export interface QuestionDocument {
    quizId: Types.ObjectId;
    title: string;
    options?: string[];
    correctAnswer: string;
    type: QuestionType;
    marks: number;
    createdAt: Date;
}

export const QuestionSchema = new Schema<QuestionDocument>({
    quizId: { type: Schema.Types.ObjectId, required: true, index: true },
    title: { type: String, required: true },
    options: { type: [String] },
    correctAnswer: { type: String, required: true },
    type: {
        type: String,
        enum: ["MCQ", "TRUE_FALSE", "SHORT"],
        required: true
    },
    marks: { type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now }
});
