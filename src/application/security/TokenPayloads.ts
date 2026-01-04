export interface AccessTokenPayload {
    userId: string;
    
}

export interface RefreshTokenPayload {
    authId: string;
    userId: string;
}