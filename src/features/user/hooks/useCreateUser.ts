import { createUserAPI } from "../../../api/userService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


export function useCreateUser() {

    const { mutate: createUser, isPending: isLoading } = useMutation({
        mutationFn: createUserAPI,
        onSuccess: () => toast.success("Usuario creado correctamente"),
        onError: (error) => toast.error(error.message)
    });

    return { createUser, isLoading }
}