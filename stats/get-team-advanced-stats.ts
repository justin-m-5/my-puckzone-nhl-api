// stats/get-team-advanced-stats.ts

import { buildCayenneExp, fetchStatsReport, type SortDirection, type StatsApiResponse } from "./fetch-stats-report.js";

export interface TeamStatsReportParams {
    seasonId: number | string;
    gameTypeId: 2 | 3;
    teamId?: number;
    limit?: number;
    start?: number;
    sort?: string;
    dir?: SortDirection;
}

function buildTeamCayenne(p: TeamStatsReportParams): string {
    return buildCayenneExp([
        `seasonId=${p.seasonId}`,
        `gameTypeId=${p.gameTypeId}`,
        p.teamId ? `teamId=${p.teamId}` : null,
    ]);
}

function callReport<T>(p: TeamStatsReportParams, report: string): Promise<StatsApiResponse<T>> {
    return fetchStatsReport<T>({
        entity: "team", report,
        cayenneExp: buildTeamCayenne(p),
        limit: p.limit ?? 32, start: p.start ?? 0,
        sort: p.sort, dir: p.dir,
    });
}

export interface FetchTeamAdvancedStatsParams extends TeamStatsReportParams {
    teamId: number;
}

export interface TeamSummaryRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    otLosses: number | null;
    ties: number | null;
    points: number;
    pointPct: number | null;
    goalsFor: number;
    goalsAgainst: number;
    goalsForPerGame: number | null;
    goalsAgainstPerGame: number | null;
    powerPlayPct: number | null;
    ppGoalsFor: number | null;
    ppOpportunities: number | null;
    penaltyKillPct: number | null;
    ppGoalsAgainst: number | null;
    timesShorthanded: number | null;
    shotsForPerGame: number | null;
    shotsAgainstPerGame: number | null;
    faceoffWinPct: number | null;
    shootingPct: number | null;
    savePct: number | null;
    penaltyKillNetPct: number | null;
    powerPlayNetPct: number | null;
    penaltyMinutesPerGame: number | null;
    winsInRegulation: number;
    winsInShootout: number;
    winsInOt: number | null;
    regulationAndOtWins: number;
    teamShutouts: number;
}

export interface TeamPercentagesRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    points: number;
    pointPct: number | null;
    goalsForPct: number | null;
    satPct: number | null;
    satPctAhead: number | null;
    satPctBehind: number | null;
    satPctClose: number | null;
    satPctTied: number | null;
    usatPct: number | null;
    usatPctAhead: number | null;
    usatPctBehind: number | null;
    usatPctClose: number | null;
    usatPctTied: number | null;
    shootingPct5v5: number | null;
    savePct5v5: number | null;
    shootingPlusSavePct5v5: number | null;
    zoneStartPct5v5: number | null;
}

export interface TeamRealtimeRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    hits: number;
    hitsPer60: number | null;
    blockedShots: number;
    blockedShotsPer60: number | null;
    shotAttemptsBlocked: number;
    missedShots: number;
    giveaways: number;
    giveawaysPer60: number | null;
    takeaways: number;
    takeawaysPer60: number | null;
    totalShotAttempts: number;
    shots: number;
    satPct: number | null;
    emptyNetGoals: number;
    timeOnIcePerGame5v5: number | null;
}

export interface TeamFaceoffRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    totalFaceoffs: number;
    faceoffWinPct: number | null;
    evFaceoffs: number;
    evFaceoffPct: number | null;
    ppFaceoffs: number;
    ppFaceoffPct: number | null;
    shFaceoffs: number;
    shFaceoffPct: number | null;
    offensiveZoneFaceoffs: number;
    offensiveZoneFaceoffPct: number | null;
    defensiveZoneFaceoffs: number;
    defensiveZoneFaceoffPct: number | null;
    neutralZoneFaceoffs: number;
    neutralZoneFaceoffPct: number | null;
}

export interface TeamPowerPlayRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    powerPlayPct: number | null;
    ppNetGoals: number;
    ppOpportunities: number;
    ppGoalsPerGame: number | null;
    ppOpportunitiesPerGame: number | null;
    ppTimeOnIce: number;
    ppTimeOnIcePerGame: number | null;
    powerPlayNetPct: number | null;
    shGoalsAgainst: number | null;
    shGoalsAgainstPerGame: number | null;
}

export interface TeamPenaltyKillRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    penaltyKillPct: number | null;
    ppGoalsAgainst: number;
    timesShorthanded: number;
    ppGoalsAgainstPerGame: number | null;
    timesShorthandedPerGame: number | null;
    shGoalsFor: number;
    shShotsFor: number;
    pkTimeOnIce: number;
    pkTimeOnIcePerGame: number | null;
    penaltyKillNetPct: number | null;
}

