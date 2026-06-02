export interface ShotSpeedStat {
    imperial: number;
    metric: number;
    rank: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}
export interface ShotSpeedBucket {
    value: number;
    rank?: number;
    leagueAvg: number;
}
export interface TeamShotSpeedDetail {
    position: "all" | "F" | "D";
    topShotSpeed: ShotSpeedStat;
    avgShotSpeed: ShotSpeedStat;
    shotAttemptsOver100: ShotSpeedBucket;
    shotAttempts90To100: ShotSpeedBucket;
    shotAttempts80To90: ShotSpeedBucket;
    shotAttempts70To80: ShotSpeedBucket;
}
export interface TeamShotSpeedResponse {
    shotSpeedDetails?: TeamShotSpeedDetail[];
}
export declare function getTeamShotSpeedDetail(teamId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<TeamShotSpeedResponse>;
//# sourceMappingURL=get-team-shot-speed.d.ts.map