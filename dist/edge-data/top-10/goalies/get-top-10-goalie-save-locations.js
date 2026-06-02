// edge-data/top-10/goalies/get-top-10-goalie-save-locations.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10GoalieSaveLocation({ location = "all", stat = "save-pctg", seasonId, gameTypeId }) {
    const url = `${BASE}/goalie-shot-location-top-10/${stat}/${location}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries(url);
}
//# sourceMappingURL=get-top-10-goalie-save-locations.js.map