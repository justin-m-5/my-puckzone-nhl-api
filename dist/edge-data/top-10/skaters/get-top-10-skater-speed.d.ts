export type SkaterSpeedPosition = "all" | "F" | "D";
export type SkaterSpeedSort = "max" | "over-22" | "20-22" | "18-20";
interface SpeedValue {
    imperial: number;
    metric: number;
}
interface GameOverlay {
    gameDate: string;
    awayTeam: {
        abbrev: string;
        score: number;
    };
    homeTeam: {
        abbrev: string;
        score: number;
    };
    gameOutcome: {
        lastPeriodType?: string;
        otPeriods?: number;
    };
    periodDescriptor: {
        maxRegulationPeriods: number;
        number: number;
        periodType: string;
    };
    timeInPeriod: string;
    gameType: number;
}
interface MaxSpeed extends SpeedValue {
    overlay: GameOverlay;
}
export interface SkaterSpeedPlayer {
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
export interface SkaterSpeedEntry {
    player: SkaterSpeedPlayer;
    maxSpeed: MaxSpeed;
    burstsOver22: number;
    bursts20To22: number;
    bursts18To20: number;
}
export interface GetTop10SkaterSpeedParams {
    position?: SkaterSpeedPosition;
    sort?: SkaterSpeedSort;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}
export declare function getTop10SkaterSpeed({ position, sort, seasonId, gameTypeId }: GetTop10SkaterSpeedParams): Promise<SkaterSpeedEntry[]>;
export {};
//# sourceMappingURL=get-top-10-skater-speed.d.ts.map