// edge-data/top-10/skaters/get-top-10-skater-shot-location.ts

import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";

export type ShotLocationPosition = "all" | "forwards" | "defense";
export type ShotLocationStat = "sog" | "goals" | "shooting-pctg";
export type ShotLocationZone = "all" | "high" | "mid" | "long";

export interface ShotLocationPlayer {
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

export async function getTop10SkaterShotLocation({ position = "all", stat = "sog", location = "all", seasonId, gameTypeId }: GetTop10ShotLocationParams): Promise<ShotLocationEntry[]> {
    const url = `${BASE}/skater-shot-location-top-10/${position}/${stat}/${location}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries<ShotLocationEntry[]>(url);
}