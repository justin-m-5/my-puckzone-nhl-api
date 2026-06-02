// edge-data/goalie/get-goalie-5v5.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getGoalie5v5Detail(playerId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/goalie-5v5-detail/${playerId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-goalie-5v5.js.map