// infrastructure/db/mongoose/models/HostModel.ts
import { model } from "mongoose";
import { HostSchema, type HostDocument} from "../schemas/HostSchema.js";

export const HostModel = model<HostDocument>(
    "Host",
    HostSchema
);
