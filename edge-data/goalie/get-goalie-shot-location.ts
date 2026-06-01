// edge-data/goalie/get-goalie-shot-location.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export interface GoalieShotLocationDetail {
    area: string;
    shotsAgainst: number;
    saves: number;
    goalsAgainst: number;
    savePctg: number;
    shotsAgainstPercentile: number;
    savesPercentile: number;
    goalsAgainstPercentile: number;
    savePctgPercentile: number;
}

export interface GoalieShotLocationTotal {
    locationCode: "all" | "high" | "long" | "mid";
    shotsAgainst: number;
    saves: number;
    goalsAgainst: number;
    savePctg: number;
    shotsAgainstPercentile: number;
    savesPercentile: number;
    goalsAgainstPercentile: number;
    savePctgPercentile: number;
    shotsAgainstLeagueAvg: number;
    savesLeagueAvg: number;
    goalsAgainstLeagueAvg: number;
    savePctgLeagueAvg: number;
}

export interface GoalieShotLocationResponse {
    shotLocationDetails?: GoalieShotLocationDetail[];
    shotLocationTotals?: GoalieShotLocationTotal[];
}

export async function getGoalieShotLocationDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<GoalieShotLocationResponse> {
    return fetchJsonWithRetries<GoalieShotLocationResponse>(`${BASE}/goalie-shot-location-detail/${playerId}/${seasonId}/${gameTypeId}`);
}