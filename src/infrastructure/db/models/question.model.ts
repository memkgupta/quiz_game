// infrastructure/db/mongoose/models/QuestionModel.ts
import { model } from "mongoose";
import { QuestionSchema, type QuestionDocument } from "../schemas/QuestionSchema.js";

export const QuestionModel = model<QuestionDocument>(
    "Question",
    QuestionSchema
);
