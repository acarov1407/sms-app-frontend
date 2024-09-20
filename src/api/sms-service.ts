import axiosClient from "../config/axios-client";
import { handleAxiosError } from "./error";
import { SMSCreate } from "../types/sms";

export async function sendSMSAPI(message: SMSCreate) {

    try {
        const response = await axiosClient.post("/sms", message);
        return response.data;
    } catch(error) {
        handleAxiosError(error);
    }
    
}