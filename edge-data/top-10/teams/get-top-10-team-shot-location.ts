// edge-data/top-10/teams/get-top-10-team-shot-location.ts

import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";

export type TeamShotLocationPosition = "all" | "F" | "D";
export type TeamShotLocationStat = "sog" | "goals" | "shooting-pctg";
export type TeamShotLocationZone = "all" | "high" | "mid" | "long";

export interface TeamShotLocationEntry {
    team: {
        commonName: { default: string };
        placeNameWithPreposition: { default: string; fr?: string };
        abbrev: string;
        teamLogo: { light: string; dark: string };
        slug: string;
    };
    all: number;
    highDanger: number;
    midRange: number;
    longRange: number;
}

export interface GetTop10TeamShotLocationParams {
    position?: TeamShotLocationPosition;
    stat?: TeamShotLocationStat;
    location?: TeamShotLocationZone;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}

export async function getTop10TeamShotLocation({ position = "all", stat = "sog", location = "all", seasonId, gameTypeId }: GetTop10TeamShotLocationParams): Promise<TeamShotLocationEntry[]> {
    return fetchJsonWithRetries<TeamShotLocationEntry[]>(`${BASE}/team-shot-location-top-10/${position}/${stat}/${location}/${seasonId}/${gameTypeId}`);
}