
export interface IUserLoginType {
  accessToken: string;
  refreshToken: string;
  userId: string;
}

export interface IDataLoginType {
  email: string;
  password: string;
}

export interface IDataLogoutType {
  refreshToken: string;
}
