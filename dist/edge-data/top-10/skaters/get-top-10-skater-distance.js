// edge-data/top-10/skaters/get-top-10-skater-distance.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10SkaterDistance({ position = "all", strength = "all", sortBy = "total", seasonId, gameTypeId }) {
    const url = `${BASE}/skater-distance-top-10/${position}/${strength}/${sortBy}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries(url);
}
//# sourceMappingURL=get-top-10-skater-distance.js.map