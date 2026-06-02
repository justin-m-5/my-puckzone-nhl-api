// player/get-player-landing.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getPlayerLanding(playerId) {
    return fetchJsonWithRetries(`${BASE}/player/${playerId}/landing`);
}
//# sourceMappingURL=get-player-landing.js.map