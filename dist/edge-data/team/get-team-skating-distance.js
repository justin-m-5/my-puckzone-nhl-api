// edge-data/team/get-team-skating-distance.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getTeamSkatingDistanceDetail(teamId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/team-skating-distance-detail/${teamId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-team-skating-distance.js.map