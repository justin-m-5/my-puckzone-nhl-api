// edge-data/team/get-team-zone-time.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";
export async function getTeamZoneTimeDetail(teamId, seasonId, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/team-zone-time-details/${teamId}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-team-zone-time.js.map