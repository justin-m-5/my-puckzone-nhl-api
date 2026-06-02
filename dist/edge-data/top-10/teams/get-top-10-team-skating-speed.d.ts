export type TeamSpeedPosition = "all" | "F" | "D";
export type TeamSpeedSort = "max" | "over-22" | "20-22" | "18-20";
interface SpeedValue {
    imperial: number;
    metric: number;
}
export interface TeamSpeedEntry {
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
    maxSkatingSpeed: SpeedValue;
    burstsOver22: number;
    bursts20To22: number;
    bursts18To20: number;
}
export interface GetTop10TeamSpeedParams {
    position?: TeamSpeedPosition;
    sort?: TeamSpeedSort;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}
export declare function getTop10TeamSkatingSpeed({ position, sort, seasonId, gameTypeId }: GetTop10TeamSpeedParams): Promise<TeamSpeedEntry[]>;
export {};
//# sourceMappingURL=get-top-10-team-skating-speed.d.ts.map