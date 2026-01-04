import { Schema } from "mongoose";

export interface ParticipantDocument {
    name: string;
    email?: string;
    joinedAt: Date;
}

export const ParticipantSchema = new Schema<ParticipantDocument>({
    name: { type: String, required: true },
    email: { type: String },
    joinedAt: { type: Date, default: Date.now }
});
