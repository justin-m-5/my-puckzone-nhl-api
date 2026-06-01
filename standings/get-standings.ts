// standings/get-standings.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
import type { StandingsResponse } from "../shared.js";

export type { StandingsResponse, RawStandingTeam } from "../shared.js";

export async function getStandings(): Promise<StandingsResponse> {
    return fetchJsonWithRetries<StandingsResponse>(`${BASE}/standings/now`);
}