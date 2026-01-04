// domain/entities/AuthSession.ts
export class AuthSession {
    constructor(
        public readonly id: string,
        public readonly userId: string,
        public readonly isRevoked: boolean,
        public readonly expiresAt: Date
    ) {}

    isExpired(now = new Date()): boolean {
        return now > this.expiresAt;
    }
}
