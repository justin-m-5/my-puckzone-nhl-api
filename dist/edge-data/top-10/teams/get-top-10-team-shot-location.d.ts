export type TeamShotLocationPosition = "all" | "F" | "D";
export type TeamShotLocationStat = "sog" | "goals" | "shooting-pctg";
export type TeamShotLocationZone = "all" | "high" | "mid" | "long";
export interface TeamShotLocationEntry {
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
    all: number;
    highDanger: number;
    midRange: number;
    longRange: number;
}
export interface GetTop10TeamShotLocationParams {
    position?: TeamShotLocationPosition;
    stat?: TeamShotLocationStat;
    location?: TeamShotLocationZone;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}
export declare function getTop10TeamShotLocation({ position, stat, location, seasonId, gameTypeId }: GetTop10TeamShotLocationParams): Promise<TeamShotLocationEntry[]>;
//# sourceMappingURL=get-top-10-team-shot-location.d.ts.map