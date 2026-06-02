// leaders/get-goalie-stats-leaders.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export const PERFORMANCE_CATEGORIES = ["wins", "savePctg", "goalsAgainstAverage", "shutouts"];
export const ADVANCED_GOALIE_CATEGORIES = ["saves", "goalsAgainst"];
export const EDGE_GOALIE_CATEGORIES = ["gamesStarted", "gamesPlayed", "timeOnIce"];
export const GOALIE_ADVANCED_REPORT_IDS = ["summary", "advanced", "savesByStrength", "startedVsRelieved", "daysRest"];
export const GOALIE_EDGE_REPORT_IDS = ["timeonice", "shootout", "penaltyShots"];
export async function getGoalieStatsLeaders({ seasonId, gameTypeId, categories, limit = 10 }) {
    const cats = Array.isArray(categories) ? categories.join(",") : categories;
    const url = `${BASE}/goalie-stats-leaders/${seasonId}/${gameTypeId}?categories=${cats}&limit=${limit}`;
    return fetchJsonWithRetries(url);
}
//# sourceMappingURL=get-goalie-stats-leaders.js.map