export interface SkaterSpeedStat {
    imperial: number;
    metric: number;
    percentile: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}
export interface SkaterSpeedBurst {
    value: number;
    percentile: number;
    leagueAvg: number;
}
export interface SkaterSkatingSpeedDetail {
    maxSkatingSpeed: SkaterSpeedStat;
    burstsOver22: SkaterSpeedBurst;
    bursts20To22: SkaterSpeedBurst;
    bursts18To20: SkaterSpeedBurst;
}
export interface SkaterSkatingSpeedResponse {
    skatingSpeedDetails?: SkaterSkatingSpeedDetail;
}
export declare function getSkaterSkatingSpeedDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterSkatingSpeedResponse>;
//# sourceMappingURL=get-skater-skating-speed.d.ts.map