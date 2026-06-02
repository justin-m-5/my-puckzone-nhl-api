export type TeamShotSpeedPosition = "all" | "F" | "D";
export type TeamShotSpeedSort = "max" | "over-100" | "90-99" | "80-89" | "70-79";
interface SpeedValue {
    imperial: number;
    metric: number;
}
export interface TeamShotSpeedEntry {
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
    hardestShot: SpeedValue;
    shotAttemptsOver100: number;
    shotAttempts90To100: number;
    shotAttempts80To90: number;
    shotAttempts70To80: number;
}
export interface GetTop10TeamShotSpeedParams {
    position?: TeamShotSpeedPosition;
    sort?: TeamShotSpeedSort;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}
export declare function getTop10TeamShotSpeed({ position, sort, seasonId, gameTypeId }: GetTop10TeamShotSpeedParams): Promise<TeamShotSpeedEntry[]>;
export {};
//# sourceMappingURL=get-top-10-team-shot-speed.d.ts.map