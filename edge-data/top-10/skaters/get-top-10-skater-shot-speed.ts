// edge-data/top-10/skaters/get-top-10-skater-shot-speed.ts

import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";

export type ShotSpeedPosition = "all" | "F" | "D";
export type ShotSpeedSort = "max" | "over-100" | "90-99" | "80-89" | "70-79";

interface SpeedValue {
    imperial: number;
    metric: number;
}

interface GameOverlay {
    gameDate: string;
    awayTeam: { abbrev: string; score: number };
    homeTeam: { abbrev: string; score: number };
    gameOutcome: { lastPeriodType?: string; otPeriods?: number };
    periodDescriptor: {
        maxRegulationPeriods: number;
        number: number;
        periodType: string;
    };
    timeInPeriod: string;
    gameType: number;
}

interface HardestShot extends SpeedValue {
    overlay: GameOverlay;
}

export interface ShotSpeedPlayer {
    firstName: { default: string };
    lastName: { default: string };
    slug: string;
    headshot: string;
    position: string;
    sweaterNumber: number;
    team: {
        commonName: { default: string };
        placeNameWithPreposition: { default: string; fr?: string };
        abbrev: string;
        teamLogo: { light: string; dark: string };
        slug: string;
    };
}

export interface ShotSpeedEntry {
    player: ShotSpeedPlayer;
    hardestShot: HardestShot;
    shotAttemptsOver100: number;
    shotAttempts90To100: number;
    shotAttempts80To90: number;
    shotAttempts70To80: number;
}

export interface GetTop10ShotSpeedParams {
    position?: ShotSpeedPosition;
    sort?: ShotSpeedSort;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}

export async function getTop10SkaterShotSpeed({ position = "all", sort = "max", seasonId, gameTypeId }: GetTop10ShotSpeedParams): Promise<ShotSpeedEntry[]> {
    const url = `${BASE}/skater-shot-speed-top-10/${position}/${sort}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries<ShotSpeedEntry[]>(url);
}