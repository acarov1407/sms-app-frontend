import axiosClient from "../config/axios-client";
import { handleAxiosError } from "./error";
import type { User, UserCreate } from "../types/user";


export async function getUsersAPI(): Promise<User[]> {
    try {
        const response = await axiosClient.get("/users");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function createUserAPI(user: UserCreate): Promise<{ id: string }> {
    try {
        const response = await axiosClient.post("/users", user, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
       handleAxiosError(error);
    }
}