// domain/security/Hash.ts
import crypto from "crypto";

export class Hash {
    static sha256(value: string): string {
        return crypto
            .createHash("sha256")
            .update(value)
            .digest("hex");
    }

    static compare(value: string, hashed: string): boolean {
        return Hash.sha256(value) === hashed;
    }
}
