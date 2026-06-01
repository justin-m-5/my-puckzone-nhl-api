// player/shared.ts

export interface GoalieFeaturedStats {
    gamesPlayed: number;
    wins: number;
    shutouts: number;
    goalsAgainstAvg: number;
    savePctg: number;
}

export interface SkaterFeaturedStats {
    gamesPlayed: number;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
}

export interface GoalieSeasonStats {
    assists: number;
    gameTypeId: number;
    gamesPlayed: number;
    gamesStarted: number;
    goals: number;
    goalsAgainst: number;
    goalsAgainstAvg: number;
    leagueAbbrev: string;
    losses: number;
    otLosses: number;
    pim: number;
    savePctg: number;
    season: number;
    sequence: number;
    shotsAgainst: number;
    shutouts: number;
    teamCommonName: { default: string };
    teamName: { default: string };
    teamPlaceNameWithPreposition: { default: string };
    timeOnIce: string;
    wins: number;
}

export interface SkaterSeasonStats {
    assists: number;
    avgToi: string;
    faceoffWinningPctg: number;
    gameTypeId: number;
    gameWinningGoals: number;
    gamesPlayed: number;
    goals: number;
    leagueAbbrev: string;
    otGoals: number;
    pim: number;
    plusMinus: number;
    points: number;
    powerPlayGoals: number;
    powerPlayPoints: number;
    season: number;
    sequence: number;
    shootingPctg: number;
    shorthandedGoals: number;
    shorthandedPoints: number;
    shots: number;
    teamCommonName: { default: string };
    teamName: { default: string };
    teamPlaceNameWithPreposition: { default: string };
}

export interface PlayerLandingResponse {
    playerId: number;
    isActive: boolean;
    currentTeamId: number;
    currentTeamAbbrev: string;
    fullTeamName: { default: string };
    teamCommonName: { default: string };
    firstName: { default: string };
    lastName: { default: string };
    position: string;
    headshot: string;
    heroImage: string;
    heightInCentimeters: number;
    heightInInches: number;
    weightInKilograms: number;
    weightInPounds: number;
    birthDate: string;
    birthCity: { default: string };
    birthStateProvince: { default: string };
    birthCountry: string;
    shootsCatches: string;
    sweaterNumber: number;
    teamLogo: string;
    badges?: Array<{
        logoUrl: { default: string };
        title: { default: string };
    }>;
    draftDetails?: {
        year: number;
        teamAbbrev: string;
        round: number;
        pickInRound: number;
        overallPick: number;
    };
    careerTotals: {
        regularSeason?: GoalieFeaturedStats | SkaterFeaturedStats;
        playoffs?: GoalieFeaturedStats | SkaterFeaturedStats;
    };
    featuredStats?: {
        season: number;
        regularSeason: {
            subSeason: GoalieFeaturedStats | SkaterFeaturedStats;
            career: GoalieFeaturedStats | SkaterFeaturedStats;
        };
        playoffs?: {
            subSeason: GoalieFeaturedStats | SkaterFeaturedStats;
            career: GoalieFeaturedStats | SkaterFeaturedStats;
        };
    };
    seasonTotals?: (GoalieSeasonStats | SkaterSeasonStats)[];
}