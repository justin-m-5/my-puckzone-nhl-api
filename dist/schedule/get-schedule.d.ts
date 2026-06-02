import type { RawGame } from "../shared.js";
export interface ScheduleResponse {
    gameWeek?: {
        date?: string;
        games?: RawGame[];
    }[];
}
export declare function getSchedule(date: string): Promise<ScheduleResponse>;
//# sourceMappingURL=get-schedule.d.ts.map