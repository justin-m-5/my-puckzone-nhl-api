// edge-data/top-10/teams/get-top-10-team-zone-time.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10TeamZoneTime({ strength = "all", sortBy = "offensive", seasonId, gameTypeId }) {
    return fetchJsonWithRetries(`${BASE}/team-zone-time-top-10/${strength}/${sortBy}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-top-10-team-zone-time.js.map