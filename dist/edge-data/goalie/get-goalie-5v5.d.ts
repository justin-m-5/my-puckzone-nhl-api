export interface GoalieSavePctgStat {
    value: number;
    leagueAvg: number;
    percentile: number;
}
export interface GoalieSavePctg5v5Detail {
    savePctg: GoalieSavePctgStat;
    savePctgClose: GoalieSavePctgStat;
    shots: GoalieSavePctgStat;
    shotsPer60: GoalieSavePctgStat;
}
export interface GoalieSavePctg5v5Response {
    savePctg5v5Details?: GoalieSavePctg5v5Detail;
}
export declare function getGoalie5v5Detail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<GoalieSavePctg5v5Response>;
//# sourceMappingURL=get-goalie-5v5.d.ts.map