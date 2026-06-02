// playoffs/get-playoff-series-schedule.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getSeriesSchedule(season, seriesLetter) {
    return fetchJsonWithRetries(`${BASE}/schedule/playoff-series/${season}/${seriesLetter}`);
}
//# sourceMappingURL=get-playoff-series-schedule.js.map