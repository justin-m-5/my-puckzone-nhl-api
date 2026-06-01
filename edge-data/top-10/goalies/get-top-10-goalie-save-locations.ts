// edge-data/top-10/goalies/get-top-10-goalie-save-locations.ts

import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";

export type GoalieSaveLocationStat = "save-pctg" | "saves" | "shots-against" | "goals-against";
export type GoalieSaveLocationZone = "all" | "high" | "mid" | "long";

export interface GoalieSaveLocationTop10Player {
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

export interface GoalieSaveLocationEntry {
    player: GoalieSaveLocationTop10Player;
    all: number;
    highDanger: number;
    midRange: number;
    longRange: number;
}

export interface GetTop10GoalieSaveLocationParams {
    location?: GoalieSaveLocationZone;
    stat?: GoalieSaveLocationStat;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}

export async function getTop10GoalieSaveLocation({ location = "all", stat = "save-pctg", seasonId, gameTypeId }: GetTop10GoalieSaveLocationParams): Promise<GoalieSaveLocationEntry[]> {
    const url = `${BASE}/goalie-shot-location-top-10/${stat}/${location}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries<GoalieSaveLocationEntry[]>(url);
}