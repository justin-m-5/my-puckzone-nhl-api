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
export declare function buildCayenneExp(parts: Array<string | undefined | null>): string;
export declare function fetchStatsReport<T>({ entity, report, cayenneExp, limit, start, sort, dir }: FetchStatsReportParams): Promise<StatsApiResponse<T>>;
//# sourceMappingURL=fetch-stats-report.d.ts.map