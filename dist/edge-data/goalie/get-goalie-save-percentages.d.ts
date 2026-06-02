export interface GoalieSavePctgStat {
    value: number;
    percentile: number;
    leagueAvg: number;
}
export interface GoalieSavePctgDetail {
    gamesAbove900: GoalieSavePctgStat;
    pctgGamesAbove900: GoalieSavePctgStat;
}
export interface GoalieSavePercentageResponse {
    savePctgDetails?: GoalieSavePctgDetail;
}
export declare function getGoalieSavePercentageDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<GoalieSavePercentageResponse>;
//# sourceMappingURL=get-goalie-save-percentages.d.ts.map