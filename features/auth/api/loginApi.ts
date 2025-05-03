import axiosInstance from "@/lib/axios/axios-config";
import { API_ROUTE } from "@/constants/routes";
import { IFormAuth } from "../types";

export const login = (data: IFormAuth) => {
    return axiosInstance.post(API_ROUTE.login, data)
}