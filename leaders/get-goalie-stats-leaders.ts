// leaders/get-goalie-stats-leaders.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";

export type GoalieLeaderCategory = | "wins" | "savePctg" | "goalsAgainstAverage" | "shutouts" | "saves" | "goalsAgainst" | "gamesStarted" | "gamesPlayed" | "timeOnIce";

export const PERFORMANCE_CATEGORIES = ["wins", "savePctg", "goalsAgainstAverage", "shutouts"] as const;
export type PerformanceCategory = (typeof PERFORMANCE_CATEGORIES)[number];

export const ADVANCED_GOALIE_CATEGORIES = ["saves", "goalsAgainst"] as const;
export type AdvancedGoalieCategory = (typeof ADVANCED_GOALIE_CATEGORIES)[number];

export const EDGE_GOALIE_CATEGORIES = ["gamesStarted", "gamesPlayed", "timeOnIce"] as const;
export type EdgeGoalieCategory = (typeof EDGE_GOALIE_CATEGORIES)[number];

export const GOALIE_ADVANCED_REPORT_IDS = ["summary", "advanced", "savesByStrength", "startedVsRelieved", "daysRest"] as const;
export type GoalieAdvancedReport = (typeof GOALIE_ADVANCED_REPORT_IDS)[number];

export const GOALIE_EDGE_REPORT_IDS = ["timeonice", "shootout", "penaltyShots"] as const;
export type GoalieEdgeReport = (typeof GOALIE_EDGE_REPORT_IDS)[number];

export interface GoalieLeader {
    id: number;
    firstName: { default: string };
    lastName: { default: string };
    sweaterNumber: number;
    headshot: string;
    teamAbbrev: string;
    teamName: { default: string };
    teamLogo: string;
    value: number;
}

export interface GoalieStatsLeadersResponse {
    [category: string]: GoalieLeader[];
}

export async function getGoalieStatsLeaders({ seasonId, gameTypeId, categories, limit = 10 }: {
    seasonId: number | string;
    gameTypeId: 2 | 3;
    categories: GoalieLeaderCategory | GoalieLeaderCategory[];
    limit?: number;
}): Promise<GoalieStatsLeadersResponse> {
    const cats = Array.isArray(categories) ? categories.join(",") : categories;
    const url = `${BASE}/goalie-stats-leaders/${seasonId}/${gameTypeId}?categories=${cats}&limit=${limit}`;
    return fetchJsonWithRetries<GoalieStatsLeadersResponse>(url);
}