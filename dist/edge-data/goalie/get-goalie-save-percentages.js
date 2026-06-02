// edge-data/goalie/get-goalie-save-percentages.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getGoalieSavePercentageDetail(playerId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/goalie-save-percentage-detail/${playerId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-goalie-save-percentages.js.map