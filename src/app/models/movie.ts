export type Movie = {
    id: number;
    original_title: string;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    genre_ids: Array<number>;
    genres: Array<{ id: number; name: string; }>;
    vote_average: number;
};