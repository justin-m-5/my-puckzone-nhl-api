// edge-data/top-10/skaters/get-top-10-skater-zone-time.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10SkaterZoneTime({ position = "all", strength = "all", sortBy = "offensive", seasonId, gameTypeId }) {
    const url = `${BASE}/skater-zone-time-top-10/${position}/${strength}/${sortBy}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries(url);
}
//# sourceMappingURL=get-top-10-skater-zone-time.js.map