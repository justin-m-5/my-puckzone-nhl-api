// edge-data/top-10/goalies/get-top-10-goalie-save-percentage.ts

import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";

export type GoalieSavePctgSort = "games" | "pctg";

export interface GoalieSavePctgTop10Player {
    firstName: { default: string };
    lastName: { default: string };
    slug: string;
    headshot: string;
    position: string;
    sweaterNumber: number;
    team: {
        commonName: { default: string };
        placeNameWithPreposition: { default: string; fr?: string };
        abbrev: string;
        teamLogo: { light: string; dark: string };
        slug: string;
    };
}

export interface GoalieSavePctgTop10Entry {
    player: GoalieSavePctgTop10Player;
    gamesOver900: number;
    pctgGamesOver900: number;
}

export interface GetTop10GoalieSavePctgParams {
    sort?: GoalieSavePctgSort;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}

export async function getTop10GoalieSavePctg({ sort = "games", seasonId, gameTypeId }: GetTop10GoalieSavePctgParams): Promise<GoalieSavePctgTop10Entry[]> {
    const url = `${BASE}/goalie-edge-save-pctg-top-10/${sort}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries<GoalieSavePctgTop10Entry[]>(url);
}