// schedule/get-schedule.ts
import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
export async function getSchedule(date) {
    return fetchJsonWithRetries(`${BASE}/schedule/${date}`);
}
//# sourceMappingURL=get-schedule.js.map