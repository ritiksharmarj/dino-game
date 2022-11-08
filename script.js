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

/*
 * Check dino is alive or not
 * setInterval() method repeatedly calls a function with a fixed time delay
 */
let isAlive = setInterval(() => {
  /*
   * getComputedStyle() method returns an object containing the values of all CSS properties of an element
   * getPropertyValue() method returns a string containing the value of a specified CSS property
   * parseInt() function parses a string argument and returns an integer
   */

  // Get dino's current Y position
  const dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue('top')
  );

  // Get cactus's current X position
  const cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );

  // Detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert('Game Over!');
  }
}, 10);

// Add event listener on keydown (keyboard keys)
document.addEventListener('keydown', () => {
  jump();
});
