// index.ts

export type { NHLApiGameOutcome } from "./shared.js";

// ----------------------------------------------------------------
// Team
// ----------------------------------------------------------------
export type { ClubStatsResponse } from "./team/get-team-players-stats.js";
export { getTeamPlayerStats } from "./team/get-team-players-stats.js";
export type { ClubScheduleResponse } from "./team/get-team-schedule.js";
export { getTeamSchedule } from "./team/get-team-schedule.js";

// ----------------------------------------------------------------
// Teams
// ----------------------------------------------------------------
export type { NHLMasterTeam, NHLMasterTeamsResponse } from "./teams/get-teams-list.js";
export { getMasterTeamsList } from "./teams/get-teams-list.js";

// ----------------------------------------------------------------
// Standings
// ----------------------------------------------------------------
export type { StandingsResponse, RawStandingTeam } from "./standings/get-standings.js";
export { getStandings } from "./standings/get-standings.js";

// ----------------------------------------------------------------
// Playoffs
// ----------------------------------------------------------------
export type { PlayoffLocalizedText, PlayoffTeam, PlayoffSeries, PlayoffBracketResponse } from "./playoffs/get-playoff-bracket.js";
export { getPlayoffBracket } from "./playoffs/get-playoff-bracket.js";
export type { NHLApiSeriesScheduleResponse, NHLApiSeriesGame, NHLApiSeriesTeam, NHLApiSeriesGameTeam, NHLApiSeriesStatus, NHLApiGameState, NHLApiGameScheduleState, NHLApiPeriodType } from "./playoffs/get-playoff-series-schedule.js";
export { getSeriesSchedule } from "./playoffs/get-playoff-series-schedule.js";

// ----------------------------------------------------------------
// Leaders
// ----------------------------------------------------------------
export type { GoalieLeaderCategory, GoalieLeader, GoalieStatsLeadersResponse, PerformanceCategory, AdvancedGoalieCategory, EdgeGoalieCategory } from "./leaders/get-goalie-stats-leaders.js";
export { getGoalieStatsLeaders, PERFORMANCE_CATEGORIES, ADVANCED_GOALIE_CATEGORIES, EDGE_GOALIE_CATEGORIES } from "./leaders/get-goalie-stats-leaders.js";
export type { SkaterLeaderCategory, SkaterLeader, SkaterStatsLeadersResponse } from "./leaders/get-skater-stats-leaders.js";
export { getSkaterStatsLeaders } from "./leaders/get-skater-stats-leaders.js";

// ----------------------------------------------------------------
// Player
// ----------------------------------------------------------------
export type { PlayerLandingResponse, GoalieFeaturedStats, SkaterFeaturedStats, GoalieSeasonStats, SkaterSeasonStats } from "./player/get-player-landing.js";
export { getPlayerLanding } from "./player/get-player-landing.js";
export type { PlayerGameLogEntry, PlayerGameLogResponse } from "./player/get-player-game-logs.js";
export { getPlayerGameLogs } from "./player/get-player-game-logs.js";

// ----------------------------------------------------------------
// Schedule
// ----------------------------------------------------------------
export type { ScheduleResponse } from "./schedule/get-schedule.js";
export { getSchedule } from "./schedule/get-schedule.js";

// ----------------------------------------------------------------
// Scoreboard
// ----------------------------------------------------------------
export type { NHLApiScoreboardResponse, NHLApiScoreboardGame, NHLApiScoreboardTeam, NHLApiScoreboardGoal, NHLApiScoreboardGameOutcome } from "./scoreboard/get-scoreboard.js";
export { getScoreboard } from "./scoreboard/get-scoreboard.js";

