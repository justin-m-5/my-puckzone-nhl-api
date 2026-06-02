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
export declare function getShiftChart(gameId: number): Promise<NHLShiftChartResponse>;
//# sourceMappingURL=get-shift-chart.d.ts.map