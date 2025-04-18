const zones = document.querySelectorAll('.zone');
const scoreDisplay = document.getElementById('score');
const bestDisplay = document.getElementById('best-score');
const resetButton = document.getElementById('reset-button');
const playerImage = document.getElementById('player-image');
const playerName = document.getElementById('player-name');

const allPlayers = legendPlayerData.filter(p => p.goals && p.goals > 0);
let usedPlayers = [];
let score = 0;
let best = localStorage.getItem('bestScore') || 0;
let currentPlayer = null;

function updateScoreDisplay() {
  if (scoreDisplay) {
    scoreDisplay.textContent = `Score: ${score} / 50,000`;
  }
  if (bestDisplay) {
    bestDisplay.textContent = `🏆 Best: ${best}`;
  }
}

updateScoreDisplay();

function spinPlayer() {
  let i = 0;
  const spin = setInterval(() => {
    const random = allPlayers[Math.floor(Math.random() * allPlayers.length)];
    playerImage.src = random.img;
    playerName.textContent = random.name;
    i++;
    if (i > 20) {
      clearInterval(spin);
      currentPlayer = random;
    }
  }, 70);
}

zones.forEach(zone => {
  zone.addEventListener('click', () => {
    if (!currentPlayer || zone.classList.contains('filled')) return;

    const multiplier = parseInt(zone.dataset.multiplier);
    const added = currentPlayer.goals * multiplier;
    score += added;

    zone.innerHTML = `<img src="${currentPlayer.img}" alt="" class="mini-player" /><div>${currentPlayer.name}</div><div>+${added} goals</div>`;
    zone.classList.add('filled');

    usedPlayers.push(currentPlayer);
    currentPlayer = null;

    updateScoreDisplay();

    if ([...zones].every(z => z.classList.contains('filled'))) {
      if (score > best) {
        best = score;
        localStorage.setItem('bestScore', best);
        updateScoreDisplay();
      }
    } else {
      spinPlayer();
    }
  });
});

resetButton.addEventListener('click', () => {
  zones.forEach(z => {
    z.innerHTML = z.dataset.multiplier == 1 ? 'Career' : `x${z.dataset.multiplier}`;
    z.classList.remove('filled');
  });
  score = 0;
  usedPlayers = [];
  currentPlayer = null;
  updateScoreDisplay();
  spinPlayer();
});

// Initial spin
spinPlayer();
