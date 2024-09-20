import axiosClient from "../config/axios-client";
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
        //console.log(error?.response?.data?.message)
        throw new Error(error?.response?.data?.message?.at(0));
    }
}