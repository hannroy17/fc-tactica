const zones = document.querySelectorAll('.zone');
const scoreDisplay = document.getElementById('score');
const bestDisplay = document.getElementById('best-score');
const resetButton = document.getElementById('reset-button');
const playerImage = document.getElementById('player-image');
const playerName = document.getElementById('player-name');
const celebrationMessage = document.getElementById('celebration');

const allPlayers = legendPlayerData.filter(p => p.goals && p.goals > 0);
let usedPlayers = [];
let score = 0;
let best = localStorage.getItem('bestScore') || 0;
let currentPlayer = null;

function formatNumber(n) {
  return n.toLocaleString('fr-FR');
}

function updateScoreDisplay() {
  if (scoreDisplay) {
    scoreDisplay.textContent = `Score : ${formatNumber(score)} / 50 000`;
  }
  if (bestDisplay) {
    bestDisplay.textContent = `🏆 Best: ${formatNumber(best)}`;
  }
}

updateScoreDisplay();

function spinPlayer() {
  const availablePlayers = allPlayers.filter(p => !usedPlayers.includes(p));
  if (availablePlayers.length === 0) {
    playerName.textContent = 'Tous les joueurs ont été utilisés';
    playerImage.src = '';
    return;
  }

  let i = 0;
  const spin = setInterval(() => {
    const random = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
    playerImage.src = random.img;
    playerName.textContent = random.name;
    i++;
    if (i > 10) { // raccourci la durée
      clearInterval(spin);
      currentPlayer = random;
    }
  }, 60);
}

zones.forEach(zone => {
  zone.addEventListener('click', () => {
    if (!currentPlayer || zone.classList.contains('filled')) return;

    const multiplier = parseInt(zone.dataset.multiplier);
    const added = currentPlayer.goals * multiplier;
    score += added;

    zone.innerHTML = `<div><strong>${currentPlayer.name}</strong></div><div>+${formatNumber(added)} buts</div>`;
    zone.classList.add('filled');

    usedPlayers.push(currentPlayer);
    currentPlayer = null;

    updateScoreDisplay();

    if (score >= 50000 && celebrationMessage) {
      celebrationMessage.style.display = 'block';
      celebrationMessage.classList.add('show');
      setTimeout(() => celebrationMessage.classList.remove('show'), 3000);
    }

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
  if (celebrationMessage) celebrationMessage.style.display = 'none';
  spinPlayer();
});

spinPlayer();