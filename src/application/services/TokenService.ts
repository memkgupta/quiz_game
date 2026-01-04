// application/security/TokenService.ts
import jwt from "jsonwebtoken";
import type { AccessTokenPayload, RefreshTokenPayload } from "../security/TokenPayloads.js";


export class TokenService {
    constructor(
        private readonly accessTokenSecret: string,
        private readonly refreshTokenSecret: string
    ) {}

    /* =====================
       ACCESS TOKEN
       ===================== */

    createAccessToken(payload: AccessTokenPayload): string {
        return jwt.sign(payload, this.accessTokenSecret, {
            expiresIn: "15m"
        });
    }

    verifyAccessToken(token: string): AccessTokenPayload {
        return jwt.verify(
            token,
            this.accessTokenSecret
        ) as AccessTokenPayload;
    }

    /* =====================
       REFRESH TOKEN
       ===================== */

    createRefreshToken(payload: RefreshTokenPayload): string {
        return jwt.sign(payload, this.refreshTokenSecret, {
            expiresIn: "7d"
        });
    }

    verifyRefreshToken(token: string): RefreshTokenPayload {
        return jwt.verify(
            token,
            this.refreshTokenSecret
        ) as RefreshTokenPayload;
    }

    /* =====================
       EXPIRY HELPERS
       ===================== */

    refreshTokenExpiry(): Date {
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        return expires;
    }
}
