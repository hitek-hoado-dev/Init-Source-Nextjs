// axios-augment.d.ts (đặt ở src/, để TS tự pick up)
import 'axios';

declare module 'axios' {
  // dùng trong request interceptor
  export interface InternalAxiosRequestConfig {
    _isRefreshToken?: boolean;
  }

  // dùng ở error.response?.config / error.config
  export interface AxiosRequestConfig {
    _isRefreshToken?: boolean;
  }
}
