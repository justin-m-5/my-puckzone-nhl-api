// stats/get-goalie-advanced-stats.ts

import { buildCayenneExp, fetchStatsReport, type SortDirection, type StatsApiResponse } from "./fetch-stats-report.js";

export const GOALIE_ADVANCED_REPORT_IDS = ["summary", "advanced", "bios", "savesByStrength", "startedVsRelieved", "daysRest"] as const;
export type GoalieAdvancedReport = (typeof GOALIE_ADVANCED_REPORT_IDS)[number];

export const GOALIE_EDGE_REPORT_IDS = ["timeonice", "shootout", "penaltyShots"] as const;
export type GoalieEdgeReport = (typeof GOALIE_EDGE_REPORT_IDS)[number];

export interface GoalieStatsReportParams {
    seasonId: number | string;
    gameTypeId: 2 | 3;
    teamAbbrev?: string;
    playerId?: number;
    limit?: number;
    start?: number;
    sort?: string;
    dir?: SortDirection;
}

function buildGoalieCayenne(p: GoalieStatsReportParams): string {
    return buildCayenneExp([
        `seasonId=${p.seasonId}`,
        `gameTypeId=${p.gameTypeId}`,
        p.teamAbbrev ? `teamAbbrevs='${p.teamAbbrev.trim().toUpperCase()}'` : null,
        p.playerId ? `playerId=${p.playerId}` : null,
    ]);
}

function callReport<T>(p: GoalieStatsReportParams, report: string): Promise<StatsApiResponse<T>> {
    return fetchStatsReport<T>({
        entity: "goalie", report,
        cayenneExp: buildGoalieCayenne(p),
        limit: p.limit ?? 20, start: p.start ?? 0,
        sort: p.sort, dir: p.dir,
    });
}

export interface GoalieSummaryRow {
    playerId: number;
    goalieFullName: string;
    lastName: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    gamesStarted: number;
    seasonId: number;
    shootsCatches: string;
    wins: number;
    losses: number;
    otLosses: number;
    shutouts: number;
    goalsAgainst: number;
    goalsAgainstAverage: number | null;
    savePct: number | null;
    saves: number;
    shotsAgainst: number;
    goals: number;
    assists: number;
    points: number;
    penaltyMinutes: number;
    timeOnIce: number;
    timeOnIcePerGame: number | null;
}

export interface GoalieAdvancedRow {
    playerId: number;
    goalieFullName: string;
    lastName: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    gamesStarted: number;
    seasonId: number;
    shootsCatches: string;
    completeGames: number;
    completeGamePct: number | null;
    incompleteGames: number;
    qualityStart: number;
    qualityStartsPct: number | null;
    regulationWins: number;
    regulationLosses: number;
    goalsAgainst: number;
    goalsAgainstAverage: number | null;
    goalsFor: number;
    goalsForAverage: number | null;
    savePct: number | null;
    shotsAgainstPer60: number | null;
    timeOnIce: number;
}

export interface GoalieBiosRow {
    playerId: number;
    goalieFullName: string;
    lastName: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    shootsCatches: string;
    birthDate: string;
    birthCity: string;
    birthCountry: string;
    birthStateProvince: string | null;
    currentAge: number;
    currentTeamAbbrev: string;
    draftYear: number | null;
    draftRound: number | null;
    draftPickInRound: number | null;
    draftOverallPick: number | null;
    draftTeamAbbrev: string | null;
    firstSeasonForGameType: number | null;
    height: string;
    weightInPounds: number;
    nationality: string;
    position: string;
    sweaterNumber: number | null;
}

export interface GoalieDaysRestRow {
    playerId: number;
    goalieFullName: string;
    lastName: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    gamesStarted: number;
    seasonId: number;
    shootsCatches: string;
    wins: number;
    losses: number;
    otLosses: number;
    ties: number | null;
    savePct: number | null;
    gamesPlayedDaysRest0: number;
    gamesPlayedDaysRest1: number;
    gamesPlayedDaysRest2: number;
    gamesPlayedDaysRest3: number;
    gamesPlayedDaysRest4Plus: number;
    savePctDaysRest0: number | null;
    savePctDaysRest1: number | null;
    savePctDaysRest2: number | null;
    savePctDaysRest3: number | null;
    savePctDaysRest4Plus: number | null;
}

export interface GoaliePenaltyShotsRow {
    playerId: number;
    goalieFullName: string;
    lastName: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    shootsCatches: string;
    penaltyShotAttempts: number;
    penaltyShotGoals: number;
    penaltyShotSaves: number;
    penaltyShotSavePct: number | null;
    timeOnIce: number;
}

export interface GoalieSavesByStrengthRow {
    playerId: number;
    goalieFullName: string;
    lastName: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    shootsCatches: string;
    evGoalsAgainst: number;
    evSaves: number;
    evShotsAgainst: number;
    evSavePct: number | null;
    ppGoalsAgainst: number;
    ppSaves: number;
    ppShotsAgainst: number;
    ppSavePct: number | null;
    shGoalsAgainst: number;
    shSaves: number;
    shShotsAgainst: number;
    shSavePct: number | null;
    timeOnIce: number;
}

