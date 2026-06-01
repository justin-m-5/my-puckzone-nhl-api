// edge-data/top-10/skaters/get-top-10-skater-distance.ts

import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";

export type SkaterDistancePosition = "all" | "F" | "D";
export type SkaterDistanceStrength = "all" | "es" | "pp" | "pk";
export type SkaterDistanceSortBy = "total" | "per-60" | "max-game" | "max-period";

interface DistanceValue {
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
    gameType: number;
}

interface DistanceWithOverlay extends DistanceValue {
    overlay: GameOverlay;
}

export interface SkaterDistancePlayer {
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

export interface SkaterDistanceEntry {
    player: SkaterDistancePlayer;
    distanceTotal: DistanceValue;
    distancePer60: DistanceValue;
    distanceMaxPerGame: DistanceWithOverlay;
    distanceMaxPerPeriod: DistanceWithOverlay;
}

export interface GetTop10SkaterDistanceParams {
    position?: SkaterDistancePosition;
    strength?: SkaterDistanceStrength;
    sortBy?: SkaterDistanceSortBy;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}

export async function getTop10SkaterDistance({ position = "all", strength = "all", sortBy = "total", seasonId, gameTypeId }: GetTop10SkaterDistanceParams): Promise<SkaterDistanceEntry[]> {
    const url = `${BASE}/skater-distance-top-10/${position}/${strength}/${sortBy}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries<SkaterDistanceEntry[]>(url);
}