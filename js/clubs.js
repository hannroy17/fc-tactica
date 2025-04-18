// js/clubs.js

const clubList = [
  "PSG", "Barça", "Real", "Man Utd", "Inter", "Juve", "Bayern", "Chelsea",
  "Liverpool", "Arsenal", "Dortmund", "Milan", "Roma", "Marseille", "Napoli",
  "Tottenham", "Leipzig", "Benfica", "Porto", "Ajax", "Sevilla", "Lyon", "Valencia", "Atletico",
  "Fiorentina", "Monaco", "Sporting", "Galatasaray", "Shakhtar", "Celtic", "Rangers"
];

function getRandomClubsDistinct(n) {
  const easyClubs = clubList.filter(c => clubLogos[c].level === "easy");
  const shuffled = [...easyClubs].sort(() => 0.5 - Math.random());
  return [shuffled.slice(0, n), shuffled.slice(n, 2 * n)];
}

const clubLogos = {
  PSG: {
    name: "Paris Saint-Germain",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/52747.png",
    level: "easy"
  },
  "Barça": {
    name: "FC Barcelona",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50080.png",
    level: "easy"
  },
  Real: {
    name: "Real Madrid",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50051.png",
    level: "easy"
  },
  "Man Utd": {
    name: "Manchester United",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/52682.png",
    level: "easy"
  },
  Inter: {
    name: "Inter Milan",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50138.png",
    level: "easy"
  },
  Juve: {
    name: "Juventus",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50139.png",
    level: "easy"
  },
  Bayern: {
    name: "Bayern Munich",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50037.png",
    level: "easy"
  },
  Chelsea: {
    name: "Chelsea FC",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/52914.png",
    level: "easy"
  },
  Liverpool: {
    name: "Liverpool FC",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/7889.png",
    level: "easy"
  },
  Arsenal: {
    name: "Arsenal FC",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/52280.png",
    level: "easy"
  },
  Dortmund: {
    name: "Borussia Dortmund",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/52758.png",
    level: "easy"
  },
  Milan: {
    name: "AC Milan",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50058.png",
    level: "easy"
  },
  Roma: {
    name: "AS Roma",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50137.png",
    level: "normal"
  },
  Marseille: {
    name: "Olympique de Marseille",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/52748.png",
    level: "normal"
  },
  Napoli: {
    name: "SSC Napoli",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50136.png",
    level: "normal"
  },
  Tottenham: {
    name: "Tottenham",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/1652.png",
    level: "normal"
  },
  Leipzig: {
    name: "RB Leipzig",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/2603790.png",
    level: "normal"
  },
  Benfica: {
    name: "SL Benfica",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50147.png",
    level: "normal"
  },
  Porto: {
    name: "FC Porto",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50064.png",
    level: "normal"
  },
  Ajax: {
    name: "AFC Ajax",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50143.png",
    level: "normal"
  },
  Sevilla: {
    name: "Sevilla FC",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/52714.png",
    level: "normal"
  },
  Lyon: {
    name: "Olympique Lyonnais",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/5312.png",
    level: "normal"
  },
  Valencia: {
    name: "Valencia CF",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/52268.png",
    level: "hard"
  },
  Atletico: {
    name: "Atlético Madrid",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50124.png",
    level: "normal"
  },
  "Fiorentina": {
    name: "ACF Fiorentina",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/52817.png",
    level: "hard"
  },
  "Monaco": {
    name: "AS Monaco",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50023.png",
    level: "normal"
  },
  "Sporting": {
    name: "Sporting CP",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50149.png",
    level: "hard"
  },
  "Galatasaray": {
    name: "Galatasaray SK",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50067.png",
    level: "hard"
  },
  "Celtic": {
    name: "Celtic FC",
    logo: "https://img.uefa.com/imgml/TP/teams/logos/700x700/50057.png",
    level: "hard"
  }
};
