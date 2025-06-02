export interface User {
    username: string
    password: string
}

export type Authkeys = keyof User

export type FormMode = "login" | "signup"

export interface IFormAuth {
    access_token: string
    user: User
    refresh_token: string
}