export interface TeamScoringRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    goalsFor: number;
    goalsAgainst: number;
    period1GoalsFor: number;
    period2GoalsFor: number;
    period3GoalsFor: number;
    periodOtGoalsFor: number;
    period1GoalsAgainst: number;
    period2GoalsAgainst: number;
    period3GoalsAgainst: number;
    periodOtGoalsAgainst: number;
    evGoalsFor: number;
    ppGoalsFor: number;
    shGoalsFor: number;
    wins: number;
    losses: number;
    otLosses: number | null;
    points: number;
    pointPct: number | null;
    ties: number | null;
}

export interface TeamShotTypeRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    goalsFor: number;
    shotsOnNet: number;
    shootingPct: number | null;
    goalsBackhand: number;
    shotsOnNetBackhand: number;
    shootingPctBackhand: number | null;
    goalsDeflected: number;
    shotsOnNetDeflected: number;
    shootingPctDeflected: number | null;
    goalsSlap: number;
    shotsOnNetSlap: number;
    shootingPctSlap: number | null;
    goalsSnap: number;
    shotsOnNetSnap: number;
    shootingPctSnap: number | null;
    goalsTipIn: number;
    shotsOnNetTipIn: number;
    shootingPctTipIn: number | null;
    goalsWrist: number;
    shotsOnNetWrist: number;
    shootingPctWrist: number | null;
    goalsWrapAround: number;
    shotsOnNetWrapAround: number;
    shootingPctWrapAround: number | null;
}

export interface TeamGoalsForByStrengthRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    goalsFor: number;
    goalsAgainst: number;
    goalsForPerGame: number | null;
    goalsFor5On5: number;
    goalsFor5On4: number;
    goalsFor5On3: number;
    goalsFor4On5: number;
    goalsFor4On4: number;
    goalsFor4On3: number;
    goalsFor3On5: number;
    goalsFor3On4: number;
    goalsFor3On3: number;
    goalsForEmptyNet: number;
    goalsForExtraAttacker: number;
    goalsForPenaltyShots: number;
}

export interface TeamGoalsAgainstByStrengthRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    goalsFor: number;
    goalsAgainst: number;
    goalsAgainstPerGame: number | null;
    goalsAgainst5On5: number;
    goalsAgainst5On4: number;
    goalsAgainst5On3: number;
    goalsAgainst4On5: number;
    goalsAgainst4On4: number;
    goalsAgainst4On3: number;
    goalsAgainst3On5: number;
    goalsAgainst3On4: number;
    goalsAgainst3On3: number;
    goalsAgainstEmptyNet: number;
    goalsAgainstExtraAttacker: number;
    goalsAgainstPenaltyShots: number;
}

export interface TeamDaysBetweenGamesRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    daysRest: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    otLosses: number | null;
    ties: number | null;
    points: number;
    pointPct: number | null;
    goalsForPerGame: number | null;
    goalsAgainstPerGame: number | null;
    netGoalsPerGame: number | null;
    shotsForPerGame: number | null;
    shotsAgainstPerGame: number | null;
    shotDifferentialPerGame: number | null;
    powerPlayPct: number | null;
    penaltyKillPct: number | null;
    faceoffWinPct: number | null;
    ppOpportunitiesPerGame: number | null;
    timesShorthandedPerGame: number | null;
}

export interface TeamLeadingTrailingRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    pointPct: number | null;
    period1GoalsFor: number;
    period1GoalsAgainst: number;
    period2GoalsFor: number;
    period2GoalsAgainst: number;
    winsLeadPeriod1: number;
    winsLeadPeriod2: number;
    winsTrailPeriod1: number;
    winsTrailPeriod2: number;
    lossLeadPeriod1: number;
    lossLeadPeriod2: number;
    lossTrailPeriod1: number;
    lossTrailPeriod2: number;
    otLossLeadPeriod1: number;
    otLossLeadPeriod2: number;
    otLossTrailPeriod1: number;
    otLossTrailPeriod2: number;
    tiesLeadPeriod1: number;
    tiesLeadPeriod2: number;
    tiesTrailPeriod1: number;
    tiesTrailPeriod2: number;
    winPctLeadPeriod1: number | null;
    winPctLeadPeriod2: number | null;
    winPctTrailPeriod1: number | null;
    winPctTrailPeriod2: number | null;
}

export interface TeamOutshootOutshotByRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    otLosses: number;
    ties: number | null;
    points: number;
    pointPct: number | null;
    shotsForPerGame: number | null;
    shotsAgainstPerGame: number | null;
    netShotsPerGame: number | null;
    winsOutshootOpponent: number;
    winsOutshotByOpponent: number;
    winsEvenShots: number;
    lossesOutshootOpponent: number;
    lossesOutshotByOpponent: number;
    lossesEvenShots: number;
    otLossesOutshootOpponent: number;
    otLossesOutshotByOpponent: number;
    otLossesEvenShots: number;
    tiesOutshootOpponent: number;
    tiesOutshotByOpponent: number;
    tiesEvenShots: number;
}

export interface TeamPenaltiesRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    otLosses: number;
    ties: number | null;
    points: number;
    penalties: number;
    penaltyMinutes: number;
    penaltySecondsPerGame: number | null;
    minors: number;
    majors: number;
    misconducts: number;
    gameMisconducts: number;
    matchPenalties: number;
    benchMinorPenalties: number;
    penaltiesTakenPer60: number | null;
    totalPenaltiesDrawn: number;
    penaltiesDrawnPer60: number | null;
    netPenalties: number;
    netPenaltiesPer60: number | null;
}

export interface TeamSummaryShootingRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    satFor: number;
    satAgainst: number;
    satTotal: number;
    satAhead: number;
    satBehind: number;
    satClose: number;
    satTied: number;
    usatFor: number;
    usatAgainst: number;
    usatTotal: number;
    usatAhead: number;
    usatBehind: number;
    usatClose: number;
    usatTied: number;
    shots5v5: number;
}

export interface TeamSavePercentageRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    otLosses: number;
    ties: number | null;
    points: number;
    pointPct: number | null;
    shotsAgainst: number;
    saves: number;
    savePct: number | null;
    goalsAgainst: number;
    goalieGoalsAgainst: number;
    emptyNetGoalsAgainst: number;
    goalsAgainstAverage: number | null;
    goalsAgainstPerGame: number | null;
    shutouts: number;
    timeOnIce: number;
}

export interface TeamScoreTrailFirstRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    otLosses: number;
    ties: number | null;
    points: number;
    scoringFirstGamesPlayed: number;
    winsScoringFirst: number;
    lossesScoringFirst: number;
    otLossesScoringFirst: number;
    tiesScoringFirst: number;
    winPctScoringFirst: number | null;
    trailingFirstGamesPlayed: number;
    winsTrailingFirst: number;
    lossesTrailingFirst: number;
    otLossesTrailingFirst: number;
    tiesTrailingFirst: number;
    winPctTrailingFirst: number | null;
}

export interface TeamGoalGamesRow {
    teamId: number;
    teamFullName: string;
    seasonId: number;
    gamesPlayed: number;
    wins: number;
    losses: number;
    otLosses: number;
    ties: number;
    points: number;
    pointPct: number | null;
    winsOneGoalGames: number;
    winsTwoGoalGames: number;
    winsThreeGoalGames: number;
    lossesOneGoalGames: number;
    lossesTwoGoalGames: number;
    lossesThreeGoalGames: number;
    otLossesOneGoalGames: number;
    winPctOneGoalGames: number | null;
    winPctTwoGoalGames: number | null;
    winPctThreeGoalGames: number | null;
}

