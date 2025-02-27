export type User = {
    id: number;
    name: string;
    email: string;
    profileImage?: string;
    favorites: Array<number>;
};