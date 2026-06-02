// game/get-game-story.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getGameStory(gameId) {
    return fetchJsonWithRetries(`${BASE}/wsc/game-story/${gameId}`);
}
//# sourceMappingURL=get-game-story.js.map