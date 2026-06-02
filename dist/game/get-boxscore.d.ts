import type { GameClock, LocalizedName, NHLApiGameOutcome, NHLApiGameTeam, PeriodDescriptor, TvBroadcast } from "../shared.js";
export interface NHLApiBoxscoreSkater {
    playerId: number;
    sweaterNumber: number;
    name: LocalizedName;
    position: string;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    pim: number;
    hits: number;
    powerPlayGoals: number;
    sog: number;
    faceoffWinningPctg: number;
    toi: string;
    blockedShots: number;
    shifts: number;
    giveaways: number;
    takeaways: number;
}
export interface NHLApiBoxscoreGoalie {
    playerId: number;
    sweaterNumber: number;
    name: LocalizedName;
    position: string;
    evenStrengthShotsAgainst: string;
    powerPlayShotsAgainst: string;
    shorthandedShotsAgainst: string;
    saveShotsAgainst: string;
    savePctg?: number;
    evenStrengthGoalsAgainst: number;
    powerPlayGoalsAgainst: number;
    shorthandedGoalsAgainst: number;
    pim: number;
    goalsAgainst: number;
    toi: string;
    starter: boolean;
    decision?: "W" | "L" | "OT";
    shotsAgainst: number;
    saves: number;
}
export interface NHLApiBoxscoreTeamStats {
    forwards: NHLApiBoxscoreSkater[];
    defense: NHLApiBoxscoreSkater[];
    goalies: NHLApiBoxscoreGoalie[];
}
export interface NHLApiBoxscorePlayerStats {
    awayTeam: NHLApiBoxscoreTeamStats;
    homeTeam: NHLApiBoxscoreTeamStats;
}
export interface NHLApiBoxscoreResponse {
    id: number;
    season: number;
    gameType: number;
    limitedScoring: boolean;
    gameDate: string;
    venue: LocalizedName;
    venueLocation: LocalizedName;
    startTimeUTC: string;
    easternUTCOffset: string;
    venueUTCOffset: string;
    tvBroadcasts: TvBroadcast[];
    gameState: string;
    gameScheduleState: string;
    periodDescriptor?: PeriodDescriptor;
    regPeriods: number;
    awayTeam: NHLApiGameTeam;
    homeTeam: NHLApiGameTeam;
    clock: GameClock;
    playerByGameStats?: NHLApiBoxscorePlayerStats;
    gameOutcome?: NHLApiGameOutcome;
}
export declare function getBoxscore(gameId: number): Promise<NHLApiBoxscoreResponse>;
//# sourceMappingURL=get-boxscore.d.ts.map