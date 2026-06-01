// player/get-player-landing.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
import type { PlayerLandingResponse } from "./shared.js";

export type { PlayerLandingResponse, GoalieFeaturedStats, SkaterFeaturedStats, GoalieSeasonStats, SkaterSeasonStats } from "./shared.js";

export async function getPlayerLanding(playerId: number): Promise<PlayerLandingResponse> {
    return fetchJsonWithRetries<PlayerLandingResponse>(`${BASE}/player/${playerId}/landing`);
}