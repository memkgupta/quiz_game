// infrastructure/db/mongoose/models/QuizModel.ts
import { model } from "mongoose";
import { QuizSchema, type QuizDocument } from "../schemas/QuizSchema.js";

export const QuizModel = model<QuizDocument>(
    "Quiz",
    QuizSchema
);