export async function fetchTeamSummary(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamSummaryRow>> {
    return callReport<TeamSummaryRow>(p, "summary");
}

export async function fetchTeamPercentages(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamPercentagesRow>> {
    return callReport<TeamPercentagesRow>(p, "percentages");
}

export async function fetchTeamRealtime(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamRealtimeRow>> {
    return callReport<TeamRealtimeRow>(p, "realtime");
}

export async function fetchTeamFaceoff(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamFaceoffRow>> {
    return callReport<TeamFaceoffRow>(p, "faceoffpercentages");
}

export async function fetchTeamPowerPlay(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamPowerPlayRow>> {
    return callReport<TeamPowerPlayRow>(p, "powerplay");
}

export async function fetchTeamPenaltyKill(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamPenaltyKillRow>> {
    return callReport<TeamPenaltyKillRow>(p, "penaltykill");
}

export async function fetchTeamScoring(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamScoringRow>> {
    return callReport<TeamScoringRow>(p, "goalsbyperiod");
}

export async function fetchTeamShotType(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamShotTypeRow>> {
    return callReport<TeamShotTypeRow>(p, "shottype");
}

export async function fetchTeamGoalsForByStrength(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamGoalsForByStrengthRow>> {
    return callReport<TeamGoalsForByStrengthRow>(p, "goalsforbystrength");
}

export async function fetchTeamGoalsAgainstByStrength(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamGoalsAgainstByStrengthRow>> {
    return callReport<TeamGoalsAgainstByStrengthRow>(p, "goalsagainstbystrength");
}

export async function fetchTeamDaysBetweenGames(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamDaysBetweenGamesRow>> {
    return callReport<TeamDaysBetweenGamesRow>(p, "daysbetweengames");
}

export async function fetchTeamLeadingTrailing(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamLeadingTrailingRow>> {
    return callReport<TeamLeadingTrailingRow>(p, "leadingtrailing");
}

export async function fetchTeamOutshootOutshotBy(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamOutshootOutshotByRow>> {
    return callReport<TeamOutshootOutshotByRow>(p, "outshootoutshotby");
}

export async function fetchTeamPenalties(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamPenaltiesRow>> {
    return callReport<TeamPenaltiesRow>(p, "penalties");
}

export async function fetchTeamSummaryShooting(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamSummaryShootingRow>> {
    return callReport<TeamSummaryShootingRow>(p, "summaryshooting");
}

export async function fetchTeamSavePercentage(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamSavePercentageRow>> {
    return callReport<TeamSavePercentageRow>(p, "savePercentage");
}

export async function fetchTeamScoreTrailFirst(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamScoreTrailFirstRow>> {
    return callReport<TeamScoreTrailFirstRow>(p, "scoretrailfirst");
}

export async function fetchTeamGoalGames(p: TeamStatsReportParams): Promise<StatsApiResponse<TeamGoalGamesRow>> {
    return callReport<TeamGoalGamesRow>(p, "goalgames");
}

export async function fetchTeamAdvancedStats(p: FetchTeamAdvancedStatsParams) {
    const [percentages, realtime, faceoff] = await Promise.all([
        fetchTeamPercentages(p).then(r => r.data[0] ?? null).catch(() => null),
        fetchTeamRealtime(p).then(r => r.data[0] ?? null).catch(() => null),
        fetchTeamFaceoff(p).then(r => r.data[0] ?? null).catch(() => null),
    ]);
    return { percentages, realtime, faceoff };
}

export async function fetchAllTeamStatsReports(p: TeamStatsReportParams) {
    const [summary, percentages, realtime, faceoff, powerplay, penaltykill, scoring, shottype,
        goalsForByStrength, goalsAgainstByStrength, daysBetweenGames, leadingTrailing, outshootOutshotBy,
        penalties, summaryShooting, savePercentage, scoreTrailFirst, goalGames,
    ] = await Promise.all([
        fetchTeamSummary(p).then(r => r.data).catch(() => [] as TeamSummaryRow[]),
        fetchTeamPercentages(p).then(r => r.data).catch(() => [] as TeamPercentagesRow[]),
        fetchTeamRealtime(p).then(r => r.data).catch(() => [] as TeamRealtimeRow[]),
        fetchTeamFaceoff(p).then(r => r.data).catch(() => [] as TeamFaceoffRow[]),
        fetchTeamPowerPlay(p).then(r => r.data).catch(() => [] as TeamPowerPlayRow[]),
        fetchTeamPenaltyKill(p).then(r => r.data).catch(() => [] as TeamPenaltyKillRow[]),
        fetchTeamScoring(p).then(r => r.data).catch(() => [] as TeamScoringRow[]),
        fetchTeamShotType(p).then(r => r.data).catch(() => [] as TeamShotTypeRow[]),
        fetchTeamGoalsForByStrength(p).then(r => r.data).catch(() => [] as TeamGoalsForByStrengthRow[]),
        fetchTeamGoalsAgainstByStrength(p).then(r => r.data).catch(() => [] as TeamGoalsAgainstByStrengthRow[]),
        fetchTeamDaysBetweenGames(p).then(r => r.data).catch(() => [] as TeamDaysBetweenGamesRow[]),
        fetchTeamLeadingTrailing(p).then(r => r.data).catch(() => [] as TeamLeadingTrailingRow[]),
        fetchTeamOutshootOutshotBy(p).then(r => r.data).catch(() => [] as TeamOutshootOutshotByRow[]),
        fetchTeamPenalties(p).then(r => r.data).catch(() => [] as TeamPenaltiesRow[]),
        fetchTeamSummaryShooting(p).then(r => r.data).catch(() => [] as TeamSummaryShootingRow[]),
        fetchTeamSavePercentage(p).then(r => r.data).catch(() => [] as TeamSavePercentageRow[]),
        fetchTeamScoreTrailFirst(p).then(r => r.data).catch(() => [] as TeamScoreTrailFirstRow[]),
        fetchTeamGoalGames(p).then(r => r.data).catch(() => [] as TeamGoalGamesRow[]),
    ]);
    return {
        summary, percentages, realtime, faceoff, powerplay, penaltykill, scoring, shottype,
        goalsForByStrength, goalsAgainstByStrength, daysBetweenGames, leadingTrailing,
        outshootOutshotBy, penalties, summaryShooting, savePercentage, scoreTrailFirst, goalGames,
    };
}

