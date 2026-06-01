// edge-data/skater/get-skater-zone-time.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export type SkaterZoneTimeStrengthCode = "all" | "es" | "pp" | "pk";

export interface SkaterZoneTimeDetail {
    strengthCode: SkaterZoneTimeStrengthCode;
    offensiveZonePctg: number;
    offensiveZonePercentile: number;
    offensiveZoneLeagueAvg: number;
    neutralZonePctg: number;
    neutralZonePercentile: number;
    neutralZoneLeagueAvg: number;
    defensiveZonePctg: number;
    defensiveZonePercentile: number;
    defensiveZoneLeagueAvg: number;
}

export interface SkaterZoneStarts {
    offensiveZoneStartsPctg: number;
    offensiveZoneStartsPctgPercentile: number;
    neutralZoneStartsPctg: number;
    neutralZoneStartsPctgPercentile: number;
    defensiveZoneStartsPctg: number;
    defensiveZoneStartsPctgPercentile: number;
}

export interface SkaterZoneTimeResponse {
    zoneTimeDetails?: SkaterZoneTimeDetail[];
    zoneStarts?: SkaterZoneStarts;
}

export async function getSkaterZoneTime(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterZoneTimeResponse> {
    return fetchJsonWithRetries<SkaterZoneTimeResponse>(`${BASE}/skater-zone-time/${playerId}/${seasonId}/${gameTypeId}`);
}