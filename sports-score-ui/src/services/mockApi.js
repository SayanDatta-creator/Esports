// Simulate API responses
const mockTeams = [
  { id: 1, name: "Team A", wins: 5, losses: 2 },
  { id: 2, name: "Team B", wins: 4, losses: 3 },
  { id: 3, name: "Team C", wins: 6, losses: 1 },
];

const mockMatches = [
  { id: 1, team1: "Team A", team2: "Team B", score1: 3, score2: 2, isLive: true },
  { id: 2, team1: "Team C", team2: "Team D", score1: 0, score2: 0, isLive: true },
];

export const getScores = () => {
  return new Promise(resolve => 
    setTimeout(() => resolve(mockMatches), 500)
  );
};

export const getStandings = () => {
  return new Promise(resolve => 
    setTimeout(() => resolve(mockTeams), 500)
  );
};

export const updateScore = (matchId, score1, score2) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const match = mockMatches.find(m => m.id === matchId);
      if (match) {
        match.score1 = score1;
        match.score2 = score2;
      }
      resolve({ success: true });
    }, 500);
  });
};