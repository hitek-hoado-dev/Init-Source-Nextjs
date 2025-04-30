import axiosInstance from "@/lib/axios/axios-config";
import { IFormAuth } from "../(types)";
import { API_ROUTE } from "@/constants/routes";

export const login = (data: IFormAuth) => {
    return axiosInstance.post(API_ROUTE.login, data)
}