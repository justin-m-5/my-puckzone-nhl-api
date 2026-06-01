// edge-data/team/get-team-shot-location.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export interface TeamShotLocationDetail {
    area: string;
    sog: number;
    sogRank: number;
    goals: number;
    goalsRank: number;
    shootingPctg: number;
    shootingPctgRank: number;
}

export interface TeamShotLocationTotal {
    locationCode: "all" | "high" | "long" | "mid";
    position: "all" | "F" | "D";
    sog: number;
    sogRank: number;
    sogLeagueAvg: number;
    goals: number;
    goalsRank: number;
    goalsLeagueAvg: number;
    shootingPctg: number;
    shootingPctgRank: number;
    shootingPctgLeagueAvg: number;
}

export interface TeamShotLocationResponse {
    shotLocationDetails?: TeamShotLocationDetail[];
    shotLocationTotals?: TeamShotLocationTotal[];
}

export async function getTeamShotLocationDetail(teamId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<TeamShotLocationResponse> {
    return fetchJsonWithRetries<TeamShotLocationResponse>(`${BASE}/team-shot-location-detail/${teamId}/${seasonId}/${gameTypeId}`);
}