// edge-data/team/get-team-shot-speed.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export interface ShotSpeedStat {
    imperial: number;
    metric: number;
    rank: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}

export interface ShotSpeedBucket {
    value: number;
    rank?: number;
    leagueAvg: number;
}

export interface TeamShotSpeedDetail {
    position: "all" | "F" | "D";
    topShotSpeed: ShotSpeedStat;
    avgShotSpeed: ShotSpeedStat;
    shotAttemptsOver100: ShotSpeedBucket;
    shotAttempts90To100: ShotSpeedBucket;
    shotAttempts80To90: ShotSpeedBucket;
    shotAttempts70To80: ShotSpeedBucket;
}

export interface TeamShotSpeedResponse {
    shotSpeedDetails?: TeamShotSpeedDetail[];
}

export async function getTeamShotSpeedDetail(teamId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<TeamShotSpeedResponse> {
    return fetchJsonWithRetries<TeamShotSpeedResponse>(`${BASE}/team-shot-speed-detail/${teamId}/${seasonId}/${gameTypeId}`);
}