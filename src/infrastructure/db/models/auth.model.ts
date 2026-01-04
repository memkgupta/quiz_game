// infrastructure/db/mongoose/models/AuthModel.ts
import { model } from "mongoose";
import { AuthSchema, type AuthDocument } from "../schemas/AuthSchema.js";

export const AuthModel = model<AuthDocument>(
    "Auth",
    AuthSchema
);