// ----------------------------------------------------------------
// Game
// ----------------------------------------------------------------
export type { NHLApiBoxscoreResponse, NHLApiBoxscoreSkater, NHLApiBoxscoreGoalie, NHLApiBoxscoreTeamStats, NHLApiBoxscorePlayerStats } from "./game/get-boxscore.js";
export { getBoxscore } from "./game/get-boxscore.js";
export type { NHLApiGameSummaryLanding, GameSummarySection, PeriodScoring, Goal, ThreeStar } from "./game/get-game-summary.js";
export { getGameSummary } from "./game/get-game-summary.js";
export type { NHLApiGameStoryResponse, GameStorySummary, GameStoryGoal, GameStoryThreeStar, PreGameMatchup } from "./game/get-game-story.js";
export { getGameStory } from "./game/get-game-story.js";
export type { NHLApiPlayByPlayResponse, Play, GoalPlay, ShotOnGoalPlay, FaceoffPlay, HitPlay, PenaltyPlay, RosterSpot, GameOutcome } from "./game/get-play-by-play.js";
export { getGamePlayByPlay } from "./game/get-play-by-play.js";
export type { NHLShift, NHLShiftChartResponse } from "./game/get-shift-chart.js";
export { getShiftChart } from "./game/get-shift-chart.js";

// ----------------------------------------------------------------
// Stats
// ----------------------------------------------------------------
export type { StatsEntity, SortDirection, FetchStatsReportParams, StatsApiResponse } from "./stats/fetch-stats-report.js";
export { buildCayenneExp, fetchStatsReport } from "./stats/fetch-stats-report.js";

export type { GoalieStatsReportParams, GoalieAdvancedReport, GoalieEdgeReport, GoalieSummaryRow, GoalieAdvancedRow, GoalieBiosRow, GoalieDaysRestRow, GoaliePenaltyShotsRow, GoalieSavesByStrengthRow, GoalieShootoutRow, GoalieStartedVsRelievedRow, GoalieTimeOnIceRow } from "./stats/get-goalie-advanced-stats.js";
export { fetchGoalieSummary, fetchGoalieAdvancedStats, fetchGoalieBios, fetchGoalieDaysRest, fetchGoaliePenaltyShots, fetchGoalieSavesByStrength, fetchGoalieShootout, fetchGoalieStartedVsRelieved, fetchGoalieTimeOnIce } from "./stats/get-goalie-advanced-stats.js";

export type { SkaterStatsReportParams, SkaterAdvancedReport, SkaterEdgeReport, SkaterRealtimeRow, SkaterTimeOnIceRow, SkaterFaceoffRow, SkaterPenaltyRow, SkaterPowerPlayRow, SkaterPenaltyKillRow, SkaterScoringRatesRow, SkaterSummaryRow, SkaterShotTypeRow, SkaterPercentagesRow } from "./stats/get-skater-advanced-stats.js";
export { fetchSkaterRealtimeStats, fetchSkaterTimeOnIceStats, fetchSkaterFaceoffStats, fetchSkaterPenaltyStats, fetchSkaterPowerPlayStats, fetchSkaterPenaltyKillStats, fetchSkaterSummary, fetchSkaterScoringRates, fetchSkaterShotTypeStats, fetchSkaterPercentages } from "./stats/get-skater-advanced-stats.js";

export type { TeamStatsReportParams, TeamSummaryRow, TeamPercentagesRow, TeamRealtimeRow, TeamFaceoffRow, TeamPowerPlayRow, TeamPenaltyKillRow, TeamScoringRow, TeamShotTypeRow, TeamGoalsForByStrengthRow, TeamGoalsAgainstByStrengthRow, TeamDaysBetweenGamesRow, TeamLeadingTrailingRow, TeamOutshootOutshotByRow, TeamPenaltiesRow, TeamSummaryShootingRow, TeamSavePercentageRow, TeamScoreTrailFirstRow, TeamGoalGamesRow } from "./stats/get-team-advanced-stats.js";
export { fetchTeamSummary, fetchTeamPercentages, fetchTeamRealtime, fetchTeamFaceoff, fetchTeamPowerPlay, fetchTeamPenaltyKill, fetchTeamScoring, fetchTeamShotType, fetchTeamGoalsForByStrength, fetchTeamGoalsAgainstByStrength, fetchTeamDaysBetweenGames, fetchTeamLeadingTrailing, fetchTeamOutshootOutshotBy, fetchTeamPenalties, fetchTeamSummaryShooting, fetchTeamSavePercentage, fetchTeamScoreTrailFirst, fetchTeamGoalGames } from "./stats/get-team-advanced-stats.js";

