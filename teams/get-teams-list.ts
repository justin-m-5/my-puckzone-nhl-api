// teams/get-teams-list.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_STATS_BASE } from "../constants.js";

export interface NHLMasterTeam {
    id: number;
    triCode: string;
    fullName: string;
}

export interface NHLMasterTeamsResponse {
    data: NHLMasterTeam[];
}

export async function getMasterTeamsList(): Promise<NHLMasterTeamsResponse> {
    return fetchJsonWithRetries<NHLMasterTeamsResponse>(`${NHL_STATS_BASE}/team`);
}