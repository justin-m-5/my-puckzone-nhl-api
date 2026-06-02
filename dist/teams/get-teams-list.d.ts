export interface NHLMasterTeam {
    id: number;
    triCode: string;
    fullName: string;
}
export interface NHLMasterTeamsResponse {
    data: NHLMasterTeam[];
}
export declare function getMasterTeamsList(): Promise<NHLMasterTeamsResponse>;
//# sourceMappingURL=get-teams-list.d.ts.map