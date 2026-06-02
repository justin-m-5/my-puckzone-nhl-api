// edge-data/top-10/teams/get-top-10-team-skating-distance.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10TeamSkatingDistance({ position = "all", strength = "all", sortBy = "total", seasonId, gameTypeId }) {
    return fetchJsonWithRetries(`${BASE}/team-skating-distance-top-10/${position}/${strength}/${sortBy}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-top-10-team-skating-distance.js.map