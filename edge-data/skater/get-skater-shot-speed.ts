// edge-data/skater/get-skater-shot-speed.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export interface SkaterShotSpeedStat {
    imperial: number;
    metric: number;
    percentile: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}

export interface SkaterShotSpeedBucket {
    value: number;
    percentile: number;
    leagueAvg: number;
}

export interface SkaterShotSpeedDetail {
    topShotSpeed: SkaterShotSpeedStat;
    avgShotSpeed: SkaterShotSpeedStat;
    shotAttemptsOver100: SkaterShotSpeedBucket;
    shotAttempts90To100: SkaterShotSpeedBucket;
    shotAttempts80To90: SkaterShotSpeedBucket;
    shotAttempts70To80: SkaterShotSpeedBucket;
}

export interface SkaterShotSpeedResponse {
    shotSpeedDetails?: SkaterShotSpeedDetail;
}

export async function getSkaterShotSpeedDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterShotSpeedResponse> {
    return fetchJsonWithRetries<SkaterShotSpeedResponse>(`${BASE}/skater-shot-speed-detail/${playerId}/${seasonId}/${gameTypeId}`);
}