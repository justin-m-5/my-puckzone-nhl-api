// playoffs/get-playoff-bracket.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getPlayoffBracket(year) {
    return fetchJsonWithRetries(`${BASE}/playoff-bracket/${year}`);
}
//# sourceMappingURL=get-playoff-bracket.js.map