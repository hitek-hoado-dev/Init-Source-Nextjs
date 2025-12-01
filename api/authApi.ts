import { IDataLoginType, IDataLogoutType } from '@/types/userType';
import axiosInstance from './axiosInstance';

export const authApi = {
  signIn: async (body: IDataLoginType) => {
    const response = await axiosInstance.post('/public/v1/auth/login', body);
    return response?.data;
  },
  signOut: async (body: IDataLogoutType) => {
    return await axiosInstance.post('/private/v1/auth/logout', body);
  },
  refreshToken(data: { refreshToken: string }) {
    return axiosInstance.post('/public/v1/auth/refresh', data, {
      _isRefreshToken: true, // thêm biến trong config axios để phân biệt khi gọi api refresh token
    });
  },
};
