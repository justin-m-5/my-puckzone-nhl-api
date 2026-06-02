// stats/get-team-advanced-stats.ts
import { buildCayenneExp, fetchStatsReport } from "./fetch-stats-report.js";
function buildTeamCayenne(p) {
    return buildCayenneExp([
        `seasonId=${p.seasonId}`,
        `gameTypeId=${p.gameTypeId}`,
        p.teamId ? `teamId=${p.teamId}` : null,
    ]);
}
function callReport(p, report) {
    return fetchStatsReport({
        entity: "team", report,
        cayenneExp: buildTeamCayenne(p),
        limit: p.limit ?? 32, start: p.start ?? 0,
        sort: p.sort, dir: p.dir,
    });
}
export async function fetchTeamSummary(p) {
    return callReport(p, "summary");
}
export async function fetchTeamPercentages(p) {
    return callReport(p, "percentages");
}
export async function fetchTeamRealtime(p) {
    return callReport(p, "realtime");
}
export async function fetchTeamFaceoff(p) {
    return callReport(p, "faceoffpercentages");
}
export async function fetchTeamPowerPlay(p) {
    return callReport(p, "powerplay");
}
export async function fetchTeamPenaltyKill(p) {
    return callReport(p, "penaltykill");
}
export async function fetchTeamScoring(p) {
    return callReport(p, "goalsbyperiod");
}
export async function fetchTeamShotType(p) {
    return callReport(p, "shottype");
}
export async function fetchTeamGoalsForByStrength(p) {
    return callReport(p, "goalsforbystrength");
}
export async function fetchTeamGoalsAgainstByStrength(p) {
    return callReport(p, "goalsagainstbystrength");
}
export async function fetchTeamDaysBetweenGames(p) {
    return callReport(p, "daysbetweengames");
}
export async function fetchTeamLeadingTrailing(p) {
    return callReport(p, "leadingtrailing");
}
export async function fetchTeamOutshootOutshotBy(p) {
    return callReport(p, "outshootoutshotby");
}
export async function fetchTeamPenalties(p) {
    return callReport(p, "penalties");
}
export async function fetchTeamSummaryShooting(p) {
    return callReport(p, "summaryshooting");
}
export async function fetchTeamSavePercentage(p) {
    return callReport(p, "savePercentage");
}
export async function fetchTeamScoreTrailFirst(p) {
    return callReport(p, "scoretrailfirst");
}
export async function fetchTeamGoalGames(p) {
    return callReport(p, "goalgames");
}
export async function fetchTeamAdvancedStats(p) {
    const [percentages, realtime, faceoff] = await Promise.all([
        fetchTeamPercentages(p).then(r => r.data[0] ?? null).catch(() => null),
        fetchTeamRealtime(p).then(r => r.data[0] ?? null).catch(() => null),
        fetchTeamFaceoff(p).then(r => r.data[0] ?? null).catch(() => null),
    ]);
    return { percentages, realtime, faceoff };
}
export async function fetchAllTeamStatsReports(p) {
    const [summary, percentages, realtime, faceoff, powerplay, penaltykill, scoring, shottype, goalsForByStrength, goalsAgainstByStrength, daysBetweenGames, leadingTrailing, outshootOutshotBy, penalties, summaryShooting, savePercentage, scoreTrailFirst, goalGames,] = await Promise.all([
        fetchTeamSummary(p).then(r => r.data).catch(() => []),
        fetchTeamPercentages(p).then(r => r.data).catch(() => []),
        fetchTeamRealtime(p).then(r => r.data).catch(() => []),
        fetchTeamFaceoff(p).then(r => r.data).catch(() => []),
        fetchTeamPowerPlay(p).then(r => r.data).catch(() => []),
        fetchTeamPenaltyKill(p).then(r => r.data).catch(() => []),
        fetchTeamScoring(p).then(r => r.data).catch(() => []),
        fetchTeamShotType(p).then(r => r.data).catch(() => []),
        fetchTeamGoalsForByStrength(p).then(r => r.data).catch(() => []),
        fetchTeamGoalsAgainstByStrength(p).then(r => r.data).catch(() => []),
        fetchTeamDaysBetweenGames(p).then(r => r.data).catch(() => []),
        fetchTeamLeadingTrailing(p).then(r => r.data).catch(() => []),
        fetchTeamOutshootOutshotBy(p).then(r => r.data).catch(() => []),
        fetchTeamPenalties(p).then(r => r.data).catch(() => []),
        fetchTeamSummaryShooting(p).then(r => r.data).catch(() => []),
        fetchTeamSavePercentage(p).then(r => r.data).catch(() => []),
        fetchTeamScoreTrailFirst(p).then(r => r.data).catch(() => []),
        fetchTeamGoalGames(p).then(r => r.data).catch(() => []),
    ]);
    return {
        summary, percentages, realtime, faceoff, powerplay, penaltykill, scoring, shottype,
        goalsForByStrength, goalsAgainstByStrength, daysBetweenGames, leadingTrailing,
        outshootOutshotBy, penalties, summaryShooting, savePercentage, scoreTrailFirst, goalGames,
    };
}
//# sourceMappingURL=get-team-advanced-stats.js.map