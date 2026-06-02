// team/get-team-players-stats.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getTeamPlayerStats(teamAbbrev, season, gameTypeId) {
    return fetchJsonWithRetries(`${BASE}/club-stats/${teamAbbrev}/${season}/${gameTypeId}`);
}
//# sourceMappingURL=get-team-players-stats.js.map