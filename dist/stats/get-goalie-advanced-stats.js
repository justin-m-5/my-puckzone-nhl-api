// stats/get-goalie-advanced-stats.ts
import { buildCayenneExp, fetchStatsReport } from "./fetch-stats-report.js";
export const GOALIE_ADVANCED_REPORT_IDS = ["summary", "advanced", "bios", "savesByStrength", "startedVsRelieved", "daysRest"];
export const GOALIE_EDGE_REPORT_IDS = ["timeonice", "shootout", "penaltyShots"];
function buildGoalieCayenne(p) {
    return buildCayenneExp([
        `seasonId=${p.seasonId}`,
        `gameTypeId=${p.gameTypeId}`,
        p.teamAbbrev ? `teamAbbrevs='${p.teamAbbrev.trim().toUpperCase()}'` : null,
        p.playerId ? `playerId=${p.playerId}` : null,
    ]);
}
function callReport(p, report) {
    return fetchStatsReport({
        entity: "goalie", report,
        cayenneExp: buildGoalieCayenne(p),
        limit: p.limit ?? 20, start: p.start ?? 0,
        sort: p.sort, dir: p.dir,
    });
}
export async function fetchGoalieSummary(p) {
    return callReport(p, "summary");
}
export async function fetchGoalieAdvancedStats(p) {
    return callReport(p, "advanced");
}
export async function fetchGoalieBios(p) {
    return callReport(p, "bios");
}
export async function fetchGoalieDaysRest(p) {
    return callReport(p, "daysrest");
}
export async function fetchGoaliePenaltyShots(p) {
    return callReport(p, "penaltyShots");
}
export async function fetchGoalieSavesByStrength(p) {
    return callReport(p, "savesByStrength");
}
export async function fetchGoalieShootout(p) {
    return callReport(p, "shootout");
}
export async function fetchGoalieStartedVsRelieved(p) {
    return callReport(p, "startedVsRelieved");
}
export async function fetchGoalieTimeOnIce(p) {
    return callReport(p, "timeonice");
}
export async function fetchAllGoalieStatsReports(p) {
    const [summary, advanced, daysRest, penaltyShots, savesByStrength, shootout, startedVsRelieved, toi] = await Promise.all([
        fetchGoalieSummary(p).then(r => r.data).catch(() => []),
        fetchGoalieAdvancedStats(p).then(r => r.data).catch(() => []),
        fetchGoalieDaysRest(p).then(r => r.data).catch(() => []),
        fetchGoaliePenaltyShots(p).then(r => r.data).catch(() => []),
        fetchGoalieSavesByStrength(p).then(r => r.data).catch(() => []),
        fetchGoalieShootout(p).then(r => r.data).catch(() => []),
        fetchGoalieStartedVsRelieved(p).then(r => r.data).catch(() => []),
        fetchGoalieTimeOnIce(p).then(r => r.data).catch(() => []),
    ]);
    return { summary, advanced, daysRest, penaltyShots, savesByStrength, shootout, startedVsRelieved, toi };
}
//# sourceMappingURL=get-goalie-advanced-stats.js.map