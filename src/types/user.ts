export type User = {
    id: string;
    username: string,
    phone: string,
    photoURL: string
}

export type UserCreate = {
    username: string;
    phone: string;
    photo: File | null;
}
