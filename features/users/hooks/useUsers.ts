import useSWR from "swr"
import { getUsers } from "../api/getUsers"

export const useUsers = () => {
    return useSWR("users", getUsers)
}