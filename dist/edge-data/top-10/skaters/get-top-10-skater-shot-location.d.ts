export type ShotLocationPosition = "all" | "forwards" | "defense";
export type ShotLocationStat = "sog" | "goals" | "shooting-pctg";
export type ShotLocationZone = "all" | "high" | "mid" | "long";
export interface ShotLocationPlayer {
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
export interface ShotLocationEntry {
    player: ShotLocationPlayer;
    all: number;
    highDanger: number;
    midRange: number;
    longRange: number;
}
export interface GetTop10ShotLocationParams {
    position?: ShotLocationPosition;
    stat?: ShotLocationStat;
    location?: ShotLocationZone;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}
export declare function getTop10SkaterShotLocation({ position, stat, location, seasonId, gameTypeId }: GetTop10ShotLocationParams): Promise<ShotLocationEntry[]>;
//# sourceMappingURL=get-top-10-skater-shot-location.d.ts.map