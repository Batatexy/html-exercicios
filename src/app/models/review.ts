export type Review = {
    id: number;
    movieID: number;
    userID: number;

    rating: number;
    reviewContent: string;
    reviewDate?: string;
    watchedDate: string;
};