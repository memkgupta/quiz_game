// infrastructure/db/mongoose/models/AnswerSubmissionModel.ts
import { model } from "mongoose";
import {
    AnswerSubmissionSchema,
  type  AnswerSubmissionDocument
} from "../schemas/AnswerSubmissionSchema.js";

export const AnswerSubmissionModel = model<AnswerSubmissionDocument>(
    "AnswerSubmission",
    AnswerSubmissionSchema
);
