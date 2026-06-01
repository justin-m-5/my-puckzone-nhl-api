// edge-data/skater/get-skater-skating-distance.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export type SkaterStrengthCode = "all" | "es" | "pp" | "pk";

export interface SkaterDistanceStat {
    imperial: number;
    metric: number;
    percentile: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}

export interface SkaterSkatingDistanceDetail {
    strengthCode: SkaterStrengthCode;
    distanceTotal: SkaterDistanceStat;
    distancePer60: SkaterDistanceStat;
    distanceMaxGame?: unknown;
    distanceMaxPeriod?: unknown;
}

export interface SkaterSkatingDistanceResponse {
    skatingDistanceDetails?: SkaterSkatingDistanceDetail[];
}

export async function getSkaterSkatingDistanceDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterSkatingDistanceResponse> {
    return fetchJsonWithRetries<SkaterSkatingDistanceResponse>(`${BASE}/skater-skating-distance-detail/${playerId}/${seasonId}/${gameTypeId}`);
}