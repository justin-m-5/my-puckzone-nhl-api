// stats/get-skater-advanced-stats.ts
import { buildCayenneExp, fetchStatsReport } from "./fetch-stats-report.js";
export const ADVANCED_REPORT_IDS = ["realtime", "timeonice", "faceoffs", "penalties", "powerplay", "penaltykill", "scoringrates", "shottype", "percentages"];
export const SKATER_EDGE_REPORT_IDS = ["summary", "shottype"];
function buildSkaterCayenne(p) {
    return buildCayenneExp([
        `seasonId=${p.seasonId}`,
        `gameTypeId=${p.gameTypeId}`,
        p.teamAbbrev ? `teamAbbrevs='${p.teamAbbrev.trim().toUpperCase()}'` : null,
        p.playerId ? `playerId=${p.playerId}` : null,
        p.positionCode === "D" ? `positionCode='D'` : null,
        p.positionCode === "F" ? `positionCode<>'D'` : null,
    ]);
}
function callReport(p, report) {
    return fetchStatsReport({
        entity: "skater", report,
        cayenneExp: buildSkaterCayenne(p),
        limit: p.limit ?? 100, start: p.start ?? 0,
        sort: p.sort, dir: p.dir,
    });
}
export async function fetchSkaterRealtimeStats(p) {
    return callReport(p, "realtime");
}
export async function fetchSkaterTimeOnIceStats(p) {
    return callReport(p, "timeonice");
}
export async function fetchSkaterFaceoffStats(p) {
    return callReport(p, "faceoffpercentages");
}
export async function fetchSkaterPenaltyStats(p) {
    return callReport(p, "penalties");
}
export async function fetchSkaterPowerPlayStats(p) {
    return callReport(p, "powerplay");
}
export async function fetchSkaterPenaltyKillStats(p) {
    return callReport(p, "penaltykill");
}
export async function fetchSkaterSummary(p) {
    return callReport(p, "summary");
}
export async function fetchSkaterScoringRates(p) {
    return callReport(p, "scoringRates");
}
export async function fetchSkaterShotTypeStats(p) {
    return callReport(p, "shottype");
}
export async function fetchSkaterPercentages(p) {
    return callReport(p, "percentages");
}
export async function fetchSkaterAdvancedStats(p) {
    const [realtime, toi] = await Promise.all([
        fetchSkaterRealtimeStats(p).then(r => r.data).catch(() => []),
        fetchSkaterTimeOnIceStats(p).then(r => r.data).catch(() => []),
    ]);
    return { realtime, toi };
}
export async function fetchAllSkaterStatsReports(p) {
    const [{ realtime, toi }, faceoff, penalty, powerplay, penaltykill, rates, shottype, percentages] = await Promise.all([
        fetchSkaterAdvancedStats(p).catch(() => ({ realtime: [], toi: [] })),
        fetchSkaterFaceoffStats(p).then(r => r.data).catch(() => []),
        fetchSkaterPenaltyStats(p).then(r => r.data).catch(() => []),
        fetchSkaterPowerPlayStats(p).then(r => r.data).catch(() => []),
        fetchSkaterPenaltyKillStats(p).then(r => r.data).catch(() => []),
        fetchSkaterScoringRates(p).then(r => r.data).catch(() => []),
        fetchSkaterShotTypeStats(p).then(r => r.data).catch(() => []),
        fetchSkaterPercentages(p).then(r => r.data).catch(() => []),
    ]);
    return { realtime, toi, faceoff, penalty, powerplay, penaltykill, rates, shottype, percentages };
}
//# sourceMappingURL=get-skater-advanced-stats.js.map