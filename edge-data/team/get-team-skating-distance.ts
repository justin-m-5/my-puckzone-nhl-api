// edge-data/team/get-team-skating-distance.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export type StrengthCode = "all" | "pp" | "pk" | "es";
export type PositionCode = "all" | "F" | "D";

export interface SkatingDistanceStat {
    imperial: number;
    metric: number;
    rank: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}

export interface TeamSkatingDistanceDetail {
    strengthCode: StrengthCode;
    positionCode: PositionCode;
    distanceTotal: SkatingDistanceStat;
    distancePer60: SkatingDistanceStat;
}

export interface TeamSkatingDistanceResponse {
    skatingDistanceDetails?: TeamSkatingDistanceDetail[];
}

export async function getTeamSkatingDistanceDetail(teamId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<TeamSkatingDistanceResponse> {
    return fetchJsonWithRetries<TeamSkatingDistanceResponse>(`${BASE}/team-skating-distance-detail/${teamId}/${seasonId}/${gameTypeId}`);
}