// playoffs/get-playoff-series-schedule.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
import type { NHLApiGameOutcome, PeriodDescriptor, TvBroadcast } from "../shared.js";

export type NHLApiGameState = "OFF" | "FUT" | "LIVE" | "CRIT" | "PRE";
export type NHLApiGameScheduleState = "OK" | "TBD" | "PPD" | "SUSP" | "CNCL";
export type NHLApiPeriodType = "REG" | "OT" | "SO";

export interface NHLApiSeriesTeam {
    id: number;
    name: { default: string };
    abbrev: string;
    placeName: { default: string };
    placeNameWithPreposition: { default: string; fr?: string };
    conference?: { name: string; abbrev: string };
    record: string;
    seriesWins: number;
    divisionAbbrev?: string;
    seed: number;
    logo: string;
    darkLogo: string;
}

export interface NHLApiSeriesGameTeam {
    id: number;
    commonName: { default: string };
    placeName: { default: string; fr?: string };
    placeNameWithPreposition: { default: string; fr?: string };
    abbrev: string;
    score?: number;
}


export interface NHLApiSeriesStatus {
    topSeedWins: number;
    bottomSeedWins: number;
}


export interface NHLApiSeriesGame {
    id: number;
    season: number;
    gameType: number;
    gameNumber: number;
    ifNecessary: boolean;
    venue: { default: string };
    neutralSite: boolean;
    startTimeUTC: string;
    easternUTCOffset: string;
    venueUTCOffset: string;
    venueTimezone: string;
    gameState: NHLApiGameState;
    gameScheduleState: NHLApiGameScheduleState;
    tvBroadcasts: TvBroadcast[];
    awayTeam: NHLApiSeriesGameTeam;
    homeTeam: NHLApiSeriesGameTeam;
    gameCenterLink: string;
    ticketsLink?: string;
    periodDescriptor?: PeriodDescriptor;
    seriesStatus?: NHLApiSeriesStatus;
    gameOutcome?: NHLApiGameOutcome;
}

export interface NHLApiFullCoverageUrl {
    cs: string;
    de: string;
    fi: string;
    sv: string;
    sk: string;
    en: string;
    fr: string;
    es: string;
}

export interface NHLApiSeriesScheduleResponse {
    round: number;
    roundAbbrev: string;
    roundLabel: string;
    seriesLetter: string;
    seriesLogo: string;
    seriesLogoFr: string;
    neededToWin: number;
    length: number;
    bottomSeedTeam: NHLApiSeriesTeam;
    topSeedTeam: NHLApiSeriesTeam;
    games: NHLApiSeriesGame[];
    fullCoverageUrl: NHLApiFullCoverageUrl;
}

export async function getSeriesSchedule(season: number, seriesLetter: string): Promise<NHLApiSeriesScheduleResponse> {
    return fetchJsonWithRetries<NHLApiSeriesScheduleResponse>(`${BASE}/schedule/playoff-series/${season}/${seriesLetter}`);
}