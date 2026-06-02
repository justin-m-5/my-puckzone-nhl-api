export type SkaterLeaderCategory = "points" | "goals" | "assists" | "plusMinus" | "hits" | "blockedShots" | "penaltyMinutes" | "powerPlayGoals" | "shortHandedGoals" | "gameWinningGoals" | "overtimeGoals" | "shots" | "shootingPctg" | "faceoffWinPctg" | "timeOnIcePerGame";
export interface SkaterLeader {
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
    position: string;
    value: number;
}
export interface SkaterStatsLeadersResponse {
    [category: string]: SkaterLeader[];
}
export declare function getSkaterStatsLeaders({ seasonId, gameTypeId, categories, limit }: {
    seasonId: number | string;
    gameTypeId: 2 | 3;
    categories: SkaterLeaderCategory | SkaterLeaderCategory[];
    limit?: number;
}): Promise<SkaterStatsLeadersResponse>;
//# sourceMappingURL=get-skater-stats-leaders.d.ts.map