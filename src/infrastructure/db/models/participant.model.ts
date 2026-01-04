// infrastructure/db/mongoose/models/ParticipantModel.ts
import { model } from "mongoose";
import { ParticipantSchema, type ParticipantDocument } from "../schemas/ParticipantSchema.js";

export const ParticipantModel = model<ParticipantDocument>(
    "Participant",
    ParticipantSchema
);
