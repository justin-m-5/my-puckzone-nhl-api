// game/get-game-summary.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getGameSummary(gameId) {
    return fetchJsonWithRetries(`${BASE}/gamecenter/${gameId}/landing`);
}
//# sourceMappingURL=get-game-summary.js.map