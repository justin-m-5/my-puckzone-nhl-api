// edge-data/team/get-team-shot-location.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getTeamShotLocationDetail(teamId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/team-shot-location-detail/${teamId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-team-shot-location.js.map