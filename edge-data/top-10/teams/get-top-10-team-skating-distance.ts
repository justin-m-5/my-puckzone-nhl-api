// edge-data/top-10/teams/get-top-10-team-skating-distance.ts

import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";

export type TeamDistancePosition = "all" | "F" | "D";
export type TeamDistanceStrength = "all" | "es" | "pp" | "pk";
export type TeamDistanceSortBy = "total" | "per-60" | "max-game" | "max-period";

interface DistanceValue {
    imperial: number;
    metric: number;
}

export interface TeamDistanceEntry {
    team: {
        commonName: { default: string };
        placeNameWithPreposition: { default: string; fr?: string };
        abbrev: string;
        teamLogo: { light: string; dark: string };
        slug: string;
    };
    distanceTotal: DistanceValue;
    distancePer60: DistanceValue;
}

export interface GetTop10TeamDistanceParams {
    position?: TeamDistancePosition;
    strength?: TeamDistanceStrength;
    sortBy?: TeamDistanceSortBy;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}

export async function getTop10TeamSkatingDistance({ position = "all", strength = "all", sortBy = "total", seasonId, gameTypeId }: GetTop10TeamDistanceParams): Promise<TeamDistanceEntry[]> {
    return fetchJsonWithRetries<TeamDistanceEntry[]>(`${BASE}/team-skating-distance-top-10/${position}/${strength}/${sortBy}/${seasonId}/${gameTypeId}`);
}