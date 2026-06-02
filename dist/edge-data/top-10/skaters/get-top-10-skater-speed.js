// edge-data/top-10/skaters/get-top-10-skater-speed.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10SkaterSpeed({ position = "all", sort = "max", seasonId, gameTypeId }) {
    const url = `${BASE}/skater-speed-top-10/${position}/${sort}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries(url);
}
//# sourceMappingURL=get-top-10-skater-speed.js.map