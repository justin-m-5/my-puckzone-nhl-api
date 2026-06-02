export type SkaterZoneTimeStrengthCode = "all" | "es" | "pp" | "pk";
export interface SkaterZoneTimeDetail {
    strengthCode: SkaterZoneTimeStrengthCode;
    offensiveZonePctg: number;
    offensiveZonePercentile: number;
    offensiveZoneLeagueAvg: number;
    neutralZonePctg: number;
    neutralZonePercentile: number;
    neutralZoneLeagueAvg: number;
    defensiveZonePctg: number;
    defensiveZonePercentile: number;
    defensiveZoneLeagueAvg: number;
}
export interface SkaterZoneStarts {
    offensiveZoneStartsPctg: number;
    offensiveZoneStartsPctgPercentile: number;
    neutralZoneStartsPctg: number;
    neutralZoneStartsPctgPercentile: number;
    defensiveZoneStartsPctg: number;
    defensiveZoneStartsPctgPercentile: number;
}
export interface SkaterZoneTimeResponse {
    zoneTimeDetails?: SkaterZoneTimeDetail[];
    zoneStarts?: SkaterZoneStarts;
}
export declare function getSkaterZoneTime(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<SkaterZoneTimeResponse>;
//# sourceMappingURL=get-skater-zone-time.d.ts.map