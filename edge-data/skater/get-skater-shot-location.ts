// edge-data/skater/get-skater-shot-location.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export interface SkaterShotLocationDetail {
    area: string;
    sog: number;
    goals: number;
    shootingPctg: number;
    sogPercentile: number;
    goalsPercentile: number;
    shootingPctgPercentile: number;
}

export interface SkaterShotLocationTotal {
    locationCode: "all" | "high" | "long" | "mid";
    sog: number;
    goals: number;
    shootingPctg: number;
    sogPercentile: number;
    goalsPercentile: number;
    shootingPctgPercentile: number;
    sogLeagueAvg: number;
    goalsLeagueAvg: number;
    shootingPctgLeagueAvg: number;
}

export interface SkaterShotLocationResponse {
    shotLocationDetails?: SkaterShotLocationDetail[];
    shotLocationTotals?: SkaterShotLocationTotal[];
}

export async function getSkaterShotLocationDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterShotLocationResponse> {
    return fetchJsonWithRetries<SkaterShotLocationResponse>(`${BASE}/skater-shot-location-detail/${playerId}/${seasonId}/${gameTypeId}`);
}