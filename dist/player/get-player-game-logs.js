// player/get-player-game-logs.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getPlayerGameLogs(playerId, season, gameType) {
    return fetchJsonWithRetries(`${BASE}/player/${playerId}/game-log/${season}/${gameType}`);
}
//# sourceMappingURL=get-player-game-logs.js.map