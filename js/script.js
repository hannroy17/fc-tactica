// script.js

const grid = document.getElementById('grid');
const searchInput = document.getElementById('player-search');
const suggestionsList = document.getElementById('suggestions');
const fullPlayerData = [...playerData, ...legendPlayerData, ...retiredPlayerData];

let currentPlayers = [];
let clubs = [];
let currentGridClubs = [];
let answers = Array(3).fill(null).map(() => Array(3).fill(null));
let messageBox;

function getRandomClubs(n) {
  const shuffled = [...clubList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function generateValidGrid() {
  const maxAttempts = 100;
  let attempt = 0;

  const clubFrequency = {};
  fullPlayerData.forEach(player => {
    player.clubs.forEach(club => {
      if (!clubFrequency[club]) clubFrequency[club] = 0;
      clubFrequency[club]++;
    });
  });

  const sortedEasyClubs = Object.entries(clubLogos)
    .filter(([key, value]) => value.level === "easy")
    .sort((a, b) => (clubFrequency[b[0]] || 0) - (clubFrequency[a[0]] || 0))
    .map(([key]) => key);

  while (attempt < maxAttempts) {
    const shuffled = [...sortedEasyClubs].sort(() => 0.5 - Math.random());
    const top = shuffled.slice(0, 3);
    const side = shuffled.slice(3, 6);

    let allValid = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const valid = fullPlayerData.some(p =>
          p.clubs.includes(top[j]) && p.clubs.includes(side[i])
        );
        if (!valid) {
          allValid = false;
          break;
        }
      }
    }

    if (allValid) {
      clubs = [
        ["", ...top],
        [side[0]],
        [side[1]],
        [side[2]]
      ];
      currentGridClubs = JSON.parse(JSON.stringify(clubs));
      return;
    }
    attempt++;
  }

  console.warn("⚠️ Unable to generate a fully playable grid after", maxAttempts, "attempts.");
}

function createGrid() {
  grid.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const cell = document.createElement("div");

      if (i === 0 && j === 0) {
        const iconButton = document.createElement("button");
        iconButton.classList.add("grid-replay-icon");
        iconButton.title = "New grid";

        iconButton.innerHTML = `
          <svg class="refresh-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 2v6h-6"></path>
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
            <path d="M3 12a9 9 0 0 0 15 6.7L21 16"></path>
          </svg>
        `;

        iconButton.addEventListener("click", () => {
          const svg = iconButton.querySelector('svg');
          svg.classList.add('clicked');
          setTimeout(() => svg.classList.remove('clicked'), 300);
          resetGame();
        });

        cell.appendChild(iconButton);

      } else if (i === 0 && j > 0) {
        cell.classList.add("grid-header", "top-row");
        const clubKey = clubs[0][j];
        if (clubKey && clubLogos[clubKey]) {
          const container = document.createElement("div");
          container.classList.add("club-logo-container");
      
          const img = document.createElement("img");
          img.src = clubLogos[clubKey].logo;
          img.alt = clubKey;
      
          const name = document.createElement("div");
          name.classList.add("club-name");
          name.textContent = clubKey;
      
          container.appendChild(img);
          container.appendChild(name);
          cell.appendChild(container);
        }
      
      } else if (j === 0 && i > 0) {
        cell.classList.add("grid-header", "left-column");
        const clubKey = clubs[i][0];
        if (clubKey && clubLogos[clubKey]) {
          const container = document.createElement("div");
          container.classList.add("club-logo-container");
      
          const img = document.createElement("img");
          img.src = clubLogos[clubKey].logo;
          img.alt = clubKey;
      
          const name = document.createElement("div");
          name.classList.add("club-name");
          name.textContent = clubKey;
      
          container.appendChild(img);
          container.appendChild(name);
          cell.appendChild(container);
        }

      } else {
        cell.dataset.row = i;
        cell.dataset.col = j;
      }

      grid.appendChild(cell);
    }
  }

  if (!messageBox) {
    messageBox = document.createElement("div");
    messageBox.id = "message-box";
    messageBox.style.margin = "1em auto";
    messageBox.style.maxWidth = "300px";
    messageBox.style.fontWeight = "bold";
    grid.insertAdjacentElement("afterend", messageBox);
  } else {
    messageBox.textContent = "";
  }
}

