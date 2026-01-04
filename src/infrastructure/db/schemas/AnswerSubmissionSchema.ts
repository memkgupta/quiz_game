
import { Schema, Types } from "mongoose";

export interface AnswerSubmissionDocument {
    quizId: Types.ObjectId;
    questionId: Types.ObjectId;
    participantId: Types.ObjectId;
    answer: string;
    isCorrect: boolean;
    submittedAt: Date;
}

export const AnswerSubmissionSchema = new Schema<AnswerSubmissionDocument>({
    quizId: { type: Schema.Types.ObjectId, required: true, index: true },
    questionId: { type: Schema.Types.ObjectId, required: true, index: true },
    participantId: { type: Schema.Types.ObjectId, required: true, index: true },
    answer: { type: String, required: true },
    isCorrect: { type: Boolean, required: true },
    submittedAt: { type: Date, default: Date.now }
});

// prevent duplicate submissions
AnswerSubmissionSchema.index(
    { questionId: 1, participantId: 1 },
    { unique: true }
);
