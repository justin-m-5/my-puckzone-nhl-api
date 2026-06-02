// edge-data/skater/get-skater-skating-speed.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getSkaterSkatingSpeedDetail(playerId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/skater-skating-speed-detail/${playerId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-skater-skating-speed.js.map