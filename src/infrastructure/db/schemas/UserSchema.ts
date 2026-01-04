import { Schema } from "mongoose";

export interface UserDocument {
    name: string;
    email: string;
    passwordHash: string;
  
    isActive: boolean;
    createdAt: Date;
}
export const UserSchema = new Schema<UserDocument>({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    passwordHash: { type: String, required: true },

    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});
