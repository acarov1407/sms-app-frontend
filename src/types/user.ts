export type User = {
    id: string;
    username: string,
    phone: string,
    photoURL: string,
    createdAt: number
}

export type UserCreate = {
    username: string;
    phone: string;
    photo: File | null;
}
