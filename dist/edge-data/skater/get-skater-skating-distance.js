// edge-data/skater/get-skater-skating-distance.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getSkaterSkatingDistanceDetail(playerId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/skater-skating-distance-detail/${playerId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-skater-skating-distance.js.map