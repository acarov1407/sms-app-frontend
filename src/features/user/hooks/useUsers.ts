import { getUsersAPI } from "../../../api/userService";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {

    const { data: users, isLoading, error } = useQuery({
        queryKey: ["users"],
        queryFn: getUsersAPI,
        
    });

    return { users, isLoading, error }

}