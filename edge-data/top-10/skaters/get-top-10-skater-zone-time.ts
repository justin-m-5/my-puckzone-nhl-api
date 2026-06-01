// edge-data/top-10/skaters/get-top-10-skater-zone-time.ts

import { fetchJsonWithRetries } from "../../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../../constants.js";

export type ZoneTimePosition = "all" | "F" | "D";
export type ZoneTimeStrength = "all" | "es" | "pp" | "pk";
export type ZoneTimeSortBy = "offensive" | "neutral" | "defensive";

export interface ZoneTimePlayer {
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

export interface ZoneTimeEntry {
    player: ZoneTimePlayer;
    offensiveZoneTime: number;
    neutralZoneTime: number;
    defensiveZoneTime: number;
}

export interface GetTop10SkaterZoneTimeParams {
    position?: ZoneTimePosition;
    strength?: ZoneTimeStrength;
    sortBy?: ZoneTimeSortBy;
    seasonId: string | number;
    gameTypeId: 2 | 3;
}

export async function getTop10SkaterZoneTime({ position = "all", strength = "all", sortBy = "offensive", seasonId, gameTypeId }: GetTop10SkaterZoneTimeParams): Promise<ZoneTimeEntry[]> {
    const url = `${BASE}/skater-zone-time-top-10/${position}/${strength}/${sortBy}/${seasonId}/${gameTypeId}`;
    return fetchJsonWithRetries<ZoneTimeEntry[]>(url);
}