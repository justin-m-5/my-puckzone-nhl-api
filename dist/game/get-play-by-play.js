// game/get-play-by-play.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getGamePlayByPlay(gameId) {
    return fetchJsonWithRetries(`${BASE}/gamecenter/${gameId}/play-by-play`);
}
//# sourceMappingURL=get-play-by-play.js.map