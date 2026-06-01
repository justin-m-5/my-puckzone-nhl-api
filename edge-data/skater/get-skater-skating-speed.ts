// edge-data/skater/get-skater-skating-speed.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export interface SkaterSpeedStat {
    imperial: number;
    metric: number;
    percentile: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}

export interface SkaterSpeedBurst {
    value: number;
    percentile: number;
    leagueAvg: number;
}

export interface SkaterSkatingSpeedDetail {
    maxSkatingSpeed: SkaterSpeedStat;
    burstsOver22: SkaterSpeedBurst;
    bursts20To22: SkaterSpeedBurst;
    bursts18To20: SkaterSpeedBurst;
}

export interface SkaterSkatingSpeedResponse {
    skatingSpeedDetails?: SkaterSkatingSpeedDetail;
}

export async function getSkaterSkatingSpeedDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterSkatingSpeedResponse> {
    return fetchJsonWithRetries<SkaterSkatingSpeedResponse>(`${BASE}/skater-skating-speed-detail/${playerId}/${seasonId}/${gameTypeId}`);
}