export interface GoalieShootoutRow {
    playerId: number;
    goalieFullName: string;
    lastName: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    shootsCatches: string;
    shootoutGamesPlayed: number;
    shootoutGoalsAgainst: number;
    shootoutSaves: number;
    shootoutShotsAgainst: number;
    shootoutSavePct: number | null;
    shootoutWins: number;
    shootoutLosses: number;
    timeOnIce: number;
}

export interface GoalieStartedVsRelievedRow {
    playerId: number;
    goalieFullName: string;
    lastName: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    shootsCatches: string;
    wins: number;
    losses: number;
    otLosses: number;
    ties: number | null;
    savePct: number | null;
    gamesStarted: number;
    gamesStartedWins: number;
    gamesStartedLosses: number;
    gamesStartedOtLosses: number;
    gamesStartedTies: number | null;
    gamesStartedGoalsAgainst: number;
    gamesStartedSavePct: number | null;
    gamesStartedShotsAgainst: number;
    gamesStartedSaves: number;
    gamesRelieved: number;
    gamesRelievedWins: number;
    gamesRelievedLosses: number;
    gamesRelievedOtLosses: number;
    gamesRelievedTies: number | null;
    gamesRelievedGoalsAgainst: number;
    gamesRelievedSavePct: number | null;
    gamesRelievedShotsAgainst: number;
    gamesRelievedSaves: number;
}

export interface GoalieTimeOnIceRow {
    playerId: number;
    goalieFullName: string;
    lastName: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    gamesStarted: number;
    seasonId: number;
    shootsCatches: string;
    evTimeOnIce: number;
    evTimeOnIcePerGame: number | null;
    otTimeOnIce: number;
    ppTimeOnIce: number;
    ppTimeOnIcePerGame: number | null;
    shTimeOnIce: number;
    shTimeOnIcePerGame: number | null;
    shifts: number;
    shiftsPerGame: number | null;
    timeOnIce: number;
    timeOnIcePerGame: number | null;
    timeOnIcePerStart: number | null;
}

export async function fetchGoalieSummary(p: GoalieStatsReportParams): Promise<StatsApiResponse<GoalieSummaryRow>> {
    return callReport<GoalieSummaryRow>(p, "summary");
}
export async function fetchGoalieAdvancedStats(p: GoalieStatsReportParams): Promise<StatsApiResponse<GoalieAdvancedRow>> {
    return callReport<GoalieAdvancedRow>(p, "advanced");
}
export async function fetchGoalieBios(p: GoalieStatsReportParams): Promise<StatsApiResponse<GoalieBiosRow>> {
    return callReport<GoalieBiosRow>(p, "bios");
}
export async function fetchGoalieDaysRest(p: GoalieStatsReportParams): Promise<StatsApiResponse<GoalieDaysRestRow>> {
    return callReport<GoalieDaysRestRow>(p, "daysrest");
}
export async function fetchGoaliePenaltyShots(p: GoalieStatsReportParams): Promise<StatsApiResponse<GoaliePenaltyShotsRow>> {
    return callReport<GoaliePenaltyShotsRow>(p, "penaltyShots");
}
export async function fetchGoalieSavesByStrength(p: GoalieStatsReportParams): Promise<StatsApiResponse<GoalieSavesByStrengthRow>> {
    return callReport<GoalieSavesByStrengthRow>(p, "savesByStrength");
}
export async function fetchGoalieShootout(p: GoalieStatsReportParams): Promise<StatsApiResponse<GoalieShootoutRow>> {
    return callReport<GoalieShootoutRow>(p, "shootout");
}
export async function fetchGoalieStartedVsRelieved(p: GoalieStatsReportParams): Promise<StatsApiResponse<GoalieStartedVsRelievedRow>> {
    return callReport<GoalieStartedVsRelievedRow>(p, "startedVsRelieved");
}
export async function fetchGoalieTimeOnIce(p: GoalieStatsReportParams): Promise<StatsApiResponse<GoalieTimeOnIceRow>> {
    return callReport<GoalieTimeOnIceRow>(p, "timeonice");
}
export async function fetchAllGoalieStatsReports(p: GoalieStatsReportParams) {
    const [summary, advanced, daysRest, penaltyShots, savesByStrength, shootout, startedVsRelieved, toi] = await Promise.all([
        fetchGoalieSummary(p).then(r => r.data).catch(() => [] as GoalieSummaryRow[]),
        fetchGoalieAdvancedStats(p).then(r => r.data).catch(() => [] as GoalieAdvancedRow[]),
        fetchGoalieDaysRest(p).then(r => r.data).catch(() => [] as GoalieDaysRestRow[]),
        fetchGoaliePenaltyShots(p).then(r => r.data).catch(() => [] as GoaliePenaltyShotsRow[]),
        fetchGoalieSavesByStrength(p).then(r => r.data).catch(() => [] as GoalieSavesByStrengthRow[]),
        fetchGoalieShootout(p).then(r => r.data).catch(() => [] as GoalieShootoutRow[]),
        fetchGoalieStartedVsRelieved(p).then(r => r.data).catch(() => [] as GoalieStartedVsRelievedRow[]),
        fetchGoalieTimeOnIce(p).then(r => r.data).catch(() => [] as GoalieTimeOnIceRow[]),
    ]);
    return { summary, advanced, daysRest, penaltyShots, savesByStrength, shootout, startedVsRelieved, toi };
}