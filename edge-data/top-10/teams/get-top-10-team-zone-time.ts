// edge-data/top-10/teams/get-top-10-team-zone-time.ts

import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";

export type TeamZoneTimeStrength = "all" | "es" | "pp" | "pk";
export type TeamZoneTimeSortBy = "offensive" | "neutral" | "defensive";

export interface TeamZoneTimeEntry {
    team: {
        commonName: { default: string };
        placeNameWithPreposition: { default: string; fr?: string };
        abbrev: string;
        teamLogo: { light: string; dark: string };
        slug: string;
    };
    offensiveZoneTime: number;
    neutralZoneTime: number;
    defensiveZoneTime: number;
}

export interface GetTop10TeamZoneTimeParams {
    strength?: TeamZoneTimeStrength;
    sortBy?: TeamZoneTimeSortBy;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}

export async function getTop10TeamZoneTime({ strength = "all", sortBy = "offensive", seasonId, gameTypeId }: GetTop10TeamZoneTimeParams): Promise<TeamZoneTimeEntry[]> {
    return fetchJsonWithRetries<TeamZoneTimeEntry[]>(`${BASE}/team-zone-time-top-10/${strength}/${sortBy}/${seasonId}/${gameTypeId}`);
}