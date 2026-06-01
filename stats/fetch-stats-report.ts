// stats/fetch-stats-report.ts

import { fetchJsonWithRetries } from "../client.js";
import { NHL_STATS_BASE as BASE } from "../constants.js";

export type StatsEntity = "team" | "skater" | "goalie";
export type SortDirection = "ASC" | "DESC" | "asc" | "desc";

export interface FetchStatsReportParams {
    entity: StatsEntity;
    report: string;
    cayenneExp: string;
    limit?: number | undefined;
    start?: number | undefined;
    sort?: string | undefined;
    dir?: SortDirection | undefined;
}

export interface StatsApiResponse<T> {
    data: T[];
    total: number;
}

export function buildCayenneExp(parts: Array<string | undefined | null>): string {
    return parts.filter(Boolean).join(" and ");
}

export async function fetchStatsReport<T>({ entity, report, cayenneExp, limit = 100, start = 0, sort, dir }: FetchStatsReportParams): Promise<StatsApiResponse<T>> {
    const params = new URLSearchParams({ limit: String(limit), start: String(start), cayenneExp });
    if (sort) params.set("sort", sort);
    if (dir) params.set("dir", dir);
    return fetchJsonWithRetries<StatsApiResponse<T>>(`${BASE}/${entity}/${report}?${params.toString()}`);
}