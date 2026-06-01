// playoffs/get-playoff-bracket.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
import type { PlayoffBracketResponse } from "../shared.js";

export type { PlayoffLocalizedText, PlayoffTeam, PlayoffSeries, PlayoffBracketResponse } from "../shared.js";

export async function getPlayoffBracket(year: number): Promise<PlayoffBracketResponse> {
    return fetchJsonWithRetries<PlayoffBracketResponse>(`${BASE}/playoff-bracket/${year}`);
}