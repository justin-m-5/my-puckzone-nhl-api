// stats/get-skater-advanced-stats.ts

import { buildCayenneExp, fetchStatsReport, type SortDirection, type StatsApiResponse } from "./fetch-stats-report.js";

export const ADVANCED_REPORT_IDS = ["realtime", "timeonice", "faceoffs", "penalties", "powerplay", "penaltykill", "scoringrates", "shottype", "percentages"] as const;
export type SkaterAdvancedReport = (typeof ADVANCED_REPORT_IDS)[number];

export const SKATER_EDGE_REPORT_IDS = ["summary", "shottype"] as const;
export type SkaterEdgeReport = (typeof SKATER_EDGE_REPORT_IDS)[number];

export interface SkaterStatsReportParams {
    seasonId: number | string;
    gameTypeId: 2 | 3;
    teamAbbrev?: string;
    playerId?: number;
    positionCode?: "F" | "D";
    limit?: number;
    start?: number;
    sort?: string;
    dir?: SortDirection;
}

function buildSkaterCayenne(p: SkaterStatsReportParams): string {
    return buildCayenneExp([
        `seasonId=${p.seasonId}`,
        `gameTypeId=${p.gameTypeId}`,
        p.teamAbbrev ? `teamAbbrevs='${p.teamAbbrev.trim().toUpperCase()}'` : null,
        p.playerId ? `playerId=${p.playerId}` : null,
        p.positionCode === "D" ? `positionCode='D'` : null,
        p.positionCode === "F" ? `positionCode<>'D'` : null,
    ]);
}

function callReport<T>(p: SkaterStatsReportParams, report: string): Promise<StatsApiResponse<T>> {
    return fetchStatsReport<T>({
        entity: "skater", report,
        cayenneExp: buildSkaterCayenne(p),
        limit: p.limit ?? 100, start: p.start ?? 0,
        sort: p.sort, dir: p.dir,
    });
}

export interface SkaterRealtimeRow {
    blockedShots: number;
    blockedShotsPer60: number | null;
    emptyNetAssists: number;
    emptyNetGoals: number;
    emptyNetPoints: number;
    firstGoals: number;
    gamesPlayed: number;
    giveaways: number;
    giveawaysPer60: number | null;
    hits: number;
    hitsPer60: number | null;
    lastName: string;
    missedShotCrossbar: number;
    missedShotFailedBankAttempt: number;
    missedShotGoalpost: number;
    missedShotOverNet: number;
    missedShotShort: number;
    missedShotWideOfNet: number;
    missedShots: number;
    otGoals: number;
    playerId: number;
    positionCode: string;
    seasonId: number;
    shootsCatches: string;
    shotAttemptsBlocked: number;
    skaterFullName: string;
    takeaways: number;
    takeawaysPer60: number | null;
    teamAbbrevs: string;
    timeOnIcePerGame: number | null;
    totalShotAttempts: number;
}

export interface SkaterTimeOnIceRow {
    evTimeOnIce: number;
    evTimeOnIcePerGame: number | null;
    gamesPlayed: number;
    lastName: string;
    otTimeOnIce: number;
    otTimeOnIcePerOtGame: number | null;
    playerId: number;
    positionCode: string;
    ppTimeOnIce: number;
    ppTimeOnIcePerGame: number | null;
    seasonId: number;
    shTimeOnIce: number;
    shTimeOnIcePerGame: number | null;
    shifts: number;
    shiftsPerGame: number | null;
    shootsCatches: string;
    skaterFullName: string;
    teamAbbrevs: string;
    timeOnIce: number;
    timeOnIcePerGame: number | null;
    timeOnIcePerShift: number | null;
}

export interface SkaterFaceoffRow {
    playerId: number;
    skaterFullName: string;
    lastName: string;
    positionCode: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
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
    timeOnIcePerGame: number | null;
}

export interface SkaterPenaltyRow {
    playerId: number;
    skaterFullName: string;
    lastName: string;
    positionCode: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    penalties: number;
    penaltyMinutes: number;
    penaltyMinutesPerTimeOnIce: number | null;
    penaltySecondsPerGame: number | null;
    minorPenalties: number;
    majorPenalties: number;
    misconductPenalties: number;
    gameMisconductPenalties: number;
    matchPenalties: number;
    timeOnIcePerGame: number | null;
    netPenalties: number;
    netPenaltiesPer60: number | null;
    penaltiesDrawn: number;
    penaltiesDrawnPer60: number | null;
    penaltiesTakenPer60: number | null;
}

