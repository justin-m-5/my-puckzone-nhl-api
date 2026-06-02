export interface SkaterShotLocationDetail {
    area: string;
    sog: number;
    goals: number;
    shootingPctg: number;
    sogPercentile: number;
    goalsPercentile: number;
    shootingPctgPercentile: number;
}
export interface SkaterShotLocationTotal {
    locationCode: "all" | "high" | "long" | "mid";
    sog: number;
    goals: number;
    shootingPctg: number;
    sogPercentile: number;
    goalsPercentile: number;
    shootingPctgPercentile: number;
    sogLeagueAvg: number;
    goalsLeagueAvg: number;
    shootingPctgLeagueAvg: number;
}
export interface SkaterShotLocationResponse {
    shotLocationDetails?: SkaterShotLocationDetail[];
    shotLocationTotals?: SkaterShotLocationTotal[];
}
export declare function getSkaterShotLocationDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterShotLocationResponse>;
//# sourceMappingURL=get-skater-shot-location.d.ts.map