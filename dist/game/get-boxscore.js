// game/get-boxscore.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getBoxscore(gameId) {
    return fetchJsonWithRetries(`${BASE}/gamecenter/${gameId}/boxscore`);
}
//# sourceMappingURL=get-boxscore.js.map