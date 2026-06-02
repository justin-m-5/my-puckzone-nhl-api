export interface TeamShotLocationDetail {
    area: string;
    sog: number;
    sogRank: number;
    goals: number;
    goalsRank: number;
    shootingPctg: number;
    shootingPctgRank: number;
}
export interface TeamShotLocationTotal {
    locationCode: "all" | "high" | "long" | "mid";
    position: "all" | "F" | "D";
    sog: number;
    sogRank: number;
    sogLeagueAvg: number;
    goals: number;
    goalsRank: number;
    goalsLeagueAvg: number;
    shootingPctg: number;
    shootingPctgRank: number;
    shootingPctgLeagueAvg: number;
}
export interface TeamShotLocationResponse {
    shotLocationDetails?: TeamShotLocationDetail[];
    shotLocationTotals?: TeamShotLocationTotal[];
}
export declare function getTeamShotLocationDetail(teamId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<TeamShotLocationResponse>;
//# sourceMappingURL=get-team-shot-location.d.ts.map