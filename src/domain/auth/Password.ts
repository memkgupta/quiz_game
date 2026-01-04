// domain/value-objects/Password.ts
import bcrypt from "bcrypt";

export class Password {
    private constructor(private readonly hash: string) {}

    static async hash(plain: string): Promise<Password> {
        if (plain.length < 8) {
            throw new Error("Password too short");
        }

        const hash = await bcrypt.hash(plain, 12);
        return new Password(hash);
    }

    static async verify(
        plain: string,
        hash: string
    ): Promise<boolean> {
        return bcrypt.compare(plain, hash);
    }

    get value(): string {
        return this.hash;
    }
}
