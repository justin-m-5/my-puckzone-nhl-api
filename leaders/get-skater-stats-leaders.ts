// leaders/get-skater-stats-leaders.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";

export type SkaterLeaderCategory = | "points" | "goals" | "assists" | "plusMinus" | "hits" | "blockedShots" | 
"penaltyMinutes" | "powerPlayGoals" | "shortHandedGoals" | "gameWinningGoals" | "overtimeGoals" | "shots" | "shootingPctg" 
| "faceoffWinPctg" | "timeOnIcePerGame";

export interface SkaterLeader {
    id: number;
    firstName: { default: string };
    lastName: { default: string };
    sweaterNumber: number;
    headshot: string;
    teamAbbrev: string;
    teamName: { default: string };
    teamLogo: string;
    position: string;
    value: number;
}

export interface SkaterStatsLeadersResponse {
    [category: string]: SkaterLeader[];
}

export async function getSkaterStatsLeaders({ seasonId, gameTypeId, categories, limit = 10 }: {
    seasonId: number | string;
    gameTypeId: 2 | 3;
    categories: SkaterLeaderCategory | SkaterLeaderCategory[];
    limit?: number;
}): Promise<SkaterStatsLeadersResponse> {
    const cats = Array.isArray(categories) ? categories.join(",") : categories;
    const url = `${BASE}/skater-stats-leaders/${seasonId}/${gameTypeId}?categories=${cats}&limit=${limit}`;
    return fetchJsonWithRetries<SkaterStatsLeadersResponse>(url);
}