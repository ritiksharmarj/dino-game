const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

function jump() {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');

    // Remove jump class once the timer expires
    setTimeout(() => {
      dino.classList.remove('jump');
    }, 300);
  }
}

// Add event listener on keydown
document.addEventListener('keydown', () => {
  jump();
});
