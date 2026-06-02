import type { RawGame } from "../shared.js";
export interface ClubScheduleResponse {
    games?: RawGame[];
}
export declare function getTeamSchedule(teamAbbrev: string, season: string): Promise<ClubScheduleResponse>;
//# sourceMappingURL=get-team-schedule.d.ts.map