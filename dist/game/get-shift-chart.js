// game/get-shift-chart.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_STATS_BASE as BASE } from "../constants.js";
export async function getShiftChart(gameId) {
    return fetchJsonWithRetries(`${BASE}/shiftcharts?cayenneExp=gameId=${gameId}`);
}
//# sourceMappingURL=get-shift-chart.js.map