export interface SkaterPowerPlayRow {
    playerId: number;
    skaterFullName: string;
    lastName: string;
    positionCode: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    ppGoals: number;
    ppAssists: number;
    ppPoints: number;
    ppPrimaryAssists: number;
    ppSecondaryAssists: number;
    ppGoalsPer60: number | null;
    ppPrimaryAssistsPer60: number | null;
    ppSecondaryAssistsPer60: number | null;
    ppPointsPer60: number | null;
    ppGoalsForPer60: number | null;
    ppShots: number;
    ppShootingPct: number | null;
    ppShotsPer60: number | null;
    ppIndividualSatFor: number;
    ppIndividualSatForPer60: number | null;
    ppTimeOnIce: number;
    ppTimeOnIcePctPerGame: number | null;
    ppTimeOnIcePerGame: number | null;
}

export interface SkaterPenaltyKillRow {
    playerId: number;
    skaterFullName: string;
    lastName: string;
    positionCode: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    shGoals: number;
    shAssists: number;
    shPoints: number;
    shPrimaryAssists: number;
    shSecondaryAssists: number;
    shGoalsPer60: number | null;
    shAssistsPer60: number | null;
    shPointsPer60: number | null;
    shPrimaryAssistsPer60: number | null;
    shSecondaryAssistsPer60: number | null;
    shShootingPct: number | null;
    shShots: number;
    shShotsPer60: number | null;
    shIndividualSatFor: number;
    shIndividualSatForPer60: number | null;
    shTimeOnIce: number;
    shTimeOnIcePerGame: number | null;
    shTimeOnIcePctPerGame: number | null;
    shTimeOnIcePct: number | null;
    ppGoalsAgainstPer60: number | null;
}

export interface SkaterScoringRatesRow {
    playerId: number;
    skaterFullName: string;
    lastName: string;
    positionCode: string;
    teamAbbrevs: string;
    seasonId: number;
    gamesPlayed: number;
    goals5v5: number;
    assists5v5: number;
    points5v5: number;
    goalsPer605v5: number | null;
    assistsPer605v5: number | null;
    pointsPer605v5: number | null;
    primaryAssists5v5: number;
    primaryAssistsPer605v5: number | null;
    secondaryAssists5v5: number;
    secondaryAssistsPer605v5: number | null;
    timeOnIcePerGame5v5: number | null;
    netMinorPenaltiesPer60: number | null;
    offensiveZoneStartPct5v5: number | null;
    onIceShootingPct5v5: number | null;
    shootingPct5v5: number | null;
    satPct: number | null;
    satRelative5v5: number | null;
}

export interface SkaterSummaryRow {
    playerId: number;
    skaterFullName: string;
    lastName: string;
    positionCode: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    penaltyMinutes: number;
    ppGoals: number;
    ppPoints: number;
    shGoals: number;
    shPoints: number;
    shots: number;
    shootingPctg: number | null;
    gameWinningGoals: number;
    otGoals: number;
    timeOnIcePerGame: number | null;
}

export interface SkaterShotTypeRow {
    playerId: number;
    skaterFullName: string;
    lastName: string;
    positionCode: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    goals: number;
    shots: number;
    shootingPct: number | null;
    shotsOnNetBackhand: number;
    shootingPctBackhand: number | null;
    goalsBackhand: number;
    shotsOnNetBat: number;
    shootingPctBat: number | null;
    goalsBat: number;
    shotsOnNetBetweenLegs: number;
    shootingPctBetweenLegs: number | null;
    goalsBetweenLegs: number;
    shotsOnNetCradle: number;
    shootingPctCradle: number | null;
    goalsCradle: number;
    shotsOnNetDeflected: number;
    shootingPctDeflected: number | null;
    goalsDeflected: number;
    shotsOnNetPoke: number;
    shootingPctPoke: number | null;
    goalsPoke: number;
    shotsOnNetSlap: number;
    shootingPctSlap: number | null;
    goalsSlap: number;
    shotsOnNetSnap: number;
    shootingPctSnap: number | null;
    goalsSnap: number;
    shotsOnNetTipIn: number;
    shootingPctTipIn: number | null;
    goalsTipIn: number;
    shotsOnNetWrapAround: number;
    shootingPctWrapAround: number | null;
    goalsWrapAround: number;
    shotsOnNetWrist: number;
    shootingPctWrist: number | null;
    goalsWrist: number;
    timeOnIcePerGame: number | null;
}

