

export interface User {
    created_at: Date;
    email: string,
    full_name: string,
    password_changed_at: Date,
    username: string
}

export interface LoginResponse {
    assess_token: string,
    access_token_expires_at: Date,
    refresh_token: string,
    refres_token_expires_at: Date,
    user: User
} 

export interface GetUserResponse {
    user: User
}