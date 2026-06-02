// edge-data/skater/get-skater-zone-time.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getSkaterZoneTime(playerId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/skater-zone-time/${playerId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-skater-zone-time.js.map