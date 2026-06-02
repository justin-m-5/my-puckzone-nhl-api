// edge-data/skater/get-skater-shot-location.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getSkaterShotLocationDetail(playerId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/skater-shot-location-detail/${playerId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-skater-shot-location.js.map