export interface IFormAuth {
    name: string
    password: string
}

export type Authkeys = keyof IFormAuth

export type FormMode = "login" | "signup"