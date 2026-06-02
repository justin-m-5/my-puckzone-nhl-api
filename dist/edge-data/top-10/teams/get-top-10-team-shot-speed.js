// edge-data/top-10/teams/get-top-10-team-shot-speed.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10TeamShotSpeed({ position = "all", sort = "max", seasonId, gameTypeId }) {
    return fetchJsonWithRetries(`${BASE}/team-shot-speed-top-10/${position}/${sort}/${seasonId}/${gameTypeId}`);
}
//# sourceMappingURL=get-top-10-team-shot-speed.js.map