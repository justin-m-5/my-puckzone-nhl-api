// edge-data/team/get-team-zone-time.ts

import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

export type ZoneTimeStrengthCode = "all" | "es" | "pp" | "pk";

export interface TeamZoneTimeDetail {
    strengthCode: ZoneTimeStrengthCode;
    offensiveZonePctg: number;
    offensiveZoneRank: number;
    offensiveZoneLeagueAvg: number;
    neutralZonePctg: number;
    neutralZoneRank: number;
    neutralZoneLeagueAvg: number;
    defensiveZonePctg: number;
    defensiveZoneRank: number;
    defensiveZoneLeagueAvg: number;
}

export interface TeamShotDifferential {
    shotAttemptDifferential: number;
    shotAttemptDifferentialRank: number;
    sogDifferential: number;
    sogDifferentialRank: number;
}

export interface TeamZoneTimeResponse {
    zoneTimeDetails?: TeamZoneTimeDetail[];
    shotDifferential?: TeamShotDifferential;
}

export async function getTeamZoneTimeDetail(teamId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<TeamZoneTimeResponse> {
    return fetchJsonWithRetries<TeamZoneTimeResponse>(`${BASE}/team-zone-time-details/${teamId}/${seasonId}/${gameTypeId}`);
}