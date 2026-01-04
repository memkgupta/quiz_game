// domain/repositories/AuthRepository.ts

import type { AuthSession } from "../auth/AuthSession.js";

export interface AuthRepository {
    create(session: AuthSession, refreshTokenHash: string): Promise<void>;
    findById(id: string): Promise<AuthSession | null>;
    revoke(id: string): Promise<void>;
    revokeAll(userId: string): Promise<void>;
}
