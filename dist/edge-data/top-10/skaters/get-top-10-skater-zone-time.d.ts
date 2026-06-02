export type ZoneTimePosition = "all" | "F" | "D";
export type ZoneTimeStrength = "all" | "es" | "pp" | "pk";
export type ZoneTimeSortBy = "offensive" | "neutral" | "defensive";
export interface ZoneTimePlayer {
    firstName: {
        default: string;
    };
    lastName: {
        default: string;
    };
    slug: string;
    headshot: string;
    position: string;
    sweaterNumber: number;
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
}
export interface ZoneTimeEntry {
    player: ZoneTimePlayer;
    offensiveZoneTime: number;
    neutralZoneTime: number;
    defensiveZoneTime: number;
}
export interface GetTop10SkaterZoneTimeParams {
    position?: ZoneTimePosition;
    strength?: ZoneTimeStrength;
    sortBy?: ZoneTimeSortBy;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}
export declare function getTop10SkaterZoneTime({ position, strength, sortBy, seasonId, gameTypeId }: GetTop10SkaterZoneTimeParams): Promise<ZoneTimeEntry[]>;
//# sourceMappingURL=get-top-10-skater-zone-time.d.ts.map