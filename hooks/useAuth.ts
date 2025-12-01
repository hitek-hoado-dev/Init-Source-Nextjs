import { authApi } from '@/api/authApi';
import { STORAGES } from '@/constants/storages';
import { clearCookie, getCookie, setCookie } from '@/lib/utils/cookie';
import { TObjectResponse } from '@/types/generalType';
import { IDataLoginType, IUserLoginType } from '@/types/userType';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useGlobalState } from './useGlobalState';
import { useRouter } from 'next/navigation';
import { APP_ROUTE } from '@/constants/routes';

export const useLogin = () => {
  const { setUser } = useGlobalState();
  return useMutation<
  TObjectResponse<IUserLoginType>,
    AxiosError,
    IDataLoginType
  >({
    mutationFn: authApi.signIn,
    onSuccess: (data) => {
      const newData: IUserLoginType = data?.results?.object;

      const userClone = { ...newData };
      setUser(userClone);
      setCookie(STORAGES.USER_LOGIN, userClone);
      setCookie(STORAGES.ACCESS_TOKEN, newData?.accessToken);
      setCookie(STORAGES.REFRESH_TOKEN, newData?.refreshToken);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const { setUser } = useGlobalState();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const REFRESH_TOKEN = getCookie(STORAGES.REFRESH_TOKEN);
      return await authApi.signOut({ refreshToken: REFRESH_TOKEN });
    },
    onSuccess: () => {
      clearCookie(STORAGES.USER_LOGIN);
      clearCookie(STORAGES.ACCESS_TOKEN);
      clearCookie(STORAGES.REFRESH_TOKEN);
      setUser(null);
      queryClient.clear();
      router.push(APP_ROUTE.login);
    },
  });
};


