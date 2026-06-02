// shared.ts

export type LocalizedName = {
    default?: string;
    fr?: string;
    cs?: string;
    fi?: string;
    sk?: string;
}

export type PeriodDescriptor = {
    number: number;
    periodType: "REG" | "OT" | "SO";
    maxRegulationPeriods: number;
};

export type TvBroadcast = {
    id: number;
    market: string;
    countryCode: string;
    network: string;
    sequenceNumber: number;
};

export type GameClock = {
    timeRemaining: string;
    secondsRemaining: number;
    running: boolean;
    inIntermission: boolean;
};

export type NHLApiGameTeam = {
    id: number;
    commonName: LocalizedName;
    abbrev: string;
    placeName: LocalizedName;
    placeNameWithPreposition: LocalizedName;
    score?: number;
    sog?: number;
    logo: string;
    darkLogo: string;
};

export type GoalAssist = {
    playerId: number;
    firstName: LocalizedName;
    lastName: LocalizedName;
    name: LocalizedName;
    assistsToDate: number;
    sweaterNumber: number;
};

export type PenaltyPlayer = {
    firstName: LocalizedName;
    lastName: LocalizedName;
    sweaterNumber: number;
};

export type Penalty = {
    timeInPeriod: string;
    type: string;
    duration: number;
    committedByPlayer: PenaltyPlayer;
    teamAbbrev: LocalizedName;
    drawnBy?: PenaltyPlayer;
    descKey: string;
};

export type PeriodPenalties = {
    periodDescriptor: PeriodDescriptor;
    penalties: Penalty[];
};

export interface RawTeamInfo {
    id?: number;
    abbrev?: string;
    placeName?: { default?: string };
    commonName?: { default?: string };
    score?: number;
    logo?: string;
    sog?: number;
}

export interface RawGame {
    id: number;
    gameType?: string | null;
    startTimeUTC?: string;
    venue?: { default?: string };
    homeTeam?: RawTeamInfo;
    awayTeam?: RawTeamInfo;
    gameState?: string;
    gameCenterLink?: string;
    periodDescriptor?: {
        number?: number;
        periodType?: string;
        maxRegulationPeriods?: number;
        otPeriods?: number;
    };
    gameOutcome?: {
        lastPeriodType?: string | null;
    };
    seriesStatus?: SeriesStatus | null;
}

export type RawStandingTeam = {
    teamId?: number | string;
    teamName?: LocalizedName;
    teamCommonName?: LocalizedName;
    teamAbbrev?: LocalizedName;
    placeName?: LocalizedName;
    teamLogo?: string;
    seasonId?: number;
    gameTypeId?: number;
    conferenceAbbrev?: string;
    conferenceName?: string;
    conferenceSequence?: number;
    divisionAbbrev?: string;
    divisionName?: string;
    divisionSequence?: number;
    leagueSequence?: number;
    wildcardSequence?: number;
    gamesPlayed?: number;
    wins?: number;
    losses?: number;
    otLosses?: number;
    points?: number;
    pointPctg?: number;
    regulationWins?: number;
    regulationPlusOtWins?: number;
    goalFor?: number;
    goalAgainst?: number;
    goalDifferential?: number;
    homeGamesPlayed?: number;
    homeWins?: number;
    homeLosses?: number;
    homeOtLosses?: number;
    homePoints?: number;
    homeGoalsFor?: number;
    homeGoalsAgainst?: number;
    homeGoalDifferential?: number;
    roadGamesPlayed?: number;
    roadWins?: number;
    roadLosses?: number;
    roadOtLosses?: number;
    roadPoints?: number;
    roadGoalsFor?: number;
    roadGoalsAgainst?: number;
    roadGoalDifferential?: number;
    l10GamesPlayed?: number;
    l10Wins?: number;
    l10Losses?: number;
    l10OtLosses?: number;
    l10Points?: number;
    l10GoalsFor?: number;
    l10GoalsAgainst?: number;
    l10GoalDifferential?: number;
    shootoutWins?: number;
    shootoutLosses?: number;
    streakCode?: string;
    streakCount?: number;
}

export type StandingsResponse = {
    standings?: RawStandingTeam[];
}

export interface PlayoffLocalizedText {
    default: string;
    fr?: string;
}

export interface PlayoffTeam {
    id: number;
    abbrev: string;
    logo: string;
    darkLogo?: string;
    commonName: PlayoffLocalizedText;
    placeName: PlayoffLocalizedText;
    seed?: number;
    record?: string;
    sog?: number;
    score?: number;
}

export interface PlayoffSeries {
    seriesLetter: string;
    seriesTitle: string;
    seriesAbbrev: string;
    playoffRound: number;
    topSeedTeam: PlayoffTeam;
    bottomSeedTeam: PlayoffTeam;
    topSeedWins: number;
    bottomSeedWins: number;
    winningTeamId?: number;
    losingTeamId?: number;
    seriesUrl?: string;
    seriesLogo?: string;
    nearlySeries?: boolean;
    topSeedRank?: number;
    bottomSeedRank?: number;
}

export interface SeriesStatus {
    round?: number | null;
    seriesAbbrev?: string | null;
    seriesTitle?: string | null;
    seriesLetter?: string | null;
    neededToWin?: number | null;
    topSeedTeamAbbrev?: string | null;
    topSeedWins?: number | null;
    bottomSeedTeamAbbrev?: string | null;
    bottomSeedWins?: number | null;
    gameNumberOfSeries?: number | null;
}

export interface PlayoffBracketResponse {
    bracketYear: number;
    series: PlayoffSeries[];
}

export interface NHLApiGameOutcome {
    lastPeriodType: string;
    otPeriods?: number;
}