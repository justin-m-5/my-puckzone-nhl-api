// edge-data/top-10/skaters/get-top-10-skater-shot-location.ts
import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";
export async function getTop10SkaterShotLocation({ position = "all", stat = "sog", location = "all", seasonId, gameTypeId }) {
    const url = `${BASE}/skater-shot-location-top-10/${position}/${stat}/${location}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries(url);
}
//# sourceMappingURL=get-top-10-skater-shot-location.js.map