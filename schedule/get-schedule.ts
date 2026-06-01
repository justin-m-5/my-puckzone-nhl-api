// schedule/get-schedule.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
import type { RawGame } from "../shared.js";

export interface ScheduleResponse {
    gameWeek?: { date?: string; games?: RawGame[] }[];
}

export async function getSchedule(date: string): Promise<ScheduleResponse> {
    return fetchJsonWithRetries<ScheduleResponse>(`${BASE}/schedule/${date}`);
}