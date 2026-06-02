// edge-data/goalie/get-goalie-shot-location.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getGoalieShotLocationDetail(playerId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/goalie-shot-location-detail/${playerId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-goalie-shot-location.js.map