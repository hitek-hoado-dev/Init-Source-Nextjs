import axios, { AxiosError } from 'axios';
import { authApi } from './authApi';
import { STORAGES } from '@/constants/storages';
import { APP_ROUTE } from '@/constants/routes';
import { clearCookie, getCookie, setCookie } from '@/lib/utils/cookie';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie(STORAGES.ACCESS_TOKEN);
    const publicUrl = config?.url?.includes('/public/v1');
    if (token && !publicUrl) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      // lấy url từ request
      if (error?.config?._isRefreshToken) {
        // lấy biến _isRefreshToken từ config axios đã thêm khi gọi API refresh token
        handleLogoutFunction();
      }
      return handleRefreshToken(error);
    }
    return Promise.reject(error);
  }
);

export const handleLogoutFunction = () => {
  const USER_LOGIN = getCookie(STORAGES.USER_LOGIN);

  if (!USER_LOGIN?.is_save) {
    clearCookie(STORAGES.USER_LOGIN);
  }
  clearCookie(STORAGES.ACCESS_TOKEN);
  clearCookie(STORAGES.REFRESH_TOKEN);
  window.location.href = APP_ROUTE.login;
  return;
};

let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const addSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

const onRefreshed = (newAccessToken: string) => {
  refreshSubscribers.forEach((callback) => callback(newAccessToken));
  refreshSubscribers = [];
};

const handleRefreshToken = async (error: AxiosError) => {
  const originalConfig = error?.config;
  const refreshToken = getCookie(STORAGES.REFRESH_TOKEN);
  const addSubs = (resolve: (value: unknown) => void) => {
    addSubscriber((accessToken: string) => {
      if (originalConfig?.headers) {
        originalConfig.headers.Authorization = 'Bearer ' + accessToken;
      }
      if (originalConfig) {
        resolve(axiosInstance(originalConfig));
      }
    });
  };

  if (!refreshToken) {
    isRefreshing = false;
    handleLogoutFunction();
    return Promise.reject(error);
  }

  if (isRefreshing) {
    return new Promise(addSubs);
  }

  const retryOriginalRequest = new Promise(addSubs);

  isRefreshing = true;

  try {
    const { data } = await authApi.refreshToken({
      refreshToken: refreshToken,
    });

    setCookie(STORAGES.ACCESS_TOKEN, data?.results?.object?.accessToken);
    setCookie(STORAGES.REFRESH_TOKEN, data?.results?.object?.refreshToken);

    isRefreshing = false;
    onRefreshed(data?.results?.object?.accessToken);
    return retryOriginalRequest;
  } catch {
    handleLogoutFunction();
    isRefreshing = false;
  }
};

export default axiosInstance;
