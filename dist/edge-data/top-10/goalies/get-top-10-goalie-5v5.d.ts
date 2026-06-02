export type Goalie5v5Sort = "save-pctg" | "save-pctg-close" | "shots" | "shots-per-60";
export interface Goalie5v5Top10Player {
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
export interface Goalie5v5Entry {
    player: Goalie5v5Top10Player;
    savePctg: number;
    savePctgClose?: number;
    shots: number;
    shotsPer60: number;
}
export interface GetTop10Goalie5v5Params {
    sort?: Goalie5v5Sort;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}
export declare function getTop10Goalie5v5({ sort, seasonId, gameTypeId }: GetTop10Goalie5v5Params): Promise<Goalie5v5Entry[]>;
//# sourceMappingURL=get-top-10-goalie-5v5.d.ts.map