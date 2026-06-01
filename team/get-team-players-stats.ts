// team/get-team-players-stats.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_API_BASE as BASE } from "../constants.js";

export interface ClubStatsResponse {
    season: string;
    gameType: number;
    skaters: Array<{
        playerId: number;
        headshot: string;
        firstName: { default: string };
        lastName: { default: string };
        positionCode: string;
        gamesPlayed: number;
        goals: number;
        assists: number;
        points: number;
        plusMinus: number;
        penaltyMinutes: number;
        powerPlayGoals: number;
        shorthandedGoals: number;
        gameWinningGoals: number;
        overtimeGoals: number;
        shots: number;
        shootingPctg: number;
        avgTimeOnIcePerGame: number;
        avgShiftsPerGame: number;
        faceoffWinPctg: number;
    }>;
    goalies: Array<{
        playerId: number;
        headshot: string;
        firstName: { default: string };
        lastName: { default: string };
        gamesPlayed: number;
        gamesStarted: number;
        wins: number;
        losses: number;
        overtimeLosses: number;
        goalsAgainstAverage: number;
        savePercentage: number;
        shotsAgainst: number;
        saves: number;
        goalsAgainst: number;
        shutouts: number;
        goals: number;
        assists: number;
        points: number;
        penaltyMinutes: number;
        timeOnIce: number;
    }>;
}

export async function getTeamPlayerStats(teamAbbrev: string, season: string, gameTypeId: number): Promise<ClubStatsResponse> {
    return fetchJsonWithRetries<ClubStatsResponse>(`${BASE}/club-stats/${teamAbbrev}/${season}/${gameTypeId}`);
}