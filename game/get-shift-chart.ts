// game/get-shift-chart.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_STATS_BASE as BASE } from "../constants.js";

export interface NHLShift {
    id: number;
    gameId: number;
    playerId: number;
    firstName: string;
    lastName: string;
    teamId: number;
    teamAbbrev: string;
    teamName: string;
    period: number;
    shiftNumber: number;
    startTime: string;
    endTime: string;
    duration: string;
    typeCode: number;
    hexValue: string;
}

export interface NHLShiftChartResponse {
    data: NHLShift[];
    total: number;
}

export async function getShiftChart(gameId: number): Promise<NHLShiftChartResponse> {
    return fetchJsonWithRetries<NHLShiftChartResponse>(`${BASE}/shiftcharts?cayenneExp=gameId=${gameId}`);
}