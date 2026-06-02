// standings/get-standings.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getStandings() {
    return fetchJsonWithRetries(`${BASE}/standings/now`);
}
//# sourceMappingURL=get-standings.js.map