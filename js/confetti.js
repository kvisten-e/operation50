import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function party() {
  confetti({

  });
}

document.getElementById('startButton').addEventListener('click', party)
