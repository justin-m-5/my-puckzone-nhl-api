// edge-data/team/get-team-shot-speed.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getTeamShotSpeedDetail(teamId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/team-shot-speed-detail/${teamId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-team-shot-speed.js.map