// playerData.js

const playerData = [
  {
    name: "Kylian Mbappe",
    clubs: ["PSG", "Monaco", "Real"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/2014/2025/324x324/250076574.jpg",
    goals: 300
  },
  {
    name: "Lionel Messi",
    clubs: ["PSG", "Barça", "Inter Miami", "Newell's Old Boys"],
    nationality: "Argentina",
    img: "https://img.uefa.com/imgml/TP/players/2020/2022/324x324/95803.jpg",
    goals: 830
  },
  {
    name: "Cristiano Ronaldo",
    clubs: ["Real", "Man Utd", "Juve", "Sporting", "Al Nassr"],
    nationality: "Portugal",
    img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/63706.jpg",
    goals: 875
  },
  {
    name: "Neymar Jr",
    clubs: ["Barça", "PSG", "Al Hilal", "Santos"],
    nationality: "Brazil",
    img: "https://i.ibb.co/xKJhBz4f/neymar.webp",
    goals: 450
  },
  {
    name: "Erling Haaland",
    clubs: ["Man City", "Dortmund", "Salzburg", "Molde", "Bryne"],
    nationality: "Norway",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250103758.jpg",
    goals: 220
  },
  {
    name: "Kevin De Bruyne",
    clubs: ["Genk", "Chelsea", "Werder Bremen", "Wolfsburg", "Man City"],
    nationality: "Belgium",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250008901.jpg",
    goals: 100
  },
  {
    name: "Luka Modrić",
    clubs: ["Dinamo Zagreb", "Tottenham", "Real"],
    nationality: "Croatia",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/74699.jpg",
    goals: 45
  },
  {
    name: "Karim Benzema",
    clubs: ["Lyon", "Real", "Al-Ittihad"],
    nationality: "France",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/864.png",
    goals: 450
  },
  {
    name: "Robert Lewandowski",
    clubs: ["Znicz Pruszkow", "Lech Poznań", "Dortmund", "Bayern", "Barça"],
    nationality: "Poland",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250002096.jpg",
    goals: 640
  },
  {
    name: "Virgil van Dijk",
    clubs: ["Groningen", "Celtic", "Southampton", "Liverpool"],
    nationality: "Netherlands",
    img: "hhttps://img.uefa.com/imgml/TP/players/1/2025/324x324/50327420.jpg",
    goals: 30
  },
  {
    name: "Gianluigi Donnarumma",
    clubs: ["Milan", "PSG"],
    nationality: "Italy",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250078922.jpg",
    goals: 0
  },
  {
    name: "Antoine Griezmann",
    clubs: ["Real Sociedad", "Atletico", "Barça", "Atletico"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250019498.jpg",
    goals: 280
  },
  {
    name: "Toni Kroos",
    clubs: ["Bayern", "Bayer Leverkusen", "Real"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/103147.jpg",
    goals: 100
  },
  {
    name: "Jude Bellingham",
    clubs: ["Birmingham", "Dortmund", "Real"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250128377.jpg",
    goals: 50
  },
  {
    name: "Mohamed Salah",
    clubs: ["Basel", "Chelsea", "Fiorentina", "Roma", "Liverpool"],
    nationality: "Egypt",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250052469.jpg",
    goals: 320
  },
  {
    name: "Riyad Mahrez",
    clubs: ["Le Havre", "Leicester", "Man City", "Al-Ahli"],
    nationality: "Algeria",
    img: "https://cdn.futwiz.com/assets/img/fifa20/faces/204485.png",
    goals: 130
  },
  {
    name: "Sadio Mane",
    clubs: ["Metz", "Salzburg", "Southampton", "Liverpool", "Bayern", "Al Nassr"],
    nationality: "Senegal",
    img: "https://fifastatic.fifaindex.com/FIFA22/players/208722.png",
    goals: 210
  },
  {
    name: "Romelu Lukaku",
    clubs: ["Anderlecht", "Chelsea", "West Brom", "Everton", "Man Utd", "Inter", "Roma"],
    nationality: "Belgium",
    img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250010802.jpg",
    goals: 340
  },
  {
    name: "Angel Di María",
    clubs: ["Rosario Central", "Benfica", "Real", "Man Utd", "PSG", "Juve", "Benfica"],
    nationality: "Argentina",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/1905153.jpg",
    goals: 160
  },
  {
    name: "Pedri",
    clubs: ["Las Palmas", "Barça"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250143693.jpg",
    goals: 18
  },
  {
    name: "Marco Verratti",
    clubs: ["Pescara", "PSG", "Al-Arabi"],
    nationality: "Italy",
    img: "https://i.ibb.co/cSGm1QH0/verratti.webp",
    goals: 12
  },
  {
    name: "Philippe Coutinho",
    clubs: ["Vasco da Gama", "Inter", "Espanyol", "Liverpool", "Barça", "Bayern", "Aston Villa", "Al Duhail"],
    nationality: "Brazil",
    img: "https://static.fctables.com/upload/tn/tnrb058a234f7e17d0/philippe-coutinho.png",
    goals: 108
  },
  {
    name: "James Rodríguez",
    clubs: ["Envigado", "Banfield", "Porto", "Monaco", "Real", "Bayern", "Everton", "Al-Rayyan", "Olympiacos"],
    nationality: "Colombia",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/8370.png",
    goals: 101
  },
  {
    name: "Marcelo",
    clubs: ["Fluminense", "Real", "Olympiacos"],
    nationality: "Brazil",
    img: "https://cdn.futbin.com/content/fifa19/img/players/176676.png",
    goals: 38
  },
  {
    name: "Raphaël Varane",
    clubs: ["Lens", "Real", "Man Utd"],
    nationality: "France",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/887.png",
    goals: 17
  },
  {
    name: "Marquinhos",
    clubs: ["Corinthians", "Roma", "PSG"],
    nationality: "Brazil",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250064064.jpg",
    goals: 40
  },
  {
    name: "Ivan Rakitic",
    clubs: ["Basel", "Schalke", "Sevilla", "Barça", "Sevilla"],
    nationality: "Croatia",
    img: "https://img.uefa.com/imgml/TP/players/1/2024/324x324/97744.jpg",
    goals: 94
  },
  {
    name: "Joao Felix",
    clubs: ["Benfica", "Atletico", "Chelsea", "Barça"],
    nationality: "Portugal",
    img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250101463.jpg",
    goals: 63
  },
  {
    name: "Alvaro Morata",
    clubs: ["Real", "Juve", "Chelsea", "Atletico", "Galatasaray"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250024456.jpg",
    goals: 145
  },
  {
    name: "Ander Herrera",
    clubs: ["Zaragoza", "Athletic Bilbao", "Man Utd", "PSG", "Athletic Bilbao"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250014680.jpg",
    goals: 37
  },
  {
    name: "Rodri",
    clubs: ["Villarreal", "Atletico", "Man City"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250082664.jpg",
    goals: 34
  },
  {
    name: "Achraf Hakimi",
    clubs: ["Real", "Dortmund", "Inter", "PSG"],
    nationality: "Morocco",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250088061.jpg",
    goals: 40
  },
  {
    name: "Mats Hummels",
    clubs: ["Bayern", "Dortmund", "Bayern", "Dortmund"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/106587.jpg",
    goals: 38
  },
  {
    name: "Ilkay Gundogan",
    clubs: ["Nürnberg", "Dortmund", "Man City", "Barça"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250005335.jpg",
    goals: 82
  },
  {
    name: "Bernardo Silva",
    clubs: ["Benfica", "Monaco", "Man City"],
    nationality: "Portugal",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250059115.jpg",
    goals: 60
  },
  {
    name: "Frenkie de Jong",
    clubs: ["Willem II", "Ajax", "Barça"],
    nationality: "Netherlands",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/50327423.jpg",
    goals: 20
  },
  {
    name: "Matthijs de Ligt",
    clubs: ["Ajax", "Juve", "Bayern"],
    nationality: "Netherlands",
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/50327424.jpg",
    goals: 20
  },
  {
    name: "Rodrygo",
    clubs: ["Santos", "Real"],
    nationality: "Brazil",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250132829.jpg",
    goals: 50
  },
  {
    name: "Vinicius Jr",
    clubs: ["Flamengo", "Real"],
    nationality: "Brazil",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250121533.jpg",
    goals: 75
  },
  {
    name: "Federico Valverde",
    clubs: ["Peñarol", "Real", "Deportivo"],
    nationality: "Uruguay",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250101284.jpg",
    goals: 19
  },
  {
    name: "Aurelien Tchouaméni",
    clubs: ["Bordeaux", "Monaco", "Real"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250105244.jpg",
    goals: 10
  },
  {
    name: "Antonio Rüdiger",
    clubs: ["Stuttgart", "Roma", "Chelsea", "Real"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250028211.jpg",
    goals: 20
  },
  {
    name: "Ferland Mendy",
    clubs: ["Le Havre", "Lyon", "Real"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250112803.jpg",
    goals: 6
  },
  {
    name: "Thibaut Courtois",
    clubs: ["Genk", "Chelsea", "Atletico", "Real"],
    nationality: "Belgium",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250011668.jpg",
    goals: 0
  },
  {
    name: "Dani Ceballos",
    clubs: ["Betis", "Real", "Arsenal", "Real"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250086709.jpg",
    goals: 12
  },
  {
    name: "Casemiro",
    clubs: ["São Paulo", "Real", "Porto", "Real", "Man Utd"],
    nationality: "Brazil",
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250057680.jpg",
    goals: 45
  },
  {
    name: "Christian Eriksen",
    clubs: ["Ajax", "Tottenham", "Inter", "Brentford", "Man Utd"],
    nationality: "Denmark",
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/1905884.jpg",
    goals: 57
  },
  {
    name: "Manuel Akanji",
    clubs: ["Basel", "Dortmund", "Man City"],
    nationality: "Switzerland",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250085369.jpg",
    goals: 17
  },
  {
    name: "Nathan Aké",
    clubs: ["Chelsea", "Watford", "Bournemouth", "Man City"],
    nationality: "Netherlands",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250027008.jpg",
    goals: 24
  },
  {
    name: "Joško Gvardiol",
    clubs: ["Dinamo Zagreb", "Leipzig", "Man City"],
    nationality: "Croatia",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250127284.jpg",
    goals: 23
  },
  {
    name: "Mateo Kovačić",
    clubs: ["Dinamo Zagreb", "Inter", "Real", "Chelsea", "Man City"],
    nationality: "Croatia",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250023551.jpg",
    goals: 29
  },
  {
    name: "Jules Koundé",
    clubs: ["Bordeaux", "Sevilla", "Barça"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250096309.jpg",
    goals: 20
  },
  {
    name: "Raphinha",
    clubs: ["Avaí", "Vitória Guimarães", "Sporting", "Rennes", "Leeds", "Barça"],
    nationality: "Brazil",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250112880.jpg",
    goals: 51
  },
  {
    name: "Dani Olmo",
    clubs: ["Barça", "Dinamo Zagreb", "Leipzig"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250081720.jpg",
    goals: 82
  },
  {
    name: "Wojciech Szczęsny",
    clubs: ["Arsenal", "Brentford", "Roma", "Juve", "Barça"],
    nationality: "Poland",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/108501.jpg",
    goals: 0
  },
  {
    name: "Trent Alexander-Arnold",
    clubs: ["Liverpool"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250076357.jpg",
    goals: 16
  },
  {
    name: "Federico Chiesa",
    clubs: ["Fiorentina", "Juve", "Liverpool"],
    nationality: "Italy",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250090398.jpg",
    goals: 77
  },
  {
    name: "Cody Gakpo",
    clubs: ["PSV", "Liverpool"],
    nationality: "Netherlands",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250096849.jpg",
    goals: 130
  },
  {
    name: "Ryan Gravenberch",
    clubs: ["Ajax", "Bayern", "Liverpool"],
    nationality: "Netherlands",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250113001.jpg",
    goals: 27
  },
  {
    name: "Alisson Becker",
    clubs: ["Internacional", "Roma", "Liverpool"],
    nationality: "Brazil",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250099867.jpg",
    goals: 0
  },
  {
    name: "Ibrahima Konate",
    clubs: ["Sochaux", "Leipzig", "Liverpool"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250091013.jpg",
    goals: 4
  },
  {
    name: "Ousmane Dembele",
    clubs: ["Rennes", "Dortmund", "Barça", "PSG"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250066886.jpg",
    goals: 48
  },
  {
    name: "Bradley Barcola",
    clubs: ["Lyon", "PSG"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250134138.jpg",
    goals: 8
  },
  {
    name: "Fabian Ruiz",
    clubs: ["Betis", "Napoli", "PSG"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250115436.jpg",
    goals: 28
  },
  {
    name: "Lucas Hernandez",
    clubs: ["Atletico", "Bayern", "PSG"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250063803.jpg",
    goals: 4
  },
  {
    name: "Khvicha Kvaratskhelia",
    clubs: ["Dinamo Tbilisi", "Rubin Kazan", "Napoli"],
    nationality: "Georgia",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250101808.jpg",
    goals: 27
  },
  {
    name: "Julian Alvarez",
    clubs: ["River Plate", "Man City"],
    nationality: "Argentina",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250172668.jpg",
    goals: 74
  },
  {
    name: "Clement Lenglet",
    clubs: ["Nancy", "Sevilla", "Barça", "Tottenham", "Aston Villa"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250042779.jpg",
    goals: 13
  },
  {
    name: "Axel Witsel",
    clubs: ["Standard Liège", "Benfica", "Zenit", "Tianjin Tianhai", "Dortmund", "Atletico"],
    nationality: "Belgium",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/103335.jpg",
    goals: 48
  },
  {
    name: "Leroy Sane",
    clubs: ["Schalke", "Man City", "Bayern"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250063984.jpg",
    goals: 84
  },
  {
    name: "Danilo Pereira",
    clubs: ["Parma", "Marítimo", "Porto", "PSG"],
    nationality: "Portugal",
    img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250014528.jpg",
    goals: 27
  },
  {
    name: "Joao Cancelo",
    clubs: ["Benfica", "Valencia", "Inter", "Juve", "Man City", "Bayern", "Barça"],
    nationality: "Portugal",
    img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250024746.jpg",
    goals: 17
  },
  {
    name: "David Alaba",
    clubs: ["Austria Wien", "Bayern", "Real"],
    nationality: "Austria",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/1906540.jpg",
    goals: 42
  },
  {
    name: "Randal Kolo Muani",
    clubs: ["Nantes", "Eintracht Frankfurt", "PSG"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250146926.jpg",
    goals: 52
  },
  {
    name: "Manuel Locatelli",
    clubs: ["Milan", "Sassuolo", "Juve"],
    nationality: "Italy",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250066747.jpg",
    goals: 11
  },
  {
    name: "Arkadiusz Milik",
    clubs: ["Górnik Zabrze", "Bayer Leverkusen", "Augsburg", "Ajax", "Napoli", "Marseille", "Juve"],
    nationality: "Poland",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250043124.jpg",
    goals: 131
  },
  {
    name: "Timothy Weah",
    clubs: ["PSG", "Celtic", "Lille", "Juve"],
    nationality: "USA",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250101472.jpg",
    goals: 12
  },
  {
    name: "Alessandro Florenzi",
    clubs: ["Roma", "Crotone", "Valencia", "PSG", "Milan"],
    nationality: "Italy",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250026962.jpg",
    goals: 27
  },
  {
    name: "Kyle Walker",
    clubs: ["Sheffield United", "Tottenham", "QPR", "Aston Villa", "Man City"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250010259.jpg",
    goals: 7
  },
  {
    name: "Raheem Sterling",
    clubs: ["Liverpool", "Man City", "Chelsea"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250024795.jpg",
    goals: 139
  },
  {
    name: "Moise Kean",
    clubs: ["Juve", "Hellas Verona", "Everton", "PSG"],
    nationality: "Italy",
    img: "https://i.ibb.co/k3XnQgg/moise.webp",
    goals: 42
  },
  {
    name: "Lucas Chevalier",
    clubs: ["Lille"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250135068.jpg",
    goals: 0
  },
  {
    name: "Samuel Umtiti",
    clubs: ["Lyon", "Barça", "Lecce", "Lille"],
    nationality: "France",
    img: "https://game-assets.fut.gg/2025/player-item/25-205600.98fc2b07bc16a79867e3d13cd1721c94318ecfbdcb4632f6a5a1efd2b95f83b8.webp",
    goals: 4
  },
  {
    name: "Lenny Yoro",
    clubs: ["Lille"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/14/2025/75x75/250165232.jpg",
    goals: 3
  },
  {
    name: "Benjamin Andre",
    clubs: ["Ajaccio", "Rennes", "Lille"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250025791.jpg",
    goals: 25
  },
  {
    name: "Angel Gomes",
    clubs: ["Man Utd", "Boavista", "Lille"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250104089.jpg",
    goals: 13
  },
  {
    name: "Remy Cabella",
    clubs: ["Montpellier", "Marseille", "Newcastle", "Saint-Étienne", "Krasnodar", "Lille"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250010223.jpg",
    goals: 73
  },
  {
    name: "Jonathan David",
    clubs: ["Gent", "Lille"],
    nationality: "Canada",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250102035.jpg",
    goals: 84
  },
  {
    name: "David Raya",
    clubs: ["Blackburn", "Brentford", "Arsenal"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250171278.jpg"
  },
  {
    name: "William Saliba",
    clubs: ["Saint-Étienne", "Nice", "Marseille", "Arsenal"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250127439.jpg"
  },
  {
    name: "Kieran Tierney",
    clubs: ["Celtic", "Arsenal", "Real Sociedad"],
    nationality: "Scotland",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250067541.jpg"
  },
  {
    name: "Ben White",
    clubs: ["Brighton", "Leeds", "Arsenal"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250156002.jpg"
  },
  {
    name: "Gabriel",
    clubs: ["Lille", "Arsenal"],
    nationality: "Brazil",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250131901.jpg"
  },
  {
    name: "Jurrien Timber",
    clubs: ["Ajax", "Arsenal"],
    nationality: "Netherlands",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250101728.jpg"
  },
  {
    name: "Takehiro Tomiyasu",
    clubs: ["Sint-Truiden", "Bologna", "Arsenal"],
    nationality: "Japan",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250177964.jpg"
  },
  {
    name: "Leandro Trossard",
    clubs: ["Genk", "Brighton", "Arsenal"],
    nationality: "Belgium",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250023009.jpg"
  },
  {
    name: "Mikel Merino",
    clubs: ["Osasuna", "Dortmund", "Newcastle", "Real Sociedad", "Arsenal"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250080572.jpg"
  },
  {
    name: "Bukayo Saka",
    clubs: ["Arsenal"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250106939.jpg"
  },
  {
    name: "Gabriel Martinelli",
    clubs: ["Ituano", "Arsenal"],
    nationality: "Brazil",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250134304.jpg"
  },
  {
    name: "Robin Olsen",
    clubs: ["Malmö", "PAOK", "Copenhagen", "Roma", "Everton", "Sheffield United", "Aston Villa"],
    nationality: "Sweden",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250049713.jpg"
  },
  {
    name: "Lucas Digne",
    clubs: ["Lille", "PSG", "Barça", "Roma", "Everton", "Aston Villa"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250014002.jpg"
  },
  {
    name: "Pau Torres",
    clubs: ["Villarreal", "Malaga", "Aston Villa"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250088461.jpg"
  },
  {
    name: "Ian Maatsen",
    clubs: ["Chelsea", "Charlton", "Coventry", "Burnley", "Dortmund"],
    nationality: "Netherlands",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250117581.jpg"
  },
  {
    name: "Boubacar Kamara",
    clubs: ["Marseille", "Aston Villa"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250091722.jpg"
  },
  {
    name: "Ross Barkley",
    clubs: ["Everton", "Chelsea", "Aston Villa", "Nice", "Luton Town"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250007655.jpg"
  },
  {
    name: "Jacob Ramsey",
    clubs: ["Aston Villa", "Doncaster"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250163250.jpg"
  },
  {
    name: "Leon Bailey",
    clubs: ["Genk", "Bayer Leverkusen", "Aston Villa"],
    nationality: "Jamaica",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250099054.jpg"
  },
  {
    name: "Morgan Rogers",
    clubs: ["Man City", "Lincoln City", "Middlesbrough", "Aston Villa"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250117513.jpg"
  },
  {
    name: "Marco Asensio",
    clubs: ["Mallorca", "Real", "PSG", "Aston Villa"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250080570.jpg"
  },
  {
    name: "Gregor Kobel",
    clubs: ["Hoffenheim", "Stuttgart", "Dortmund"],
    nationality: "Switzerland",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250069832.jpg"
  },
  {
    name: "Nico Schlotterbeck",
    clubs: ["Freiburg", "Dortmund"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250134856.jpg"
  },
  {
    name: "Giovanni Reyna",
    clubs: ["Dortmund", "Nottingham Forest"],
    nationality: "USA",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250134661.jpg"
  },
  {
    name: "Felix Nmecha",
    clubs: ["Man City", "Wolfsburg", "Dortmund"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250112224.jpg"
  },
  {
    name: "Julian Brandt",
    clubs: ["Leverkusen", "Dortmund"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250046522.jpg"
  },
  {
    name: "Carney Chukwuemeka",
    clubs: ["Aston Villa", "Chelsea", "Dortmund"],
    nationality: "England",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250169276.jpg"
  },
  {
    name: "Serhou Guirassy",
    clubs: ["Lille", "Cologne", "Stuttgart", "Dortmund"],
    nationality: "Guinea",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250080553.jpg"
  },
  {
    name: "Karim Adeyemi",
    clubs: ["Salzburg", "Dortmund"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250127347.jpg"
  },
  {
    name: "Ronald Araujo",
    clubs: ["Barça", "Boston River"],
    nationality: "Uruguay",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250134170.jpg"
  },
  {
    name: "Andreas Christensen",
    clubs: ["Chelsea", "Barça", "Borussia Mönchengladbach"],
    nationality: "Denmark",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250041718.jpg"
  },
  {
    name: "Alejandro Balde",
    clubs: ["Barça"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250135416.jpg"
  },
  {
    name: "Pau Cubarsí",
    clubs: ["Barça"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250176453.jpg"
  },
  {
    name: "Inigo Martínez",
    clubs: ["Real Sociedad", "Athletic Bilbao", "Barça"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250040471.jpg"
  },
  {
    name: "Eric García",
    clubs: ["Man City", "Barça", "Girona"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250103561.jpg"
  },
  {
    name: "Gavi",
    clubs: ["Barça"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250139255.jpg"
  },
  {
    name: "Ferran Torres",
    clubs: ["Valencia", "Man City", "Barça"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250088320.jpg"
  },
  {
    name: "Ansu Fati",
    clubs: ["Barça", "Brighton"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250117471.jpg"
  },
  {
    name: "Pau Víctor",
    clubs: ["Girona", "Barça", "Sabadell"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250193534.jpg"
  },
  {
    name: "Lamine Yamal",
    clubs: ["Barça"],
    nationality: "Spain",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250176450.jpg"
  },
  {
    name: "Joshua Kimmich",
    clubs: ["Stuttgart", "Leipzig", "Bayern"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250070417.jpg"
  },
  {
    name: "Leon Goretzka",
    clubs: ["Bochum", "Schalke", "Bayern"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250041771.jpg"
  },
  {
    name: "Kingsley Coman",
    clubs: ["PSG", "Juve", "Bayern"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250054949.jpg"
  },
  {
    name: "Thomas Muller",
    clubs: ["Bayern"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250003318.jpg"
  },
  {
    name: "Alphonso Davies",
    clubs: ["Vancouver Whitecaps", "Bayern"],
    nationality: "Canada",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250128120.jpg"
  },
  {
    name: "Jamal Musiala",
    clubs: ["Bayern", "Chelsea"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250124430.jpg"
  },
  {
    name: "Yann Sommer",
    clubs: ["Basel", "Borussia Mönchengladbach", "Bayern", "Inter"],
    nationality: "Switzerland",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/97746.jpg"
  },
  {
    name: "Federico Dimarco",
    clubs: ["Inter", "Parma", "Hellas Verona", "Empoli", "Ascoli"],
    nationality: "Italy",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250056189.jpg"
  },
  {
    name: "Matteo Darmian",
    clubs: ["Milan", "Padova", "Palermo", "Torino", "Man Utd", "Parma", "Inter"],
    nationality: "Italy",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/103806.jpg"
  },
  {
    name: "Hakan Calhanoglu",
    clubs: ["Karlsruhe", "Hamburg", "Leverkusen", "Milan", "Inter"],
    nationality: "Turkey",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250022829.jpg"
  },
  {
    name: "Henrikh Mkhitaryan",
    clubs: ["Pyunik", "Metalurh Donetsk", "Shakhtar", "Dortmund", "Man Utd", "Arsenal", "Roma", "Inter"],
    nationality: "Armenia",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/98023.jpg"
  },
  {
    name: "Davide Frattesi",
    clubs: ["Roma", "Ascoli", "Empoli", "Monza", "Sassuolo", "Inter"],
    nationality: "Italy",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250088150.jpg"
  },
  {
    name: "Lautaro Martínez",
    clubs: ["Racing Club", "Inter"],
    nationality: "Argentina",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250118281.jpg"
  },
  {
    name: "Manuel Ugarte",
    nationality: "Uruguay",
    clubs: ["Fénix", "Famalicão", "Sporting", "PSG", "Man Utd"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/75x75/250161762.jpg"
  },
  {
    name: "Andre Onana",
    nationality: "Cameroon",
    clubs: ["Barça", "Ajax", "Inter", "Man Utd"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/75x75/250076171.jpg"
  },
  {
    name: "Mario Gotze",
    nationality: "Germany",
    clubs: ["Dortmund", "Bayern", "PSV", "Eintracht Frankfurt"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250007605.jpg"
  },
  {
    name: "Elye Wahi",
    nationality: "France",
    clubs: ["Caen", "Montpellier", "Lens"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250126805.jpg"
  },
  {
    name: "Michy Batshuayi",
    nationality: "Belgium",
    clubs: ["Standard Liège", "Marseille", "Chelsea", "Dortmund", "Valencia", "Crystal Palace", "Beşiktaş", "Fenerbahçe"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250038932.jpg"
  },
  {
    name: "Matteo Guendouzi",
    nationality: "France",
    clubs: ["Lorient", "Arsenal", "Hertha Berlin", "Marseille", "Lazio"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250122927.jpg"
  },
  {
    name: "Duje Caleta-Car",
    nationality: "Croatia",
    clubs: ["Pasching", "Liefering", "Red Bull Salzburg", "Marseille", "Southampton", "Lyon"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250058183.jpg"
  },
  {
    name: "Jordan Veretout",
    nationality: "France",
    clubs: ["Nantes", "Aston Villa", "Saint-Étienne", "Fiorentina", "Roma", "Marseille"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250017724.jpg"
  },
  {
    name: "Corentin Tolisso",
    nationality: "France",
    clubs: ["Lyon", "Bayern"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250054829.jpg"
  },
  {
    name: "Nemanja Matic",
    nationality: "Serbia",
    clubs: ["Košice", "Chelsea", "Vitesse", "Benfica", "Man Utd", "Roma", "Rennes", "Lyon"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250005348.jpg"
  },
  {
    name: "Alexandre Lacazette",
    nationality: "France",
    clubs: ["Lyon", "Arsenal"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/1908196.jpg"
  },
  {
    name: "Georges Mikautadze",
    nationality: "Georgia",
    clubs: ["Metz", "Seraing", "Ajax", "Lyon"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250155025.jpg"
  },
  {
    name: "Dejan Kulusevski",
    nationality: "Sweden",
    clubs: ["Atalanta", "Parma", "Juve", "Tottenham"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250103985.jpg"
  },
  {
    name: "Rodrigo Bentancur",
    nationality: "Uruguay",
    clubs: ["Boca Juniors", "Juve", "Tottenham"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250112826.jpg"
  },
  {
    name: "Mathys Tel",
    nationality: "France",
    clubs: ["Rennes", "Bayern"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250140936.jpg"
  },
  {
    name: "Angelino",
    nationality: "Spain",
    clubs: ["Man City", "New York City FC", "PSV", "Leipzig", "Hoffenheim", "Galatasaray", "Roma"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250064356.jpg"
  },
  {
    name: "Leandro Paredes",
    nationality: "Argentina",
    clubs: ["Boca Juniors", "Chievo Verona", "Roma", "Empoli", "Zenit", "PSG", "Juve"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250075844.jpg"
  },
  {
    name: "Manu Kone",
    nationality: "France",
    clubs: ["Toulouse", "Borussia Mönchengladbach"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250132062.jpg"
  },
  {
    name: "Paulo Dybala",
    nationality: "Argentina",
    clubs: ["Instituto", "Palermo", "Juve", "Roma"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250086333.jpg"
  },
  {
    name: "Daniele Rugani",
    nationality: "Italy",
    clubs: ["Empoli", "Juve", "Rennes", "Cagliari"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/75x75/250024963.jpg"
  },
  {
    name: "Jordan Henderson",
    nationality: "England",
    clubs: ["Sunderland", "Liverpool", "Al-Ettifaq", "Ajax"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/75x75/250010260.jpg"
  },
  {
    name: "Marcin Bulka",
    nationality: "Poland",
    clubs: ["Chelsea", "PSG", "Cartagena", "Châteauroux", "Nice"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250113102.jpg"
  },
  {
    name: "Dante",
    nationality: "Brazil",
    clubs: ["Juventude", "Lille", "Charleroi", "Standard Liège", "Mönchengladbach", "Bayern", "Wolfsburg", "Nice"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/93921.jpg"
  },
  {
    name: "Jonathan Clauss",
    nationality: "France",
    clubs: ["Strasbourg", "Avranches", "Quevilly-Rouen", "Arminia Bielefeld", "Lens", "Marseille", "Nice"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250171228.jpg"
  },
  {
    name: "Tanguy Ndombele",
    nationality: "France",
    clubs: ["Amiens", "Lyon", "Tottenham", "Napoli", "Galatasaray", "Nice"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250112778.jpg"
  },
  {
    name: "Youssoufa Moukoko",
    nationality: "Germany",
    clubs: ["St. Pauli", "Dortmund", "Nice"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250134659.jpg"
  },
  {
    name: "Dries Mertens",
    nationality: "Belgium",
    clubs: ["Gent", "AGOVV", "Utrecht", "PSV", "Napoli", "Galatasaray"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250019924.jpg"
  },
  {
    name: "Victor Osimhen",
    nationality: "Nigeria",
    clubs: ["Wolfsburg", "Charleroi", "Lille", "Napoli"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250132987.jpg"
  },
  {
    name: "Anderson Talisca",
    nationality: "Brazil",
    clubs: ["Bahia", "Benfica", "Beşiktaş", "Guangzhou Evergrande", "Al-Nassr"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250075767.jpg"
  },
  {
    name: "Edin Dzeko",
    nationality: "Bosnia and Herzegovina",
    clubs: ["Željezničar", "Teplice", "Wolfsburg", "Man City", "Roma", "Inter", "Fenerbahçe"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/72048.jpg"
  },
  {
    name: "Filip Kostic",
    nationality: "Serbia",
    clubs: ["Radnički Kragujevac", "Groningen", "Stuttgart", "Hamburger SV", "Eintracht Frankfurt", "Juve"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250024301.jpg"
  },
  {
    name: "Dusan Tadic",
    nationality: "Serbia",
    clubs: ["Vojvodina", "Groningen", "Twente", "Southampton", "Ajax", "Fenerbahçe"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/1902464.jpg"
  },
  {
    name: "Allan Saint-Maximin",
    nationality: "France",
    clubs: ["Saint-Étienne", "Monaco", "Hannover 96", "Bastia", "Nice", "Newcastle", "Al-Ahli"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/324x324/250062402.jpg"
  },
  {
    name: "Nuno Tavares",
    nationality: "Portugal",
    clubs: ["Benfica", "Arsenal", "Marseille", "Nottingham Forest"],
    img: "https://img.uefa.com/imgml/TP/players/14/2025/75x75/250113188.jpg"
  },
  {
    name: "Alejandro Grimaldo",
    nationality: "Spain",
    clubs: ["Barça", "Benfica", "Bayer Leverkusen"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250042422.jpg"
  },
  {
    name: "Nordi Mukiele",
    nationality: "France",
    clubs: ["Laval", "Montpellier", "Leipzig", "PSG"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250121329.jpg"
  },
  {
    name: "Jeremie Frimpong",
    nationality: "Netherlands",
    clubs: ["Man City", "Celtic", "Bayer Leverkusen"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250113276.jpg"
  },
  {
    name: "Patrik Schick",
    nationality: "Czech Republic",
    clubs: ["Sparta Prague", "Bohemians 1905", "Sampdoria", "Roma", "Leipzig", "Bayer Leverkusen"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250055110.jpg"
  },
  {
    name: "Sergino Dest",
    nationality: "United States",
    clubs: ["Ajax", "Barça", "Milan", "PSV Eindhoven"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250112998.jpg"
  },
  {
    name: "Ivan Perisic",
    nationality: "Croatia",
    clubs: ["Sochaux", "Roeselare", "Club Brugge", "Dortmund", "Wolfsburg", "Inter", "Bayern", "Tottenham", "Hajduk Split", "PSV Eindhoven"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/103310.jpg"
  },
  {
    name: "Thilo Kehrer",
    nationality: "Germany",
    clubs: ["Schalke 04", "PSG", "West Ham United", "Monaco"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250055663.jpg"
  },
  {
    name: "Folarin Balogun",
    nationality: "United States",
    clubs: ["Arsenal", "Middlesbrough", "Reims", "Monaco"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250118797.jpg"
  },
  {
    name: "Viktor Gyokeres",
    nationality: "Sweden",
    clubs: ["IF Brommapojkarna", "Brighton", "St. Pauli", "Swansea City", "Coventry City", "Sporting"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250105927.jpg"
  },
  {
    name: "Mike Maignan",
    nationality: "France",
    clubs: ["PSG", "Lille", "Milan"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250042780.jpg"
  },
  {
    name: "Theo Hernandez",
    nationality: "France",
    clubs: ["Atletico", "Alavés", "Real", "Milan"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250076126.jpg"
  },
  {
    name: "Pau Lopez",
    nationality: "Spain",
    clubs: ["Espanyol", "Tottenham", "Betis", "Roma", "Marseille", "Toluca"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250086637.jpg"
  },
  {
    name: "Donny van de Beek",
    nationality: "Netherlands",
    clubs: ["Ajax", "Man Utd", "Everton", "Girona"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250081207.jpg"
  },
  {
    name: "Xavi Simons",
    nationality: "Netherlands",
    clubs: ["Barça", "PSG", "PSV Eindhoven", "Leipzig"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250128451.jpg"
  },
  {
    name: "Yussuf Poulsen",
    nationality: "Denmark",
    clubs: ["Lyngby", "Leipzig"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250022869.jpg"
  },
  {
    name: "Loïs Openda",
    nationality: "Belgium",
    clubs: ["Club Brugge", "Vitesse", "Lens", "Leipzig"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250096954.jpg"
  },
  {
    name: "Andre Silva",
    nationality: "Portugal",
    clubs: ["Porto", "Milan", "Sevilla", "Eintracht Frankfurt", "Leipzig", "Werder Bremen"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250042521.jpg"
  },
  {
    name: "Dominik Szoboszlai",
    nationality: "Hungary",
    clubs: ["FC Liefering", "Red Bull Salzburg", "Leipzig", "Liverpool"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250104066.jpg"
  },
  {
    name: "Alexis Mac Allister",
    nationality: "Argentina",
    clubs: ["Argentinos Juniors", "Boca Juniors", "Brighton", "Liverpool"],
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250172672.jpg"
  },
  {
    name: "Malo Gusto",
    nationality: "France",
    clubs: ["Lyon", "Chelsea"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250134145.jpg"
  },
  {
    name: "Marc Cucurella",
    nationality: "Spain",
    clubs: ["Barça", "Eibar", "Getafe", "Chelsea"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250076168.jpg"
  },
  {
    name: "Christopher Nkunku",
    nationality: "France",
    clubs: ["PSG", "Leipzig", "Chelsea"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250076654.jpg"
  },
  {
    name: "Jadon Sancho",
    nationality: "England",
    clubs: ["Watford", "Man City", "Dortmund", "Man Utd", "Chelsea"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250102216.jpg"
  },
  {
    name: "Cole Palmer",
    nationality: "England",
    clubs: ["Man City", "Chelsea"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250124282.jpg"
  },
  {
    name: "David de Gea",
    nationality: "Spain",
    clubs: ["Atletico", "Man Utd", "Fiorentina"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/1901746.jpg"
  },
  {
    name: "Robin Gosens",
    nationality: "Germany",
    clubs: ["Vitesse", "Dordrecht", "Heracles Almelo", "Atalanta", "Inter", "Union Berlin", "Fiorentina"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250062606.jpg"
  },
  {
    name: "Yacine Adli",
    nationality: "France",
    clubs: ["PSG", "Bordeaux", "Milan", "Fiorentina"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250101473.jpg"
  },
  {
    name: "Moise Kean",
    nationality: "Italy",
    clubs: ["Juve", "Verona", "Everton", "PSG", "Fiorentina"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250087919.jpg"
  },
  {
    name: "Hector Bellerín",
    nationality: "Spain",
    clubs: ["Barça", "Arsenal", "Betis"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250047082.jpg"
  },
  {
    name: "Giovani Lo Celso",
    nationality: "Argentina",
    clubs: ["Rosario Central", "PSG", "Betis", "Tottenham"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250100013.jpg"
  },
  {
    name: "Antony",
    nationality: "Brazil",
    clubs: ["São Paulo", "Ajax", "Man Utd", "Betis"],
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250144211.jpg"
  },
  {
    name: "Kieran Trippier",
    clubs: ["Tottenham", "Atletico", "Man City", "Burnley", "Newcastle"],
    nationality: "England",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/5439.png"
  },
  {
    name: "Serge Aurier",
    clubs: ["Lens", "Toulouse", "Villareal", "Nottingham", "PSG", "Tottenham"],
    nationality: "Ivory Coast",
    img: "https://cdn.futbin.com/content/fifa21/img/players/197853.png"
  },
  {
    name: "Khephren Thuram",
    clubs: ["Monaco", "Nice", "Juve"],
    nationality: "France",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250106722.jpg"
  },
  {
    name: "Carlos Soler",
    clubs: ["Valencia", "PSG"],
    nationality: "Spain",
    img: "https://i.ibb.co/4prXTqc/soler.webp"
  },
  {
    name: "Darwin Nunez",
    clubs: ["Peñarol", "Almería", "Benfica", "Liverpool"],
    nationality: "Uruguay",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250144965.jpg"
  },
  {
    name: "Houssem Aouar",
    clubs: ["Lyon", "Roma"],
    nationality: "Algeria",
    img: "https://cdn.sofifa.net/players/234/906/23_360.png"
  },
  {
    name: "Kalidou Koulibaly",
    clubs: ["Metz", "Genk", "Napoli", "Chelsea", "Al-Hilal"],
    nationality: "Senegal",
    img: "https://api.efootballdb.com/assets/2022/players/16879973_.png.webp"
  },
  {
    name: "Thiago Alcantara",
    clubs: ["Barça", "Bayern", "Liverpool"],
    nationality: "Spain",
    img: "https://cdn.resfu.com/img_data/players/medium/29470.jpg"
  },
  {
    name: "Thomas Meunier",
    clubs: ["Brugge", "PSG", "Dortmund", "Trabzonspor"],
    nationality: "Belgium",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/8665.png"
  },
  {
    name: "Pablo Sarabia",
    clubs: ["Sevilla", "PSG", "Sporting", "Wolverhampton"],
    nationality: "Spain",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/1143.png"
  },
  {
    name: "Moussa Diaby",
    clubs: ["PSG", "Bayer Leverkusen", "Aston Villa"],
    nationality: "France",
    img: "https://fifastatic.fifaindex.com/FIFA24/players/241852.png"
  },
  {
    name: "Kepa",
    clubs: ["Chelsea", "Real"],
    nationality: "Spain",
    img: "https://cdn.resfu.com/img_data/players/medium/139552.jpg"
  },
  {
    name: "Adama Traore",
    clubs: ["Barça", "Aston Villa", "Middlesbrough", "Wolverhampton", "Fulham"],
    nationality: "Spain",
    img: "https://futbol-11.com/images/1174.png"
  },
  {
    name: "Georginio Wijnaldum",
    clubs: ["Feyenoord", "PSV", "Newcastle", "Liverpool", "PSG", "Roma"],
    nationality: "Netherlands",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/4144.vresize.252.252.medium.74.png"
  }
];
