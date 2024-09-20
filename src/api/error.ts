import axios from "axios";

export function handleAxiosError(error: unknown): never {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            throw new Error(error.response.data.message.at(0) || error.response.data.message || "Ha ocurrido un error");
        } else if (error.request) {
            throw new Error("No se recibió respuesta del servidor");
        } else {
            throw new Error(error.message);
        }
    } else {
        throw new Error("Ha ocurrido un error inesperado");
    }
}