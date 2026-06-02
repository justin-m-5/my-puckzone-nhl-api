// leaders/get-skater-stats-leaders.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getSkaterStatsLeaders({ seasonId, gameTypeId, categories, limit = 10 }) {
    const cats = Array.isArray(categories) ? categories.join(",") : categories;
    const url = `${BASE}/skater-stats-leaders/${seasonId}/${gameTypeId}?categories=${cats}&limit=${limit}`;
    return fetchJsonWithRetries(url);
}
//# sourceMappingURL=get-skater-stats-leaders.js.map