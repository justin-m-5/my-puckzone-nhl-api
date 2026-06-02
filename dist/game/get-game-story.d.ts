import type { GameClock, GoalAssist, PeriodDescriptor, PeriodPenalties, TvBroadcast, LocalizedName } from "../shared.js";
export type NHLApiGameStoryTeam = {
    id: number;
    name: LocalizedName;
    abbrev: string;
    placeName: LocalizedName;
    score?: number;
    sog?: number;
    logo: string;
    record?: string;
};
export type GameStoryGoal = {
    situationCode: string;
    eventId: number;
    strength: "ev" | "pp" | "sh";
    playerId: number;
    firstName: LocalizedName;
    lastName: LocalizedName;
    name: LocalizedName;
    teamAbbrev: LocalizedName;
    headshot: string;
    highlightClipSharingUrl?: string;
    highlightClipSharingUrlFr?: string;
    highlightClip?: number;
    highlightClipFr?: number;
    discreteClip?: number;
    discreteClipFr?: number;
    goalsToDate: number;
    awayScore: number;
    homeScore: number;
    leadingTeamAbbrev?: LocalizedName;
    timeInPeriod: string;
    shotType?: string;
    goalModifier: string;
    assists: GoalAssist[];
    homeTeamDefendingSide?: string;
    isHome: boolean;
};
export type GameStoryPeriodScoring = {
    periodDescriptor: PeriodDescriptor;
    goals: GameStoryGoal[];
};
export type GameStoryThreeStar = {
    star: 1 | 2 | 3;
    playerId: number;
    teamAbbrev: string;
    headshot: string;
    name: string;
    sweaterNo: number;
    position: string;
    goals?: number;
    assists?: number;
    points?: number;
    goalsAgainstAverage?: number;
    savePctg?: number;
};
export type TeamGameStat = {
    category: string;
    awayValue: number | string;
    homeValue: number | string;
};
export interface GameStoryShootoutAttempt {
    sequence: number;
    playerId: number;
    teamAbbrev: LocalizedName;
    firstName: LocalizedName;
    lastName: LocalizedName;
    shotType?: string;
    result: "goal" | "save" | "miss";
    headshot: string;
    gameWinner: boolean;
    homeScore: number;
    awayScore: number;
    discreteClip?: number;
    discreteClipFr?: number;
}
export type GameStorySummary = {
    scoring: GameStoryPeriodScoring[];
    shootout: GameStoryShootoutAttempt[];
    threeStars: GameStoryThreeStar[];
    teamGameStats: TeamGameStat[];
    penalties?: PeriodPenalties[];
};
export type PreGameLeaderPlayer = {
    playerId: number;
    name: LocalizedName;
    firstName: LocalizedName;
    lastName: LocalizedName;
    sweaterNumber: number;
    positionCode: string;
    headshot: string;
    value: number;
};
export type PreGameSkatingLeaderCategory = {
    category: string;
    awayLeader: PreGameLeaderPlayer;
    homeLeader: PreGameLeaderPlayer;
};
export type PreGameSkatingLeaders = {
    season: number;
    gameTypes: number[];
    leaders: PreGameSkatingLeaderCategory[];
};
export type PreGameGoalieEntry = {
    playerId: number;
    name: LocalizedName;
    firstName: LocalizedName;
    lastName: LocalizedName;
    sweaterNumber: number;
    headshot: string;
    positionCode: string;
    gamesPlayed?: number;
    seasonPoints?: number;
    record?: string;
    gaa?: number;
    savePctg?: number;
    shutouts?: number;
};
export type PreGameGoalieComparison = {
    season: number;
    gameTypes: number[];
    awayTeam: PreGameGoalieEntry[];
    homeTeam: PreGameGoalieEntry[];
};
export type PreGameTeamSeasonStats = {
    ppPctg: number;
    pkPctg: number;
    faceoffWinningPctg: number;
    goalsForPerGamePlayed: number;
    goalsAgainstPerGamePlayed: number;
    ppPctgRank: number;
    pkPctgRank: number;
    faceoffWinningPctgRank: number;
    goalsForPerGamePlayedRank: number;
    goalsAgainstPerGamePlayedRank: number;
};
export type PreGameMatchup = {
    skatingLeaders: PreGameSkatingLeaders;
    goalieComparison: PreGameGoalieComparison;
    teamSeasonStats: {
        awayTeam: PreGameTeamSeasonStats;
        homeTeam: PreGameTeamSeasonStats;
    };
};
export type NHLApiGameStoryResponse = {
    id: number;
    season: number;
    gameType: number;
    limitedScoring: boolean;
    gameDate: string;
    venue: LocalizedName;
    venueLocation: LocalizedName & {
        fr?: string;
    };
    startTimeUTC: string;
    easternUTCOffset: string;
    venueUTCOffset: string;
    venueTimezone: string;
    tvBroadcasts: TvBroadcast[];
    gameState: string;
    gameScheduleState: string;
    awayTeam: NHLApiGameStoryTeam;
    homeTeam: NHLApiGameStoryTeam;
    shootoutInUse: boolean;
    regPeriods: number;
    otInUse: boolean;
    tiesInUse: boolean;
    summary: GameStorySummary;
    periodDescriptor: PeriodDescriptor;
    clock: GameClock;
    preGameMatchup?: PreGameMatchup;
};
export declare function getGameStory(gameId: number): Promise<NHLApiGameStoryResponse>;
//# sourceMappingURL=get-game-story.d.ts.map