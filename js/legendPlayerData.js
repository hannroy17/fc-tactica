const legendPlayerData = [
  {
    name: "Lionel Messi",
    clubs: ["PSG", "Barça", "Inter Miami", "Newell's Old Boys"],
    nationality: "Argentina",
    img: "assets/players/messi.avif",
    goals: 858
  },
  {
    name: "Cristiano Ronaldo",
    clubs: ["Real", "Man Utd", "Juve", "Sporting", "Al Nassr"],
    nationality: "Portugal",
    img: "assets/players/christiano-ronaldo.avif",
    goals: 933
  },
  {
    name: "Neymar Jr",
    clubs: ["Barça", "PSG", "Al Hilal", "Santos"],
    nationality: "Brazil",
    img: "assets/players/neymar.avif",
    goals: 450
  },
  {
    name: "Edinson Cavani",
    clubs: ["Danubio", "Palermo", "Napoli", "PSG", "Man Utd", "Valencia", "Boca Juniors"],
    nationality: "Uruguay",
    img: "assets/players/cavani.avif",
    goals: 360
  },
  {
    name: "Zlatan Ibrahimovic",
    clubs: ["Malmö", "Ajax", "Juve", "Inter", "Barça", "Milan", "PSG", "Man Utd", "LA Galaxy", "Milan"],
    nationality: "Sweden",
    img: "assets/players/ibrahimovich.avif",
    goals: 511
  },
  {
    name: "Zinedine Zidane",
    clubs: ["Cannes", "Bordeaux", "Juve", "Real"],
    nationality: "France",
    img: "assets/players/zidane.avif",
    goals: 125
  },
  {
    name: "David Beckham",
    clubs: ["Man Utd", "Preston", "Real", "LA Galaxy", "Milan", "PSG"],
    nationality: "England",
    img: "assets/players/beckham.avif",
    goals: 129
  },
  {
    name: "Ronaldinho",
    clubs: ["Grêmio", "PSG", "Barça", "Milan", "Flamengo", "Atlético Mineiro", "Querétaro", "Fluminense"],
    nationality: "Brazil",
    img: "assets/players/ronaldinho.avif",
    goals: 197
  },
  {
    name: "Thierry Henry",
    clubs: ["Monaco", "Juventus", "Arsenal", "Barça", "New York Red Bulls", "Arsenal"],
    nationality: "France",
    img: "assets/players/henry.avif",
    goals: 360
  },
  {
    name: "Andriy Shevchenko",
    clubs: ["Dynamo Kyiv", "Milan", "Chelsea", "Dynamo Kyiv"],
    nationality: "Ukraine",
    img: "https://static.wefut.com/assets/images/fut18/playeravatars/239420.png",
    goals: 322
  },
  {
    name: "Paolo Maldini",
    clubs: ["Milan"],
    nationality: "Italy",
    img: "https://i.ibb.co/b19kB2P/maldin.png",
    goals: 33
  },
  {
    name: "Francesco Totti",
    clubs: ["Roma"],
    nationality: "Italy",
    img: "https://i.ibb.co/SvcfhTn/totti.png",
    goals: 307
  },
  {
    name: "Xavi",
    clubs: ["Barça", "Al Sadd"],
    nationality: "Spain",
    img: "https://static.classora.com/files/uploads/images/entries/515141/main.jpg",
    goals: 85
  },
  {
    name: "Andres Iniesta",
    clubs: ["Barça", "Vissel Kobe"],
    nationality: "Spain",
    img: "https://www.zerozero.pt/img/planteis/new/92/75/3019275_andres_iniesta_20240523195302.png",
    goals: 62
  },
  {
    name: "Iker Casillas",
    clubs: ["Real", "Porto"],
    nationality: "Spain",
    img: "https://i.pinimg.com/236x/0f/58/7f/0f587f0eff46443d7e42e091f6e66381.jpg",
    goals: 0
  },
  {
    name: "Nicolas Anelka",
    clubs: ["PSG", "Arsenal", "Real", "Liverpool", "Man City", "Fenerbahçe", "Bolton Wanderers", "Chelsea", "Shanghai Shenhua", "Juve", "West Bromwich Albion", "Mumbai City"],
    nationality: "France",
    img: "https://static.wikia.nocookie.net/the-football-database/images/3/34/Chelsea_N._Anelka_001.png",
    goals: 210
  },
  {
    name: "Hugo Lloris",
    clubs: ["Nice", "Lyon", "Tottenham"],
    nationality: "France",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/457.vresize.350.350.medium.76.png",
    goals: 0
  },
  {
    name: "Radamel Falcao",
    clubs: ["Porto", "Atletico", "Monaco", "Man Utd", "Chelsea", "Galatasaray"],
    nationality: "Colombia",
    img: "https://footballtunisien.com/wp-content/uploads/2021/09/bl15649942131107-1.png",
    goals: 300
  },
  {
    name: "Clarence Seedorf",
    clubs: ["Ajax", "Sampdoria", "Real", "Inter", "Milan"],
    nationality: "Netherlands",
    img: "https://static.wikia.nocookie.net/the-football-database/images/3/33/Botafogo_C._Seedorf_001.png",
    goals: 122
  },
  {
    name: "Luca Toni",
    clubs: ["Palermo", "Fiorentina", "Bayern", "Roma", "Juve", "Hellas Verona"],
    nationality: "Italy",
    img: "https://www.futwiz.com/assets/img/fifa16/faces/23015.png",
    goals: 309
  },
  {
    name: "Gonzalo Higuain",
    clubs: ["Real", "Napoli", "Juve", "Milan", "Chelsea", "Inter Miami"],
    nationality: "Argentina",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/1500.png",
    goals: 336
  },
  {
    name: "Miroslav Klose",
    clubs: ["Kaiserslautern", "Werder Bremen", "Bayern", "Lazio"],
    nationality: "Germany",
    img: "https://www.playmakerstats.com/img/jogadores/55/772055_med__20210412191558_miroslav_klose.png",
    goals: 321
  },
  {
    name: "George Weah",
    clubs: ["Monaco", "PSG", "Milan", "Chelsea", "Man City", "Marseille"],
    nationality: "Liberia",
    img: "https://cdn.futbin.com/content/fifa15/img/players/164000.png",
    goals: 193
  },
  {
    name: "Xabi Alonso",
    clubs: ["Real Sociedad", "Liverpool", "Real", "Bayern"],
    nationality: "Spain",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d088987-6927-469b-b8f7-245ea6495716/d53vxux-14f426e9-911e-4a69-8a16-e200d7ba24cd.jpg",
    goals: 42
  },
  {
    name: "David Trezeguet",
    clubs: ["Monaco", "Juve", "River Plate", "Hércules"],
    nationality: "France",
    img: "https://i.ibb.co/7WgYy1G/trezeguet.png",
    goals: 298
  },
  {
    name: "David Silva",
    clubs: ["Valencia", "Man City", "Real Sociedad"],
    nationality: "Spain",
    img: "https://i.ibb.co/XzHRZTH/d-silva.png",
    goals: 125
  },
  {
    name: "Patrick Vieira",
    clubs: ["Milan", "Arsenal", "Juve", "Inter", "Man City"],
    nationality: "France",
    img: "https://static.wikia.nocookie.net/the-football-database/images/e/e7/Patrick_Vieira.1.png",
    goals: 63
  },
  {
    name: "Pavel Nedved",
    clubs: ["Sparta Prague", "Lazio", "Juve"],
    nationality: "Czech Republic",
    img: "https://i.ibb.co/r41SXV2/nedved.png",
    goals: 110
  },
  {
    name: "Thiago Motta",
    clubs: ["Barça", "Atletico", "Genoa", "Inter", "PSG"],
    nationality: "Italy",
    img: "https://sortitoutsi.b-cdn.net/uploads/media_2023/oY93rdF9LncKXIOrq6XV3AjacNEslvwSwB8b1dn6.png",
    goals: 26
  },
  {
    name: "Didier Deschamps",
    clubs: ["Nantes", "Marseille", "Juve", "Chelsea", "Valencia"],
    nationality: "France",
    img: "https://i.ibb.co/t3WB575/deschamps.png",
    goals: 15
  },
  {
    name: "Laurent Blanc",
    clubs: ["Montpellier", "Napoli", "Barça", "Marseille", "Inter", "Man Utd"],
    nationality: "France",
    img: "https://s3p.sofifa.net/b3e4e2ff02658be8fc7e82d8601b78eb047e2ccf.png",
    goals: 108
  },
  {
    name: "Javier Mascherano",
    clubs: ["River Plate", "Corinthians", "West Ham", "Liverpool", "Barça"],
    nationality: "Argentina",
    img: "https://i.ibb.co/4ZkbGqV/mascherano.png",
    goals: 5
  },
  {
    name: "Wesley Sneijder",
    clubs: ["Ajax", "Real", "Inter", "Galatasaray"],
    nationality: "Netherlands",
    img: "https://static.wikia.nocookie.net/eredivisie/images/2/2b/Wesley_SNEIJDER.png",
    goals: 152
  },
  {
    name: "Edgar Davids",
    clubs: ["Ajax", "Milan", "Juve", "Barça", "Inter", "Tottenham"],
    nationality: "Netherlands",
    img: "https://www.dx84tech.com/wp-content/uploads/2021/06/Edgar-Davids_512_-by-DNAI.png",
    goals: 20
  },
  {
    name: "Ronaldo",
    clubs: ["Cruzeiro", "PSV", "Barça", "Inter", "Real", "Milan"],
    nationality: "Brazil",
    img: "https://s.hs-data.com/gfx/person/cropped/400x400/846.png?fallback=male",
    goals: 352
  },
  {
    name: "Hernan Crespo",
    clubs: ["Parma", "Lazio", "Inter", "Chelsea", "Milan", "Genoa"],
    nationality: "Argentina",
    img: "https://i.ibb.co/7kRNC9t/crespo.png",
    goals: 273
  },
  {
    name: "Sergio Ramos",
    clubs: ["Real", "PSG", "Sevilla"],
    nationality: "Spain",
    img: "https://i.ibb.co/hFqxc0H/Ramos.png",
    goals: 106
  },
  {
    name: "Gerard Pique",
    clubs: ["Barça", "Man Utd"],
    nationality: "Spain",
    img: "https://static.wikia.nocookie.net/dlls/images/9/96/PiqueProfile23.png",
    goals: 60
  },
  {
    name: "Cesc Fabregas",
    clubs: ["Arsenal", "Barça", "Chelsea", "Monaco", "Como"],
    nationality: "Spain",
    img: "https://www.zerozero.pt/img/planteis/new/62/94/3506294_cesc_fabregas_20240504004822.png",
    goals: 125
  },
  {
    name: "Thiago Silva",
    clubs: ["Fluminense", "Milan", "PSG", "Chelsea"],
    nationality: "Brazil",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/4062.png",
    goals: 32
  },
  {
    name: "Keylor Navas",
    clubs: ["Deportivo Saprissa", "Albacete", "Levante", "Real", "PSG", "Nottingham"],
    nationality: "Costa Rica",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/1166.vresize.350.350.medium.18.png",
    goals: 0
  },
  {
    name: "Luis Suarez",
    clubs: ["Nacional", "Groningen", "Ajax", "Liverpool", "Barça", "Atletico", "Gremio"],
    nationality: "Uruguay",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/290.vresize.350.350.medium.77.png",
    goals: 530
  },
  {
    name: "Paul Pogba",
    clubs: ["Man Utd", "Juve"],
    nationality: "France",
    img: "https://b.fssta.com/uploads/application/soccer/headshots/1388.png",
    goals: 45
  },
  {
    name: "Pierre-Emerick Aubameyang",
    clubs: ["Milan", "Lille", "Monaco", "Saint-Étienne", "Dortmund", "Arsenal", "Barça", "Chelsea", "Marseille"],
    nationality: "Gabon",
    img: "https://static.wefut.com/assets/images/fut21/playeravatars/188567.png?242",
    goals: 313
  },
  {
    name: "Manuel Neuer",
    clubs: ["Schalke", "Bayern"],
    nationality: "Germany",
    img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/97923.jpg",
    goals: 0
  },
  {
    name: "Fernando Torres",
    nationality: "Spain",
    clubs: ["Atletico", "Liverpool", "Chelsea", "Milan", "Sagan Tosu"],
    img: "https://cdn.futbin.com/content/fifa17/img/players/49369.png",
    goals: 260
  },
  {
    name: "Jürgen Klinsmann",
    nationality: "Germany",
    clubs: ["Stuttgart", "Inter", "Monaco", "Tottenham", "Bayern", "Sampdoria"],
    img: "https://sortitoutsidospaces.b-cdn.net/megapacks/cutoutfaces/originals/12.07/100014.png",
    goals: 232
  },
  {
    name: "Wayne Rooney",
    nationality: "England",
    clubs: ["Everton", "Man Utd", "D.C. United", "Derby County"],
    img: "https://static.fctables.com/upload/zf/zfmbx58a234d21037f/wayne-rooney.png",
    goals: 366
  },
  {
    name: "Cafu",
    nationality: "Brazil",
    clubs: ["São Paulo", "Real Zaragoza", "Palmeiras", "Roma", "Milan"],
    img: "https://static.wikia.nocookie.net/the-football-database/images/2/26/A.C._Milan_Cafu_001.png",
    goals: 15
  },
  {
    name: "Pele",
    nationality: "Brazil",
    clubs: ["Santos", "New York Cosmos"],
    img: "https://static.wikia.nocookie.net/soccer-players/images/e/e1/Pel%C3%A9.png",
    goals: 767
  },
  {
    name: "Fernando Morientes",
    nationality: "Spain",
    clubs: ["Real", "Monaco", "Liverpool", "Valencia"],
    img: "https://s3p.sofifa.net/3443d70b5aea6eaf65189ecb6d12080e86230a6d.png",
    goals: 197
  },
  {
    name: "Dimitar Berbatov",
    nationality: "Bulgaria",
    clubs: ["Leverkusen", "Tottenham", "Man Utd", "Monaco"],
    img: "https://static.wefut.com/assets/images/fut25/playeravatars/30110.png",
    goals: 281
  },
  {
    name: "Adriano",
    nationality: "Brazil",
    clubs: ["Inter", "Roma"],
    img: "https://i.ibb.co/b1MVFp4/adriano.png",
    goals: 144
  },
  {
    name: "Deco",
    nationality: "Portugal",
    clubs: ["Porto", "Barça", "Chelsea"],
    img: "https://lh5.googleusercontent.com/proxy/ObYxmFyR13XE2o6AyyCrvEBeBVqqXrsc_iI_Vz24Fqq9ib5ExtCTkWwNFH6DyR69CgGr3K34jOoX_iQby_XYPeoGJV_2AVRLUuB9",
    goals: 60
  },
  {
    name: "Mario Balotelli",
    nationality: "Italy",
    clubs: [
      "Lumezzane", "Inter", "Man City", "Milan", "Liverpool",
      "Nice", "Marseille", "Brescia", "Monza", "Sion",
      "Adana Demirspor", "Genoa"
    ],
    img: "https://sortitoutsi.b-cdn.net/uploads/media_2023/zZobdxP3KL131tCn6nGvOYVttdRsjcW1B0ojJkTI.png",
    goals: 161
  },
  {
    name: "Alexis Sanchez",
    nationality: "Chile",
    clubs: [
      "Cobreloa", "Colo-Colo", "River Plate", "Udinese", "Barça",
      "Arsenal", "Man Utd", "Inter", "Marseille"
    ],
    img: "https://b.fssta.com/uploads/application/soccer/headshots/721.png",
    goals: 239
  },
  {
    name: "Sergio Aguero",
    clubs: ["Independiente", "Atletico", "Man City", "Barça"],
    nationality: "Argentina",
    img: "https://i.ibb.co/h9cqFHz/aguero.png",
    goals: 379
  },
  {
    name: "Franck Ribery",
    clubs: ["Boulogne", "Metz", "Galatasaray", "Marseille", "Bayern", "Fiorentina", "Salernitana"],
    nationality: "France",
    img: "https://static.wikia.nocookie.net/the-football-database/images/e/e7/Bayern_Munich_Rib%C3%A9ry_001.png",
    goals: 151
  },
  {
    name: "Gabriel Batistuta",
    clubs: ["Newell's Old Boys", "River Plate", "Boca Juniors", "Fiorentina", "Roma", "Inter", "Al-Arabi"],
    nationality: "Argentina",
    img: "https://i.ibb.co/4PykZZr/batistuta.png",
    goals: 248
  },
  {
    name: "Roberto Baggio",
    clubs: ["Vicenza", "Fiorentina", "Juve", "Milan", "Bologna", "Inter", "Brescia"],
    nationality: "Italy",
    img: "https://i.ibb.co/26CmmLb/baggio.png",
    goals: 291
  },
  {
    name: "Carlos Tevez",
    clubs: ["Boca Juniors", "Corinthians", "West Ham", "Man Utd", "Man City", "Juve", "Shanghai Shenhua", "Boca Juniors"],
    nationality: "Argentina",
    img: "https://i.ibb.co/V3c44mR/tevez.png",
    goals: 278
  },
  {
    name: "Gianluigi Buffon",
    clubs: ["Parma", "Juve", "PSG", "Parma"],
    nationality: "Italy",
    img: "https://i.ibb.co/X8hVnDM/11133.png",
    goals: 0
  },
  {
    name: "Fabio Cannavaro",
    clubs: ["Napoli", "Parma", "Inter", "Juve", "Real", "Al-Ahli"],
    nationality: "Italy",
    img: "https://cdn.resfu.com/img_data/players/medium/7193.jpg",
    goals: 17
  },
  {
    name: "Michael Owen",
    clubs: ["Liverpool", "Real", "Newcastle", "Man Utd", "Stoke City"],
    nationality: "England",
    img: "https://fmdataba.com/images/p/273709.png",
    goals: 222
  },
  {
    name: "Gareth Bale",
    clubs: ["Southampton", "Tottenham", "Real", "LAFC"],
    nationality: "Wales",
    img: "https://secure.cache.images.core.optasports.com/soccer/players/150x150/15482.png",
    goals: 185
  },
  {
    name: "Robin van Persie",
    clubs: ["Feyenoord", "Arsenal", "Man Utd", "Fenerbahçe"],
    nationality: "Netherlands",
    img: "https://cdn.sofifa.net/players/007/826/15_360.png",
    goals: 313
  },
  {
    name: "Rio Ferdinand",
    clubs: ["West Ham", "Bournemouth", "Leeds", "Man Utd", "QPR"],
    nationality: "England",
    img: "https://static.wikia.nocookie.net/the-football-database/images/1/18/Ferdinand.png",
    goals: 11
  },
  {
    name: "Ruud van Nistelrooy",
    clubs: ["Den Bosch", "Heerenveen", "PSV", "Man Utd", "Real", "Hamburg", "Málaga"],
    nationality: "Netherlands",
    img: "https://www.zerozero.pt/img/planteis/new/18/75/1875_ruud_van_nistelrooy_20240618190239.jpg",
    goals: 349
  },
  {
    name: "Raul",
    clubs: ["Real", "Schalke", "Al Sadd", "New York Cosmos"],
    nationality: "Spain",
    img: "https://i.ibb.co/x2k8g5T/raul.png",
    goals: 404
  },
  {
    name: "Fabien Barthez",
    clubs: ["Toulouse", "Marseille", "Monaco", "Man Utd", "Nantes"],
    nationality: "France",
    img: "https://cdn.resfu.com/img_data/players/medium/8367.jpg",
    goals: 0
  },
  {
    name: "Luis Figo",
    clubs: ["Sporting", "Barça", "Real", "Inter"],
    nationality: "Portugal",
    img: "https://fmdataba.com/images/p/274754.png",
    goals: 114
  },
  {
    name: "Alessandro Del Piero",
    clubs: ["Padova", "Juve", "Sydney FC", "Delhi Dynamos"],
    nationality: "Italy",
    img: "https://i.ibb.co/nBxs5T5/del-piero.png",
    goals: 316
  },
  {
    name: "Maxwell",
    clubs: ["Cruzeiro", "Ajax", "Inter", "Barça", "PSG"],
    nationality: "Brazil",
    img: "https://cdn.futwiz.com/assets/img/fifa16/faces/53405.png",
    goals: 25
  },
  {
    name: "Johan Cruyff",
    clubs: ["Ajax", "Barça", "Los Angeles Aztecs", "Washington Diplomats", "Levante", "Feyenoord"],
    nationality: "Netherlands",
    img: "https://comicus.co.uk/wp-content/uploads/2016/03/Johan-Cruyff_2.png",
    goals: 402
  },
    {
      name: "Eden Hazard",
      clubs: ["Lille", "Chelsea", "Real"],
      nationality: "Belgium",
      img: "https://static.wikia.nocookie.net/dlls/images/e/eb/EHazardProfile21.png",
      goals: 167
    },
    {
      name: "Petr Cech",
      clubs: ["Sparta Prague", "Rennes", "Chelsea", "Arsenal"],
      nationality: "Czech Republic",
      img: "https://e7.pngegg.com/pngimages/8/373/png-clipart-petr-%C4%8Cech-premier-league-2018-world-cup-japan-national-football-team-premier-league-face-head-thumbnail.png",
      goals: 0
    },
    {
      name: "Claude Makelele",
      clubs: ["Nantes", "Marseille", "Celta Vigo", "Real", "Chelsea", "PSG"],
      nationality: "France",
      img: "https://api.efootballdb.com/assets/2022/players/88030723578594_.png.webp",
      goals: 25
    },
    {
      name: "Alessandro Nesta",
      clubs: ["Lazio", "Milan", "Montréal Impact", "Chennaiyin FC"],
      nationality: "Italy",
      img: "https://i.ibb.co/VtQ14yN/nesta.png",
      goals: 17
    },
    {
      name: "Rivaldo",
      clubs: ["Santa Cruz", "Corinthians", "Palmeiras", "Deportivo", "Barça", "Milan", "Olympiacos", "AEK Athens"],
      nationality: "Brazil",
      img: "https://i.ibb.co/Nj5Zpjq/rivaldo.png",
      goals: 350
    },
    {
      name: "Michael Ballack",
      clubs: ["Chemnitzer FC", "Kaiserslautern", "Leverkusen", "Bayern", "Chelsea"],
      nationality: "Germany",
      img: "https://s.hs-data.com/gfx/person/cropped/400x400/5668.png",
      goals: 145
    },
    {
      name: "Javier Saviola",
      clubs: ["River Plate", "Barça", "Monaco", "Sevilla", "Real", "Benfica", "Málaga", "Olympiacos", "Verona"],
      nationality: "Argentina",
      img: "https://cdn.resfu.com/img_data/players/medium/37128.jpg",
      goals: 210
    },

    {
      name: "Didier Drogba",
      clubs: ["Le Mans", "Guingamp", "Marseille", "Chelsea", "Shanghai Shenhua", "Galatasaray", "Montreal Impact", "Phoenix Rising"],
      nationality: "Ivory Coast",
      img: "https://i.ibb.co/mvkj4zX/drogba.png",
      goals: 300
    },
    {
      name: "Andrea Pirlo",
      clubs: ["Brescia", "Inter", "Reggina", "Milan", "Juve", "New York City"],
      nationality: "Italy",
      img: "https://i.ibb.co/n87WkJf/pirlo.png",
      goals: 73
    },
    {
      name: "Mesut Ozil",
      clubs: ["Schalke", "Werder Bremen", "Real", "Arsenal", "Fenerbahçe", "Istanbul Basaksehir"],
      nationality: "Germany",
      img: "https://i.ibb.co/DMByYHs/ozil.png",
      goals: 114
    },
    {
      name: "Dennis Bergkamp",
      clubs: ["Ajax", "Inter", "Arsenal"],
      nationality: "Netherlands",
      img: "https://static.wefut.com/assets/images/fut18/playeravatars/238388.png",
      goals: 201
    },
    {
      name: "Michel Platini",
      clubs: ["Nancy", "Saint Etienne", "Juve"],
      nationality: "France",
      img: "https://i.ibb.co/gdqV4L9/platini.png",
      goals: 224
    },
    {
      name: "Marco van Basten",
      clubs: ["Ajax", "Milan"],
      nationality: "Netherlands",
      img: "https://i.ibb.co/ctPcmh4/van-basten-2.png",
      goals: 301
    },
    {
      name: "Filippo Inzaghi",
      clubs: ["Piacenza", "Parma", "Atalanta", "Juve", "Milan"],
      nationality: "Italy",
      img: "https://fifastatic.fifaindex.com/FIFA24/players/1198.png",
      goals: 313
    },
    {
      name: "Christian Vieri",
      clubs: ["Torino", "Pisa", "Ravenna", "Venezia", "Atalanta", "Juve", "Atletico", "Lazio", "Inter", "Milan", "Monaco", "Fiorentina"],
      nationality: "Italy",
      img: "https://cdn.futwiz.com/assets/img/fifa16/faces/942.png",
      goals: 236
    },
    {
      name: "Samuel Eto'o",
      clubs: ["Real", "Mallorca", "Barça", "Inter", "Chelsea", "Everton"],
      nationality: "Cameroon",
      img: "https://topnews.in/files/eto.jpg",
      goals: 371
    },
    {
      name: "Roberto Carlos",
      clubs: ["Palmeiras", "Inter", "Real", "Fenerbahçe", "Anzhi"],
      nationality: "Brazil",
      img: "https://static.wefut.com/assets/images/fut17/playeravatars/1040.png",
      goals: 113
    },
    {
      name: "Arjen Robben",
      clubs: ["Groningen", "PSV", "Chelsea", "Real", "Bayern"],
      nationality: "Netherlands",
      img: "https://static.wikia.nocookie.net/fifa/images/3/38/Arjen_Robben.png",
      goals: 210
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
      name: "Romario",
      clubs: ["PSV", "Barça", "Flamengo", "Vasco", "Valencia"],
      nationality: "Brazil",
      img: "https://s3p.sofifa.net/dfb0983f507ed7dea8020bed48be27a51cd8d6e0.png",
      goals: 745
    },
    {
      name: "Ferenc Puskás",
      clubs: ["Budapest Honvéd", "Real Madrid"],
      nationality: "Hungary",
      img: "https://www.fifarosters.com/assets/players/fifa23/faces/256014.png",
      goals: 729
    },
    {
      name: "Gerd Müller",
      clubs: ["Bayern", "Fort Lauderdale Strikers"],
      nationality: "Germany",
      img: "https://cdn.resfu.com/img_data/players/medium/321975.jpg",
      goals: 735
    },
    {
      name: "Fernando Peyroteo",
      clubs: ["Sporting CP"],
      nationality: "Portugal",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Fernando_Peyroteo.jpg",
      goals: 544
    },
    {
      name: "Josef Bican",
      clubs: ["Slavia Prague", "Rapid Wien"],
      nationality: "Austria / Czechoslovakia",
      img: "https://cdn.resfu.com/img_data/players/medium/383664.jpg",
      goals: 805
    },
    {
      name: "Jimmy Jones",
      clubs: ["Glenavon"],
      nationality: "Northern Ireland",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Jimmy_jones.jpg/280px-Jimmy_jones.jpg",
      goals: 648
    },
    {
      name: "Jimmy McGrory",
      clubs: ["Celtic"],
      nationality: "Scotland",
      img: "https://wikifoundryimages.s3.amazonaws.com/BauaQELbgHsUs-gur9d4aA173622",
      goals: 522
    },
    {
      name: "Uwe Seeler",
      clubs: ["Hamburg"],
      nationality: "Germany",
      img: "https://s.hs-data.com/gfx/person/cropped/400x400/41482.png",
      goals: 507
    },
    {
      name: "Zico",
      clubs: ["Flamengo", "Udinese"],
      nationality: "Brazil",
      img: "https://static.wefut.com/assets/images/fut24/playeravatars/166691.png",
      goals: 476
    },
    {
      name: "Tulio Maravilha",
      clubs: ["Botafogo", "Goias"],
      nationality: "Brazil",
      img: "https://imagecache.365scores.com/image/upload/f_png,w_64,h_64,c_limit,q_auto:eco,dpr_3,d_Athletes:default.png,r_max,c_thumb,g_face,z_0.65/Athletes/77328",
      goals: 575
    },
    {
      name: "Ernst Wilimowski",
      clubs: ["Ruch Chorzów", "1860 Munich"],
      nationality: "Poland",
      img: "https://alchetron.com/cdn/ernst-wilimowski-05a09955-4a87-42a0-983d-0e1e9ab9766-resize-750.jpeg",
      goals: 554
    },
    {
      name: "Deák Ferenc",
      clubs: ["Ferencváros", "Szentlőrinci"],
      nationality: "Hungary",
      img: "https://alchetron.com/cdn/ferenc-dek-footballer-3ebbef60-7920-49df-8524-e225d4b3790-resize-750.jpeg",
      goals: 576
    },
    {
      name: "Gyula Zsengellér",
      clubs: ["Újpest", "Roma"],
      nationality: "Hungary",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCTiVWtCHlbLCerDXxRAmCw1wi89FDY1o2g&s",
      goals: 416
    },
    {
      name: "Mohamed Salah",
      clubs: ["Basel", "Chelsea", "Fiorentina", "Roma", "Liverpool"],
      nationality: "Egypt",
      img: "https://img.uefa.com/imgml/TP/players/1/2025/324x324/250052469.jpg",
      goals: 320
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
      name: "Olivier Giroud",
      clubs: ["Grenoble", "Tours", "Montpellier", "Arsenal", "Chelsea", "Milan"],
      nationality: "France",
      img: "https://img.uefa.com/imgml/TP/players/3/2024/324x324/250020851.jpg",
      goals: 280
    },
    {
      name: "Youri Djorkaeff",
      clubs: ["Grenoble", "Strasbourg", "Monaco", "PSG", "Inter", "Kaiserslautern", "Bolton", "Blackburn", "MetroStars"],
      nationality: "France",
      img: "https://equipe-france.s3.eu-west-3.amazonaws.com/img/personne/youri-djorkaeff-1.png",
      goals: 160
    },
    {
      name: "Just Fontaine",
      clubs: ["USM Casablanca", "Nice", "Reims"],
      nationality: "France",
      img: "https://www.playmakerstats.com/img/jogadores/85/751285_med__20210212151529_just_fontaine.png",
      goals: 226
    },
    {
      name: "Raymond Kopa",
      clubs: ["Angers", "Reims", "Real"],
      nationality: "France",
      img: "https://s3p.sofifa.net/5c26e801fb499e9b7a09b7369f9950a61476ede0.png",
      goals: 123
    },
    {
      name: "Telmo Zarra",
      nationality: "Spain",
      clubs: ["Athletic Bilbao"],
      img: "https://cdn.athletic-club.eus/imagenes/fotofichas/SM/telmo-zarraonandia-montoya_SM.png",
      goals: 352
    },
    {
      name: "Iván Zamorano",
      nationality: "Chile",
      clubs: ["Sevilla", "Real", "Inter", "América"],
      img: "https://s3p.sofifa.net/3ae14e77e18bf00006bd27bac52c3f722f64609e.png",
      goals: 270
    },
    {
      name: "Klaas-Jan Huntelaar",
      nationality: "Netherlands",
      clubs: ["Heerenveen", "Ajax", "Real", "Milan", "Schalke", "Ajax"],
      img: "https://cdn.futwiz.com/assets/img/fifa19/faces/148803.png",
      goals: 367
    },
    {
      name: "Enzo Francescoli",
      nationality: "Uruguay",
      clubs: ["River Plate", "Marseille", "Cagliari", "Torino"],
      img: "https://static.wefut.com/assets/images/fut25/playeravatars/275049.png",
      goals: 225
    },
    {
      name: "Jean-Pierre Papin",
      nationality: "France",
      clubs: ["Valenciennes", "Club Brugge", "Marseille", "Milan", "Bayern", "Bordeaux"],
      img: "https://cdn3.futbin.com/content/fifa25/img/players/167134.png",
      goals: 340
    },
    {
      name: "David Villa",
      clubs: ["Sporting Gijón", "Zaragoza", "Valencia", "Barça", "Atlético", "Melbourne City", "New York City", "Vissel Kobe"],
      nationality: "Spain",
      img: "https://static.wikia.nocookie.net/the-football-database/images/9/9f/Spain_D._Villa_001.png",
      goals: 380
    },
    {
      name: "Eusébio",
      clubs: ["Sporting Lourenço Marques", "Benfica", "Boston Minutemen", "Monterrey", "Beira-Mar"],
      nationality: "Portugal",
      img: "https://static.wefut.com/assets/images/fut24/playeravatars/242519.png",
      goals: 473
    },
    {
      name: "Diego Forlán",
      clubs: ["Independiente", "Man Utd", "Villarreal", "Atlético", "Inter", "Internacional", "Cerezo Osaka", "Peñarol", "Kitchee"],
      nationality: "Uruguay",
      img: "https://static.wikia.nocookie.net/fifa/images/1/16/Diego_Forlan_Fifa_14.png",
      goals: 273
    },
    {
      name: "Patrick Kluivert",
      clubs: ["Ajax", "Milan", "Barça", "Newcastle", "Valencia", "PSV", "Lille"],
      nationality: "Netherlands",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwear2yIaX8dfKMQ1tXRITbg-4sEdbnx2CyA&s",
      goals: 239
    },
    {
      name: "Henrik Larsson",
      clubs: ["Högaborgs", "Helsingborg", "Feyenoord", "Celtic", "Barça", "Manchester United", "Helsingborg"],
      nationality: "Sweden",
      img: "https://static.wefut.com/assets/images/fut18/playeravatars/52241.png",
      goals: 416
    },
    {
      name: "Bebeto",
      clubs: ["Vitória", "Flamengo", "Vasco da Gama", "Deportivo La Coruña", "Sevilla", "Cruzeiro", "Toros Neza", "Kashima Antlers"],
      nationality: "Brazil",
      img: "https://sortitoutsi.b-cdn.net/uploads/face/67104826.png",
      goals: 276
    },
    {
      name: "Pauleta",
      clubs: ["União Micaelense", "Estoril", "Salamanca", "Deportivo La Coruña", "Bordeaux", "PSG"],
      nationality: "Portugal",
      img: "https://fmdataba.com/images/p2/275527.png",
      goals: 340
    },
    {
      name: "Alexander Frei",
      clubs: ["Basel", "Thun", "Luzern", "Servette", "Rennes", "Dortmund", "Basel"],
      nationality: "Switzerland",
      img: "https://sortitoutsidospaces.b-cdn.net/images/ggvSouO2tSogIw8xwGo8NhxIwD8N8Far.png",
      goals: 278
    },
    {
      name: "Jon Dahl Tomasson",
      clubs: ["Heerenveen", "Newcastle", "Feyenoord", "Milan", "Villarreal", "Stuttgart"],
      nationality: "Denmark",
      goals: 187,
      img: "https://s3p.sofifa.net/cece77adc6610d0b3aba22f7f3bd2ac89de5d84e.png"
    },
    {
      name: "Antonio Di Natale",
      clubs: ["Empoli", "Udinese"],
      nationality: "Italy",
      goals: 258,
      img: "https://static.wikia.nocookie.net/the-football-database/images/e/ee/Di_Natale.png"
    },
    {
      name: "Álvaro Negredo",
      clubs: ["Almería", "Sevilla", "Man City", "Valencia", "Middlesbrough", "Besiktas", "Cádiz"],
      nationality: "Spain",
      goals: 185,
      img: "https://www.fifarosters.com/assets/players/fifa23/faces/146439.png"
    },
    {
      name: "Edin Dzeko",
      clubs: ["Željezničar", "Teplice", "Wolfsburg", "Man City", "Roma", "Inter", "Fenerbahçe"],
      nationality: "Bosnia and Herzegovina",
      goals: 350,
      img: "https://www.playmakerstats.com/img/jogadores/new/82/99/38299_edin_dzeko_20250319171742.png"
    },
    {
      name: "Alfredo Di Stéfano",
      clubs: ["River Plate", "Huracán", "Millonarios", "Real Madrid", "Espanyol"],
      nationality: "Argentina",
      goals: 512,
      img: "https://cdn.resfu.com/img_data/players/medium/254189.jpg"
    },
    {
      name: "Garrincha",
      clubs: ["Botafogo", "Corinthians"],
      nationality: "Brazil",
      goals: 232,
      img: "https://www.fifarosters.com/assets/players/fifa24/faces/247553.png"
    },
    {
      name: "Gyorgy Sarosi",
      nationality: "Hungary",
      clubs: ["Ferencváros"],
      img: "https://www.dx84tech.com/wp-content/uploads/2025/04/Gyorgy-SAROSI-512.png",
      goals: 511
    },
    {
      name: "Glenn Ferguson",
      nationality: "Northern Ireland",
      clubs: ["Glenavon", "Linfield"],
      img: "https://sortitoutsi.b-cdn.net/uploads/face/116864.png",
      goals: 563
    }
];