// ----------------------------------------------------------------
// Edge Data — Goalie
// ----------------------------------------------------------------
export type { GoalieSavePctgStat, GoalieSavePctg5v5Detail, GoalieSavePctg5v5Response } from "./edge-data/goalie/get-goalie-5v5.js";
export { getGoalie5v5Detail } from "./edge-data/goalie/get-goalie-5v5.js";
export type { GoalieSavePctgDetail, GoalieSavePercentageResponse } from "./edge-data/goalie/get-goalie-save-percentages.js";
export { getGoalieSavePercentageDetail } from "./edge-data/goalie/get-goalie-save-percentages.js";
export type { GoalieShotLocationDetail, GoalieShotLocationTotal, GoalieShotLocationResponse } from "./edge-data/goalie/get-goalie-shot-location.js";
export { getGoalieShotLocationDetail } from "./edge-data/goalie/get-goalie-shot-location.js";

// ----------------------------------------------------------------
// Edge Data — Skater
// ----------------------------------------------------------------
export type { SkaterShotLocationDetail, SkaterShotLocationTotal, SkaterShotLocationResponse } from "./edge-data/skater/get-skater-shot-location.js";
export { getSkaterShotLocationDetail } from "./edge-data/skater/get-skater-shot-location.js";
export type { SkaterShotSpeedStat, SkaterShotSpeedBucket, SkaterShotSpeedDetail, SkaterShotSpeedResponse } from "./edge-data/skater/get-skater-shot-speed.js";
export { getSkaterShotSpeedDetail } from "./edge-data/skater/get-skater-shot-speed.js";
export type { SkaterStrengthCode, SkaterDistanceStat, SkaterSkatingDistanceDetail, SkaterSkatingDistanceResponse } from "./edge-data/skater/get-skater-skating-distance.js";
export { getSkaterSkatingDistanceDetail } from "./edge-data/skater/get-skater-skating-distance.js";
export type { SkaterSpeedStat, SkaterSpeedBurst, SkaterSkatingSpeedDetail, SkaterSkatingSpeedResponse } from "./edge-data/skater/get-skater-skating-speed.js";
export { getSkaterSkatingSpeedDetail } from "./edge-data/skater/get-skater-skating-speed.js";
export type { SkaterZoneTimeStrengthCode, SkaterZoneTimeDetail, SkaterZoneStarts, SkaterZoneTimeResponse } from "./edge-data/skater/get-skater-zone-time.js";
export { getSkaterZoneTime } from "./edge-data/skater/get-skater-zone-time.js";

// ----------------------------------------------------------------
// Edge Data — Team
// ----------------------------------------------------------------
export type { TeamShotLocationDetail, TeamShotLocationTotal, TeamShotLocationResponse } from "./edge-data/team/get-team-shot-location.js";
export { getTeamShotLocationDetail } from "./edge-data/team/get-team-shot-location.js";
export type { ShotSpeedStat, ShotSpeedBucket, TeamShotSpeedDetail, TeamShotSpeedResponse } from "./edge-data/team/get-team-shot-speed.js";
export { getTeamShotSpeedDetail } from "./edge-data/team/get-team-shot-speed.js";
export type { StrengthCode, PositionCode, SkatingDistanceStat, TeamSkatingDistanceDetail, TeamSkatingDistanceResponse } from "./edge-data/team/get-team-skating-distance.js";
export { getTeamSkatingDistanceDetail } from "./edge-data/team/get-team-skating-distance.js";
export type { SkatingSpeedStat, SpeedBurstStat, TeamSkatingSpeedDetail, TeamSkatingSpeedResponse } from "./edge-data/team/get-team-skating-speed.js";
export { getTeamSkatingSpeedDetail } from "./edge-data/team/get-team-skating-speed.js";
export type { ZoneTimeStrengthCode, TeamZoneTimeDetail, TeamShotDifferential, TeamZoneTimeResponse } from "./edge-data/team/get-team-zone-time.js";
export { getTeamZoneTimeDetail } from "./edge-data/team/get-team-zone-time.js";

// ----------------------------------------------------------------
// Edge Data — Top 10
// ----------------------------------------------------------------
export * from "./edge-data/top-10/index.js";