// scoreboard/get-scoreboard.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";
import type { GameClock, LocalizedName, PeriodDescriptor, SeriesStatus, TvBroadcast } from "../shared.js";

export interface NHLApiScoreboardTeam {
    id: number;
    name: LocalizedName;
    abbrev: string;
    score?: number;
    sog?: number;
    logo: string;
}

export interface NHLApiScoreboardGoalAssist {
    playerId: number;
    name: LocalizedName;
    assistsToDate: number;
}

export interface NHLApiScoreboardGoal {
    period: number;
    periodDescriptor: PeriodDescriptor;
    timeInPeriod: string;
    playerId: number;
    name: LocalizedName;
    firstName: LocalizedName;
    lastName: LocalizedName;
    goalModifier: string;
    assists: NHLApiScoreboardGoalAssist[];
    mugshot: string;
    teamAbbrev: string;
    goalsToDate: number;
    awayScore: number;
    homeScore: number;
    strength: "ev" | "pp" | "sh";
    highlightClipSharingUrl?: string;
    highlightClip?: number;
    discreteClip?: number;
}

export interface NHLApiScoreboardGameOutcome {
    lastPeriodType: string;
    otPeriods?: number;
}

export interface NHLApiScoreboardGame {
    id: number;
    season: number;
    gameType: number;
    gameDate: string;
    venue: LocalizedName;
    startTimeUTC: string;
    easternUTCOffset: string;
    venueUTCOffset: string;
    venueTimezone: string;
    tvBroadcasts: TvBroadcast[];
    gameState: string;
    gameScheduleState: string;
    awayTeam: NHLApiScoreboardTeam;
    homeTeam: NHLApiScoreboardTeam;
    seriesStatus?: SeriesStatus;
    gameCenterLink?: string;
    seriesUrl?: string;
    threeMinRecap?: string;
    condensedGame?: string;
    clock: GameClock;
    neutralSite: boolean;
    period?: number;
    periodDescriptor?: PeriodDescriptor;
    gameOutcome?: NHLApiScoreboardGameOutcome;
    goals: NHLApiScoreboardGoal[];
}

export interface NHLApiScoreboardGameWeekDay {
    date: string;
    dayAbbrev: string;
    numberOfGames: number;
}

export interface NHLApiScoreboardResponse {
    prevDate: string;
    currentDate: string;
    nextDate: string;
    gameWeek: NHLApiScoreboardGameWeekDay[];
    games: NHLApiScoreboardGame[];
}

export async function getScoreboard(date: string): Promise<NHLApiScoreboardResponse> {
    return fetchJsonWithRetries<NHLApiScoreboardResponse>(`${BASE}/score/${date}`);
}