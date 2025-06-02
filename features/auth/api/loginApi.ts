import { API_ROUTE } from "@/constants/routes";
import axiosInstance from "@/lib/axios/axios-config";
import { IFormAuth, User } from './../types/index';
import { DataResonse } from "@/types/generalType";

export const login = async ({ data }: { data: User }) => {
    const res = await axiosInstance.post<DataResonse<IFormAuth>>(API_ROUTE.login, data)
    return res.data.results.object
}