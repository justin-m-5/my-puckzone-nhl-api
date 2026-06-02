export type StrengthCode = "all" | "pp" | "pk" | "es";
export type PositionCode = "all" | "F" | "D";
export interface SkatingDistanceStat {
    imperial: number;
    metric: number;
    rank: number;
    leagueAvg: {
        imperial: number;
        metric: number;
    };
}
export interface TeamSkatingDistanceDetail {
    strengthCode: StrengthCode;
    positionCode: PositionCode;
    distanceTotal: SkatingDistanceStat;
    distancePer60: SkatingDistanceStat;
}
export interface TeamSkatingDistanceResponse {
    skatingDistanceDetails?: TeamSkatingDistanceDetail[];
}
export declare function getTeamSkatingDistanceDetail(teamId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<TeamSkatingDistanceResponse>;
//# sourceMappingURL=get-team-skating-distance.d.ts.map