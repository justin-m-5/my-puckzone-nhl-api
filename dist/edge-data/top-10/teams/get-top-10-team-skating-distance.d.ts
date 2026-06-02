export type TeamDistancePosition = "all" | "F" | "D";
export type TeamDistanceStrength = "all" | "es" | "pp" | "pk";
export type TeamDistanceSortBy = "total" | "per-60" | "max-game" | "max-period";
interface DistanceValue {
    imperial: number;
    metric: number;
}
export interface TeamDistanceEntry {
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
    distanceTotal: DistanceValue;
    distancePer60: DistanceValue;
}
export interface GetTop10TeamDistanceParams {
    position?: TeamDistancePosition;
    strength?: TeamDistanceStrength;
    sortBy?: TeamDistanceSortBy;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}
export declare function getTop10TeamSkatingDistance({ position, strength, sortBy, seasonId, gameTypeId }: GetTop10TeamDistanceParams): Promise<TeamDistanceEntry[]>;
export {};
//# sourceMappingURL=get-top-10-team-skating-distance.d.ts.map