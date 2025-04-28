const retiredPlayerData = [
  {
    name: "Mauro Icardi",
    clubs: ["Sampdoria", "Inter", "PSG", "Galatasaray"],
    nationality: "Argentina",
    img: "https://kayserispor.gen.tr/uploads/icardi.png",
    goals: 190
  },
  {
    name: "Alex",
    clubs: ["Santos", "PSV", "Chelsea", "PSG", "Milan"],
    nationality: "Brazil",
    img: "https://i.ibb.co/XpSvxL2/alex.png",
    goals: 34
  },
  {
    name: "Mikel Arteta",
    clubs: ["PSG", "Rangers", "Real Sociedad", "Everton", "Arsenal"],
    nationality: "Spain",
    img: "https://i.namu.wiki/i/AI_LsJXu7DgTep0uM3rpJM9CDfZaTZB8tMI3F0DuCtW5T-mT1UynzrTg-lSBsusnxnrGFj5CbctQeYVHYr8YiA.webp",
    goals: 61
  },
  {
    name: "Ezequiel Lavezzi",
    clubs: ["San Lorenzo", "Napoli", "PSG", "Hebei China Fortune"],
    nationality: "Argentina",
    img: "https://i.ibb.co/qrjGSCF/lavezzi.png",
    goals: 139
  },
  {
    name: "Hatem Ben Arfa",
    nationality: "France",
    clubs: ["Lyon", "Marseille", "Newcastle", "Hull City", "Nice", "PSG", "Rennes", "Bordeaux", "Lille"],
    img: "https://cdn.futwiz.com/assets/img/fifa17/faces/161648.png",
    goals: 67
  },
  {
    name: "Gennaro Gattuso",
    nationality: "Italy",
    clubs: ["Milan"],
    img: "https://sortitoutsi.b-cdn.net/uploads/extractedfiles/e4ecb909864a9dcc96d1989dd963be68/FC%20Sion/3801681.png",
    goals: 13
  },
  {
    name: "William Gallas",
    nationality: "France",
    clubs: ["Chelsea", "Arsenal", "Tottenham", "Marseille", "Caen"],
    img: "https://cdn.staticneo.com/w/footballmanager/Gallasspurs.jpg",
    goals: 26
  },
  {
    name: "Emmanuel Petit",
    clubs: ["Monaco", "Arsenal", "Barça", "Chelsea"],
    nationality: "France",
    img: "https://i.ibb.co/dMyrwHC/petit.png",
    goals: 6
  },
  {
    name: "Kostas Mitroglou",
    clubs: ["Borussia Mönchengladbach II", "Olympiacos", "Fulham", "Benfica", "Marseille", "Galatasaray", "Aris", "Apollon Smyrnis"],
    nationality: "Greece",
    img: "https://cdn.futbin.com/content/fifa21/img/players/183483.png",
    goals: 151
  },
  {
    name: "Mario Mandzukic",
    clubs: ["Marsonia", "Zagreb", "Dinamo Zagreb", "Wolfsburg", "Bayern", "Atletico", "Juve", "Milan", "Al-Duhail"],
    nationality: "Croatia",
    img: "https://s.hs-data.com/gfx/person/cropped/250x250/7677.png?",
    goals: 197
  },
  {
    name: "Nemanja Matic",
    clubs: ["Košice", "Chelsea", "Vitesse", "Benfica", "Chelsea", "Man Utd", "Roma", "Rennes"],
    nationality: "Serbia",
    img: "https://img.uefa.com/imgml/TP/players/2019/2025/324x324/250005348.jpg",
    goals: 26
  },
  {
    name: "Victor Lindelof",
    clubs: ["Västerås", "Benfica", "Man Utd"],
    nationality: "Sweden",
    img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250055905.jpg",
    goals: 9
  },
  {
    name: "Martin Demichelis",
    clubs: ["River Plate", "Bayern", "Málaga", "Man City", "Espanyol"],
    nationality: "Argentina",
    img: "https://i.ibb.co/dcZzy1y/demichelis.png",
    goals: 41
  },
  {
    name: "Leonardo",
    clubs: ["Flamengo", "São Paulo", "Kashima Antlers", "Valencia", "PSG", "Milan"],
    nationality: "Brazil",
    img: "https://sortitoutsidospaces.b-cdn.net/megapacks/cutoutfaces/originals/3.10/11096.png",
    goals: 59
  },
    {
      name: "Eric Abidal",
      clubs: ["Monaco", "Lille", "Lyon", "Barça", "Olympiakos"],
      nationality: "France",
      img: "https://fifaaddict.com/fo3img/players/p7141645.png",
      goals: 9
    },
    {
      name: "Samir Nasri",
      clubs: ["Marseille", "Arsenal", "Man City", "Sevilla", "Antalyaspor", "West Ham", "Anderlecht"],
      nationality: "France",
      img: "https://static.wikia.nocookie.net/the-football-database/images/1/17/Manchester_City_S._Nasri_001.png",
      goals: 71
    },
    {
      name: "Blaise Matuidi",
      clubs: ["Troyes", "Saint-Étienne", "PSG", "Juve", "Inter Miami"],
      nationality: "France",
      img: "https://i.ibb.co/Ycynfgh/8442483.png",
      goals: 41
    },
    {
      name: "Adil Rami",
      clubs: ["Lille", "Valencia", "Milan", "Sevilla", "Marseille", "Fenerbahçe", "Boavista", "Troyes"],
      nationality: "France",
      img: "https://i.ibb.co/7QPbmpw/adil-rami.png",
      goals: 25
    },
    {
      name: "Ludovic Giuly",
      clubs: ["Lyon", "Monaco", "Barça", "Roma", "PSG", "Lorient"],
      nationality: "France",
      img: "https://i.ibb.co/Z622FNX/giuly.png",
      goals: 120
    },
    {
      name: "Patrice Evra",
      clubs: ["Monaco", "Man Utd", "Juve", "Marseille", "West Ham"],
      nationality: "France",
      img: "https://i.ibb.co/nD8dNpv/evra.png",
      goals: 12
    },
    {
      name: "Marek Hamsik",
      clubs: ["Slovan Bratislava", "Brescia", "Napoli", "Dalian Pro", "Trabzonspor"],
      nationality: "Slovakia",
      img: "https://i.ibb.co/LPhtmWb/hamsik.png",
      goals: 145
    },
    {
      name: "Bastian Schweinsteiger",
      clubs: ["Bayern", "Man Utd", "Chicago Fire"],
      nationality: "Germany",
      img: "https://miro.medium.com/v2/resize:fit:400/1*YbGV4_gIdi2OxVu-V2uN1w.png",
      goals: 68
    },
    {
      name: "Michael Essien",
      clubs: ["Bastia", "Lyon", "Chelsea", "Real", "Milan", "Panathinaikos", "Persib Bandung", "Sabail"],
      nationality: "Ghana",
      img: "https://cdn.staticneo.com/w/footballmanager/Essienpic.png",
      goals: 38
    },
    {
      name: "Florent Malouda",
      clubs: ["Châteauroux", "Guingamp", "Lyon", "Chelsea", "Metz"],
      nationality: "France",
      img: "https://cdn.sofifa.net/players/045/601/13_360.png",
      goals: 87
    },
];
