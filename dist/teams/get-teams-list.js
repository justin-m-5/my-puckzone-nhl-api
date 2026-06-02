// teams/get-teams-list.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_STATS_BASE } from "../constants.js";
export async function getMasterTeamsList() {
    return fetchJsonWithRetries(`${NHL_STATS_BASE}/team`);
}
//# sourceMappingURL=get-teams-list.js.map