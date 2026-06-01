// team/get-team-schedule.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
import type { RawGame } from "../shared.js";

export interface ClubScheduleResponse {
    games?: RawGame[];
}

export async function getTeamSchedule(teamAbbrev: string, season: string): Promise<ClubScheduleResponse> {
    return fetchJsonWithRetries<ClubScheduleResponse>(`${BASE}/club-schedule-season/${teamAbbrev}/${season}`);
}