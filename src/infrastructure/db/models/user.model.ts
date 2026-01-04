import { model } from "mongoose";
import { UserSchema, type UserDocument } from "../schemas/UserSchema.js";

export const UserModel = model<UserDocument>(
    "User",
    UserSchema
);