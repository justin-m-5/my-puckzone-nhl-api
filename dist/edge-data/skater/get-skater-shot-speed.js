// edge-data/skater/get-skater-shot-speed.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getSkaterShotSpeedDetail(playerId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/skater-shot-speed-detail/${playerId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-skater-shot-speed.js.map