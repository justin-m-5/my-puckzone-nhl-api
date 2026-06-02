// team/get-team-schedule.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getTeamSchedule(teamAbbrev, season) {
    return fetchJsonWithRetries(`${BASE}/club-schedule-season/${teamAbbrev}/${season}`);
}
//# sourceMappingURL=get-team-schedule.js.map