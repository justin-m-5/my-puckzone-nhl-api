// edge-data/top-10/goalies/get-top-10-goalie-5v5.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10Goalie5v5({ sort = "save-pctg", seasonId, gameTypeId }) {
    const url = `${BASE}/goalie-5v5-top-10/${sort}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries(url);
}
//# sourceMappingURL=get-top-10-goalie-5v5.js.map