// scoreboard/get-scoreboard.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getScoreboard(date) {
    return fetchJsonWithRetries(`${BASE}/score/${date}`);
}
//# sourceMappingURL=get-scoreboard.js.map