export interface SkaterPercentagesRow {
    playerId: number;
    skaterFullName: string;
    lastName: string;
    positionCode: string;
    teamAbbrevs: string;
    gamesPlayed: number;
    seasonId: number;
    zoneStartPct5v5: number | null;
    satPercentage: number | null;
    usatPercentage: number | null;
    satPctRel: number | null;
    satAgainst: number;
    satPercentageAhead: number;
    satPercentageBehind: number;
    satPercentageClose: number;
    satPercentageFor: number;
    satPercentageTied: number;
    usatPercentageAhead: number;
    usatPercentageBehind: number;
    usatPrecentageClose: number;
    usatPercentageFor: number;
    usatPercentageTied: number;
    satRelative: number | null;
    usatRelative: number | null;
    shootingPct5v5: number | null;
    skaterShootingPlusSavePct5v5: number | null;
    skaterSavePct5v5: number | null;
    timeOnIcePerGame5v5: number | null;
}

export async function fetchSkaterRealtimeStats(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterRealtimeRow>> {
    return callReport<SkaterRealtimeRow>(p, "realtime");
}
export async function fetchSkaterTimeOnIceStats(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterTimeOnIceRow>> {
    return callReport<SkaterTimeOnIceRow>(p, "timeonice");
}
export async function fetchSkaterFaceoffStats(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterFaceoffRow>> {
    return callReport<SkaterFaceoffRow>(p, "faceoffpercentages");
}
export async function fetchSkaterPenaltyStats(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterPenaltyRow>> {
    return callReport<SkaterPenaltyRow>(p, "penalties");
}
export async function fetchSkaterPowerPlayStats(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterPowerPlayRow>> {
    return callReport<SkaterPowerPlayRow>(p, "powerplay");
}
export async function fetchSkaterPenaltyKillStats(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterPenaltyKillRow>> {
    return callReport<SkaterPenaltyKillRow>(p, "penaltykill");
}
export async function fetchSkaterSummary(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterSummaryRow>> {
    return callReport<SkaterSummaryRow>(p, "summary");
}
export async function fetchSkaterScoringRates(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterScoringRatesRow>> {
    return callReport<SkaterScoringRatesRow>(p, "scoringRates");
}
export async function fetchSkaterShotTypeStats(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterShotTypeRow>> {
    return callReport<SkaterShotTypeRow>(p, "shottype");
}
export async function fetchSkaterPercentages(p: SkaterStatsReportParams): Promise<StatsApiResponse<SkaterPercentagesRow>> {
    return callReport<SkaterPercentagesRow>(p, "percentages");
}

export async function fetchSkaterAdvancedStats(p: SkaterStatsReportParams) {
    const [realtime, toi] = await Promise.all([
        fetchSkaterRealtimeStats(p).then(r => r.data).catch(() => [] as SkaterRealtimeRow[]),
        fetchSkaterTimeOnIceStats(p).then(r => r.data).catch(() => [] as SkaterTimeOnIceRow[]),
    ]);
    return { realtime, toi };
}

export async function fetchAllSkaterStatsReports(p: SkaterStatsReportParams) {
    const [{ realtime, toi }, faceoff, penalty, powerplay, penaltykill, rates, shottype, percentages] = await Promise.all([
        fetchSkaterAdvancedStats(p).catch(() => ({ realtime: [] as SkaterRealtimeRow[], toi: [] as SkaterTimeOnIceRow[] })),
        fetchSkaterFaceoffStats(p).then(r => r.data).catch(() => [] as SkaterFaceoffRow[]),
        fetchSkaterPenaltyStats(p).then(r => r.data).catch(() => [] as SkaterPenaltyRow[]),
        fetchSkaterPowerPlayStats(p).then(r => r.data).catch(() => [] as SkaterPowerPlayRow[]),
        fetchSkaterPenaltyKillStats(p).then(r => r.data).catch(() => [] as SkaterPenaltyKillRow[]),
        fetchSkaterScoringRates(p).then(r => r.data).catch(() => [] as SkaterScoringRatesRow[]),
        fetchSkaterShotTypeStats(p).then(r => r.data).catch(() => [] as SkaterShotTypeRow[]),
        fetchSkaterPercentages(p).then(r => r.data).catch(() => [] as SkaterPercentagesRow[]),
    ]);
    return { realtime, toi, faceoff, penalty, powerplay, penaltykill, rates, shottype, percentages };
}