function updateSuggestions(value) {
  suggestionsList.innerHTML = "";
  if (value.length < 3) return;
  const filtered = fullPlayerData.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
  filtered.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player.name;
    li.addEventListener("click", () => selectPlayer(player));
    suggestionsList.appendChild(li);
  });
}

function selectPlayer(player) {
  suggestionsList.innerHTML = "";
  searchInput.value = "";
  clearHighlights();
  messageBox.textContent = "";

  const targets = [];
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      const colClub = clubs[0][j];
      const rowClub = clubs[i][0];
      const isCellFree = !answers[i - 1][j - 1]; // 🔍 Vérifie si la cellule est vide

      if (isCellFree && player.clubs.includes(colClub) && player.clubs.includes(rowClub)) {
        targets.push([i, j]);
      }
    }
  }

  if (targets.length === 1) {
    placePlayer(targets[0], player);
  } else if (targets.length > 1) {
    highlightChoices(targets, player);
    messageBox.textContent = `Multiple possible cells. Pick one.`;
  } else {
    messageBox.textContent = `Player doesn't match any cell.`;
  }
}

function placePlayer([i, j], player) {
  const isAlreadyPlaced = answers.some(row => row.includes(player.name));
  if (isAlreadyPlaced) {
    clearHighlights();
    return;
  }

  const index = (i * 4) + j;
  const cell = grid.children[index];
  if (cell.querySelector("img")) return;

  const img = document.createElement("img");
  img.src = player.img;
  img.alt = player.name;
  img.className = "player-photo";
  cell.appendChild(img);

  cell.classList.add("cell-validated");
  setTimeout(() => {
    cell.classList.remove("cell-validated");
  }, 700);

  answers[i - 1][j - 1] = player.name;
  checkWin();
  clearHighlights();
  messageBox.textContent = "";
}

function highlightChoices(choices, player) {
  const validChoices = choices.filter(([i, j]) => {
    const index = (i * 4) + j;
    const cell = grid.children[index];
    return !cell.querySelector("img");
  });

  if (validChoices.length === 1) {
    placePlayer(validChoices[0], player);
    return;
  }

  if (validChoices.length > 1) {
    validChoices.forEach(([i, j]) => {
      const index = (i * 4) + j;
      const cell = grid.children[index];
      cell.classList.add("highlight-choice");
      cell.addEventListener("click", function handler() {
        placePlayer([i, j], player);
        cell.classList.remove("highlight-choice");
        cell.removeEventListener("click", handler);
      });
    });
    messageBox.textContent = "Multiple valid empty cells. Pick one.";
  } else {
    messageBox.textContent = "All matching cells are already taken.";
  }
}

function clearHighlights() {
  const highlighted = document.querySelectorAll('.highlight-choice');
  highlighted.forEach(cell => {
    cell.classList.remove('highlight-choice');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateValidGrid();
  createGrid();

  const resetBtn = document.getElementById("reset-button");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetGame);
  }

  const solveBtn = document.getElementById("reveal-button");
  if (solveBtn) {
    solveBtn.addEventListener("click", solveGrid);
  }

  const input = document.getElementById("player-search");
  if (input) {
    input.addEventListener("input", () => updateSuggestions(input.value));
  }
});

function checkWin() {
  const filled = answers.flat().filter(Boolean).length;
  if (filled === 9) {
    messageBox.textContent = "🎉 Congrats! You've filled all the cells.";
  }
} 

function resetGame() {
  generateValidGrid();
  createGrid();
  answers = Array(3).fill(null).map(() => Array(3).fill(null));
}

function solveGrid() {
  const usedPlayers = new Set();
  const placements = [];

  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      const rowClub = currentGridClubs[i][0];
      const colClub = currentGridClubs[0][j];

      const player = fullPlayerData.find(p =>
        !usedPlayers.has(p.name) &&
        p.clubs.includes(rowClub) &&
        p.clubs.includes(colClub)
      );

      if (player) {
        console.log(`✅ Cell (${rowClub} x ${colClub}) → ${player.name}`);
        usedPlayers.add(player.name);
        placements.push({ row: i, col: j, player });
      } else {
        console.warn(`❌ No valid player for cell (${rowClub} x ${colClub})`);
      }
    }
  }

  placements.forEach(({ row, col, player }) => {
    setTimeout(() => {
      placePlayer([row, col], player);
    }, 200);
  });
}