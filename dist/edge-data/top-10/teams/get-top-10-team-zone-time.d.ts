export type TeamZoneTimeStrength = "all" | "es" | "pp" | "pk";
export type TeamZoneTimeSortBy = "offensive" | "neutral" | "defensive";
export interface TeamZoneTimeEntry {
    team: {
        commonName: {
            default: string;
        };
        placeNameWithPreposition: {
            default: string;
            fr?: string;
        };
        abbrev: string;
        teamLogo: {
            light: string;
            dark: string;
        };
        slug: string;
    };
    offensiveZoneTime: number;
    neutralZoneTime: number;
    defensiveZoneTime: number;
}
export interface GetTop10TeamZoneTimeParams {
    strength?: TeamZoneTimeStrength;
    sortBy?: TeamZoneTimeSortBy;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}
export declare function getTop10TeamZoneTime({ strength, sortBy, seasonId, gameTypeId }: GetTop10TeamZoneTimeParams): Promise<TeamZoneTimeEntry[]>;
//# sourceMappingURL=get-top-10-team-zone-time.d.ts.map