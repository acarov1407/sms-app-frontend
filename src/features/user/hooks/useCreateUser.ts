import { createUserAPI } from "../../../api/user-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

export function useCreateUser() {

    const queryClient = useQueryClient();

    const { mutate: createUser, isPending: isLoading } = useMutation({
        mutationFn: createUserAPI,
        onSuccess: () => {
            toast.success("Usuario creado correctamente");
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
        onError: (error) => toast.error(error.message)
    });

    return { createUser, isLoading }
}