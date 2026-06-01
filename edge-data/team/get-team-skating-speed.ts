// edge-data/team/get-team-skating-speed.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export interface SkatingSpeedStat {
    imperial: number;
    metric: number;
    rank: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}

export interface SpeedBurstStat {
    value: number;
    rank: number;
    leagueAvg: number;
}

export interface TeamSkatingSpeedDetail {
    positionCode: "all" | "F" | "D";
    maxSkatingSpeed: SkatingSpeedStat;
    burstsOver22: SpeedBurstStat;
    bursts20To22: SpeedBurstStat;
    bursts18To20: SpeedBurstStat;
}

export interface TeamSkatingSpeedResponse {
    skatingSpeedDetails?: TeamSkatingSpeedDetail[];
}

export async function getTeamSkatingSpeedDetail(teamId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<TeamSkatingSpeedResponse> {
    return fetchJsonWithRetries<TeamSkatingSpeedResponse>(`${BASE}/team-skating-speed-detail/${teamId}/${seasonId}/${gameTypeId}`);
}