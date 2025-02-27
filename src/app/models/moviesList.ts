import { Movie } from "./movie";

export type MoviesList =
    {
        name: string,
        page: number,
        list: Array<Movie>,
    };