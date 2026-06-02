// edge-data/team/get-team-skating-speed.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getTeamSkatingSpeedDetail(teamId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/team-skating-speed-detail/${teamId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-team-skating-speed.js.map