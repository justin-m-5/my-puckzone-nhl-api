# my-puckzone-nhl-api

TypeScript client library for the NHL API. Used internally by the my-puckzone app.

## Installation

```bash
npm install
```

## Usage

```ts
import { getStandings, getScoreboard, getGamePlayByPlay } from "my-puckzone-nhl-api";
```

## Endpoints

### Teams
- `getMasterTeamsList()` — full NHL team list with IDs and abbreviations

### Standings
- `getStandings()` — current standings

### Playoffs
- `getPlayoffBracket(year)` — playoff bracket for a given year
- `getSeriesSchedule(season, seriesLetter)` — schedule for a specific playoff series

### Leaders
- `getGoalieStatsLeaders({ seasonId, gameTypeId, categories })` — goalie stat leaders
- `getSkaterStatsLeaders({ seasonId, gameTypeId, categories })` — skater stat leaders

### Player
- `getPlayerLanding(playerId)` — player profile and featured stats
- `getPlayerGameLogs(playerId, seasonId, gameTypeId)` — player game log

### Schedule
- `getSchedule(date?)` — schedule for a given date or today

### Scoreboard
- `getScoreboard()` — live scoreboard

### Game
- `getBoxscore(gameId)` — boxscore with player stats
- `getGameSummary(gameId)` — game summary with scoring and three stars
- `getGameStory(gameId)` — full game story with pre-game matchup data
- `getGamePlayByPlay(gameId)` — full play-by-play event stream
- `getShiftChart(gameId)` — shift data for all players

### Team
- `getTeamPlayerStats(teamAbbrev, season, gameTypeId)` — club stats for skaters and goalies
- `getTeamSchedule(teamAbbrev, season)` — full season schedule for a team

### Stats (NHL Stats API)
- `fetchSkaterSummary`, `fetchSkaterRealtimeStats`, `fetchSkaterTimeOnIceStats`, and more
- `fetchGoalieSummary`, `fetchGoalieAdvancedStats`, `fetchGoalieBios`, and more
- `fetchTeamSummary`, `fetchTeamPowerPlay`, `fetchTeamPenaltyKill`, and more

### Edge Data
- Goalie: 5v5 save%, save percentages by zone, shot location
- Skater: shot location, shot speed, skating distance, skating speed, zone time
- Team: shot location, shot speed, skating distance, skating speed, zone time
- Top 10 leaderboards for all of the above

## Base URLs

| Constant | URL |
|---|---|
| `NHL_API_BASE` | `https://api-web.nhle.com/v1` |
| `NHL_STATS_BASE` | `https://api.nhle.com/stats/rest/en` |
| `NHL_EDGE_BASE` | `https://api-web.nhle.com/v1/edge` |
