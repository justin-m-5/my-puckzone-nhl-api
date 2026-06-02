export interface PlayerGameLogEntry {
    gameId: number;
    gameDate: string;
    homeRoadFlag: "H" | "R";
    opponentAbbrev: string;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    pim: number;
    shots: number;
    shifts: number;
    toi: string;
    gamesStarted?: number;
    decision?: string;
    shotsAgainst?: number;
    goalsAgainst?: number;
    savePctg?: number;
}
export interface PlayerGameLogResponse {
    gameLog: PlayerGameLogEntry[];
}
export declare function getPlayerGameLogs(playerId: number, season: string, gameType: 2 | 3): Promise<PlayerGameLogResponse>;
//# sourceMappingURL=get-player-game-logs.d.ts.map