// stats/fetch-stats-report.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_STATS_BASE as BASE } from "../constants.js";
export function buildCayenneExp(parts) {
    return parts.filter(Boolean).join(" and ");
}
export async function fetchStatsReport({ entity, report, cayenneExp, limit = 100, start = 0, sort, dir }) {
    const params = new URLSearchParams({ limit: String(limit), start: String(start), cayenneExp });
    if (sort)
        params.set("sort", sort);
    if (dir)
        params.set("dir", dir);
    return fetchJsonWithRetries(`${BASE}/${entity}/${report}?${params.toString()}`);
}
//# sourceMappingURL=fetch-stats-report.js.map