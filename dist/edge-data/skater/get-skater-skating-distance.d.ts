export type SkaterStrengthCode = "all" | "es" | "pp" | "pk";
export interface SkaterDistanceStat {
    imperial: number;
    metric: number;
    percentile: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}
export interface SkaterSkatingDistanceDetail {
    strengthCode: SkaterStrengthCode;
    distanceTotal: SkaterDistanceStat;
    distancePer60: SkaterDistanceStat;
    distanceMaxGame?: unknown;
    distanceMaxPeriod?: unknown;
}
export interface SkaterSkatingDistanceResponse {
    skatingDistanceDetails?: SkaterSkatingDistanceDetail[];
}
export declare function getSkaterSkatingDistanceDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterSkatingDistanceResponse>;
//# sourceMappingURL=get-skater-skating-distance.d.ts.map