import type { AuthRepository } from "@/domain/repositories/AuthRepository.js";
import type { UserRepository } from "@/domain/repositories/UserRepository.js";
import type { LoginMeta } from "../auth/LoginMeta.js";
import { Password } from "@/domain/auth/Password.js";
import { AuthSession } from "@/domain/auth/AuthSession.js";
import { Hash } from "@/domain/security/Hash.js";
import type { TokenService } from "./TokenService.js";

export class AuthService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly authRepo: AuthRepository,
        private readonly tokenService: TokenService
    ) {}

    async login(email: string, password: string, meta: LoginMeta) {
        const user = await this.userRepo.findByEmail(email);
        if (!user) throw new Error("Invalid credentials");

        if (!Password.verify(password, user.passwordHash)) {
            throw new Error("Invalid credentials");
        }

        const authId = crypto.randomUUID();

        const refreshToken = this.tokenService.createRefreshToken({
            authId,
            userId: user.id
        });

        const accessToken = this.tokenService.createAccessToken({
            userId: user.id,
            
        });

        await this.authRepo.create(
            new AuthSession(
                authId,
                user.id,
                false,
                this.tokenService.refreshTokenExpiry()
            ),
            Hash.sha256(refreshToken)
        );

        return { accessToken, refreshToken };
    }
}
