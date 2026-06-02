import type { GameClock, NHLApiGameTeam, PeriodDescriptor, TvBroadcast, LocalizedName } from "../shared.js";
export type GameOutcome = {
    lastPeriodType: "REG" | "OT" | "SO";
    otPeriods?: number;
};
export type RosterSpot = {
    teamId: number;
    playerId: number;
    firstName: LocalizedName;
    lastName: LocalizedName & {
        cs?: string;
        fi?: string;
        sk?: string;
    };
    sweaterNumber: number;
    positionCode: string;
    headshot: string;
};
export type FaceoffDetails = {
    eventOwnerTeamId: number;
    losingPlayerId: number;
    winningPlayerId: number;
    xCoord: number;
    yCoord: number;
    zoneCode: string;
};
export type HitDetails = {
    xCoord: number;
    yCoord: number;
    zoneCode: string;
    eventOwnerTeamId: number;
    hittingPlayerId: number;
    hitteePlayerId: number;
};
export type StoppageDetails = {
    reason: string;
    secondaryReason?: string;
};
export type ShotOnGoalDetails = {
    xCoord: number;
    yCoord: number;
    zoneCode: string;
    shotType: string;
    shootingPlayerId: number;
    goalieInNetId: number;
    eventOwnerTeamId: number;
    awaySOG: number;
    homeSOG: number;
};
export type MissedShotDetails = {
    xCoord: number;
    yCoord: number;
    zoneCode: string;
    reason: string;
    shotType: string;
    shootingPlayerId: number;
    goalieInNetId?: number;
    eventOwnerTeamId: number;
};
export type BlockedShotDetails = {
    xCoord: number;
    yCoord: number;
    zoneCode: string;
    blockingPlayerId: number;
    shootingPlayerId: number;
    eventOwnerTeamId: number;
    reason: string;
};
export type GiveawayDetails = {
    xCoord: number;
    yCoord: number;
    zoneCode: string;
    eventOwnerTeamId: number;
    playerId: number;
};
export type TakeawayDetails = {
    xCoord: number;
    yCoord: number;
    zoneCode: string;
    playerId: number;
    eventOwnerTeamId: number;
};
export type PenaltyDetails = {
    xCoord: number;
    yCoord: number;
    zoneCode: string;
    typeCode: string;
    descKey: string;
    duration: number;
    committedByPlayerId: number;
    drawnByPlayerId?: number;
    eventOwnerTeamId: number;
};
export type GoalDetails = {
    xCoord: number;
    yCoord: number;
    zoneCode: string;
    shotType: string;
    scoringPlayerId: number;
    scoringPlayerTotal: number;
    assist1PlayerId?: number;
    assist1PlayerTotal?: number;
    assist2PlayerId?: number;
    assist2PlayerTotal?: number;
    eventOwnerTeamId: number;
    goalieInNetId?: number;
    awayScore: number;
    homeScore: number;
    highlightClipSharingUrl?: string;
    highlightClipSharingUrlFr?: string;
    highlightClip?: number;
    highlightClipFr?: number;
    discreteClip?: number;
    discreteClipFr?: number;
};
export type DelayedPenaltyDetails = {
    eventOwnerTeamId: number;
};
type PlayBase = {
    eventId: number;
    periodDescriptor: PeriodDescriptor;
    timeInPeriod: string;
    timeRemaining: string;
    situationCode: string;
    homeTeamDefendingSide: string;
    sortOrder: number;
};
export type FaceoffPlay = PlayBase & {
    typeCode: 502;
    typeDescKey: "faceoff";
    details: FaceoffDetails;
};
export type HitPlay = PlayBase & {
    typeCode: 503;
    typeDescKey: "hit";
    details: HitDetails;
};
export type GiveawayPlay = PlayBase & {
    typeCode: 504;
    typeDescKey: "giveaway";
    details: GiveawayDetails;
};
export type GoalPlay = PlayBase & {
    typeCode: 505;
    typeDescKey: "goal";
    details: GoalDetails;
    pptReplayUrl?: string;
};
export type ShotOnGoalPlay = PlayBase & {
    typeCode: 506;
    typeDescKey: "shot-on-goal";
    details: ShotOnGoalDetails;
};
export type MissedShotPlay = PlayBase & {
    typeCode: 507;
    typeDescKey: "missed-shot";
    details: MissedShotDetails;
};
export type BlockedShotPlay = PlayBase & {
    typeCode: 508;
    typeDescKey: "blocked-shot";
    details: BlockedShotDetails;
};
export type PenaltyPlay = PlayBase & {
    typeCode: 509;
    typeDescKey: "penalty";
    details: PenaltyDetails;
};
export type StoppagePlay = PlayBase & {
    typeCode: 516;
    typeDescKey: "stoppage";
    details: StoppageDetails;
};
export type PeriodStartPlay = PlayBase & {
    typeCode: 520;
    typeDescKey: "period-start";
    details?: never;
};
export type PeriodEndPlay = PlayBase & {
    typeCode: 521;
    typeDescKey: "period-end";
    details?: never;
};
export type GameEndPlay = PlayBase & {
    typeCode: 524;
    typeDescKey: "game-end";
    details?: never;
};
export type TakeawayPlay = PlayBase & {
    typeCode: 525;
    typeDescKey: "takeaway";
    details: TakeawayDetails;
};
export type DelayedPenaltyPlay = PlayBase & {
    typeCode: 535;
    typeDescKey: "delayed-penalty";
    details: DelayedPenaltyDetails;
};
export type Play = FaceoffPlay | HitPlay | GiveawayPlay | GoalPlay | ShotOnGoalPlay | MissedShotPlay | BlockedShotPlay | PenaltyPlay | StoppagePlay | PeriodStartPlay | PeriodEndPlay | GameEndPlay | TakeawayPlay | DelayedPenaltyPlay;
export type NHLApiPlayByPlayResponse = {
    id: number;
    season: number;
    gameType: number;
    limitedScoring: boolean;
    gameDate: string;
    venue: LocalizedName;
    venueLocation: LocalizedName & {
        fr?: string;
    };
    startTimeUTC: string;
    easternUTCOffset: string;
    venueUTCOffset: string;
    tvBroadcasts: TvBroadcast[];
    gameState: string;
    gameScheduleState: string;
    periodDescriptor: PeriodDescriptor;
    awayTeam: NHLApiGameTeam;
    homeTeam: NHLApiGameTeam;
    shootoutInUse: boolean;
    otInUse: boolean;
    clock: GameClock;
    displayPeriod: number;
    gameOutcome: GameOutcome;
    plays: Play[];
    rosterSpots: RosterSpot[];
    regPeriods: number;
};
export declare function getGamePlayByPlay(gameId: number): Promise<NHLApiPlayByPlayResponse>;
export {};
//# sourceMappingURL=get-play-by-play.d.ts.map