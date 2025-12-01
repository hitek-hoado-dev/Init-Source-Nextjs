export enum APP_ROUTE {
    login = "/login",
    signup = "/signup",
    home = "/",
    journal = "/journal",
    handbook = "/handbook",
    profile = "/profile",
    shop = "/shop",
    repository = "/repository",
    aboutUs = "/about-us",
    glossary = "/glossary",
    forgot = "/forgot",
}

export const PUBLIC_PATHS = [
    APP_ROUTE.login,
    APP_ROUTE.signup,
]