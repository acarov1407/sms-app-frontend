import { sendSMSAPI } from "../../../api/sms-service";
import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";

export function useSendSMS() {

    const { mutate: sendSMS, isPaused: isLoading } = useMutation({
        mutationFn: sendSMSAPI,
        onSuccess: () => toast.success("Mensaje enviado correctamente"),
        onError: (error) => toast.error(error.message)
    });

    return { sendSMS, isLoading };
}