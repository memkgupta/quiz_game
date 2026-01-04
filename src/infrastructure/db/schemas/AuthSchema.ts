// infrastructure/db/mongoose/schemas/AuthSchema.ts
import { Schema, Types } from "mongoose";

export interface AuthDocument {
    userId: Types.ObjectId;
    refreshTokenHash: string;
    deviceId?: string;
    userAgent?: string;
    ipAddress?: string;
    isRevoked: boolean;
    expiresAt: Date;
    createdAt: Date;
}

export const AuthSchema = new Schema<AuthDocument>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true
    },

    refreshTokenHash: {
        type: String,
        required: true
    },

    deviceId: {
        type: String
    },

    userAgent: {
        type: String
    },

    ipAddress: {
        type: String
    },

    isRevoked: {
        type: Boolean,
        default: false
    },

    expiresAt: {
        type: Date,
        required: true,
        index: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});
AuthSchema.index(
    { expiresAt: 1 },
    { expireAfterSeconds: 0 }
);
