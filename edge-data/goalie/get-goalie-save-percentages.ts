// edge-data/goalie/get-goalie-save-percentages.ts
import { fetchJsonWithRetries } from "../../client.js";
import { NHL_EDGE_BASE as BASE } from "../../constants.js";

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

export async function getGoalieSavePercentageDetail(playerId: number, seasonId: number | string, gameTypeId: 2 | 3): Promise<GoalieSavePercentageResponse> {
    return fetchJsonWithRetries<GoalieSavePercentageResponse>(`${BASE}/goalie-save-percentage-detail/${playerId}/${seasonId}/${gameTypeId}`);
}