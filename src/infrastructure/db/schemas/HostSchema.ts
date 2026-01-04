import { Schema } from "mongoose";

export interface HostDocument {
    name: string;
    email: string;
    createdAt: Date;
}

export const HostSchema = new Schema<HostDocument>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});