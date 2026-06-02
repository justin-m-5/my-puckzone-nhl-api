// edge-data/top-10/goalies/get-top-10-goalie-save-percentage.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10GoalieSavePctg({ sort = "games", seasonId, gameTypeId }) {
    const url = `${BASE}/goalie-edge-save-pctg-top-10/${sort}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries(url);
}
//# sourceMappingURL=get-top-10-goalie-save-percentage.js.map