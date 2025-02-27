import { Cast } from "./cast";
import { Crew } from "./crew";

export type Credits = {
    id: number;
    cast: Array<Cast>;
    crew: Array<Crew>;
};