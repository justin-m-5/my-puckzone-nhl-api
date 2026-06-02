export interface SkaterShotSpeedStat {
    imperial: number;
    metric: number;
    percentile: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}
export interface SkaterShotSpeedBucket {
    value: number;
    percentile: number;
    leagueAvg: number;
}
export interface SkaterShotSpeedDetail {
    topShotSpeed: SkaterShotSpeedStat;
    avgShotSpeed: SkaterShotSpeedStat;
    shotAttemptsOver100: SkaterShotSpeedBucket;
    shotAttempts90To100: SkaterShotSpeedBucket;
    shotAttempts80To90: SkaterShotSpeedBucket;
    shotAttempts70To80: SkaterShotSpeedBucket;
}
export interface SkaterShotSpeedResponse {
    shotSpeedDetails?: SkaterShotSpeedDetail;
}
export declare function getSkaterShotSpeedDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterShotSpeedResponse>;
//# sourceMappingURL=get-skater-shot-speed.d.ts.map