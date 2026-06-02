// edge-data/top-10/teams/get-top-10-team-shot-location.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10TeamShotLocation({ position = "all", stat = "sog", location = "all", seasonId, gameTypeId }) {
    return fetchJsonWithRetries(`${BASE}/team-shot-location-top-10/${position}/${stat}/${location}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-top-10-team-shot-location.js.map