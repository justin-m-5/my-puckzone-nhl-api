// player/get-player-game-logs.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";

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

export async function getPlayerGameLogs(playerId: number, season: string, gameType: 2 | 3): Promise<PlayerGameLogResponse> {
    return fetchJsonWithRetries<PlayerGameLogResponse>(`${BASE}/player/${playerId}/game-log/${season}/${gameType}`);
}