import { useMutation } from "@tanstack/react-query";
import { login } from "../api/loginApi";
import { setCookie } from "@/utils/cookie";
import { STORAGES } from "@/constants/storages";

export const authHooks = {
    useLogin: () => {
        return useMutation({
            mutationFn: login,
            onSuccess: (data) => {
                // Handle successful login, e.g., store token, redirect, etc.
                console.log("Login successful:", data);
                setCookie(STORAGES.ACCESS_TOKEN, data.access_token);
                
            },
            onError: (error) => {
                // Handle login error, e.g., show error message
                console.error("Login failed:", error);
            }   
        })
    }
}