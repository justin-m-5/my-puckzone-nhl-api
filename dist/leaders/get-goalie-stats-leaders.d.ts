export type GoalieLeaderCategory = "wins" | "savePctg" | "goalsAgainstAverage" | "shutouts" | "saves" | "goalsAgainst" | "gamesStarted" | "gamesPlayed" | "timeOnIce";
export declare const PERFORMANCE_CATEGORIES: readonly ["wins", "savePctg", "goalsAgainstAverage", "shutouts"];
export type PerformanceCategory = (typeof PERFORMANCE_CATEGORIES)[number];
export declare const ADVANCED_GOALIE_CATEGORIES: readonly ["saves", "goalsAgainst"];
export type AdvancedGoalieCategory = (typeof ADVANCED_GOALIE_CATEGORIES)[number];
export declare const EDGE_GOALIE_CATEGORIES: readonly ["gamesStarted", "gamesPlayed", "timeOnIce"];
export type EdgeGoalieCategory = (typeof EDGE_GOALIE_CATEGORIES)[number];
export declare const GOALIE_ADVANCED_REPORT_IDS: readonly ["summary", "advanced", "savesByStrength", "startedVsRelieved", "daysRest"];
export type GoalieAdvancedReport = (typeof GOALIE_ADVANCED_REPORT_IDS)[number];
export declare const GOALIE_EDGE_REPORT_IDS: readonly ["timeonice", "shootout", "penaltyShots"];
export type GoalieEdgeReport = (typeof GOALIE_EDGE_REPORT_IDS)[number];
export interface GoalieLeader {
    id: number;
    firstName: {
        default: string;
    };
    lastName: {
        default: string;
    };
    sweaterNumber: number;
    headshot: string;
    teamAbbrev: string;
    teamName: {
        default: string;
    };
    teamLogo: string;
    value: number;
}
export interface GoalieStatsLeadersResponse {
    [category: string]: GoalieLeader[];
}
export declare function getGoalieStatsLeaders({ seasonId, gameTypeId, categories, limit }: {
    seasonId: number | string;
    gameTypeId: 2 | 3;
    categories: GoalieLeaderCategory | GoalieLeaderCategory[];
    limit?: number;
}): Promise<GoalieStatsLeadersResponse>;
//# sourceMappingURL=get-goalie-stats-leaders.d.ts.map