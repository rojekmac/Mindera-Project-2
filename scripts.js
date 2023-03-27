const boxes = document.querySelectorAll('.box');
const keys = document.querySelectorAll('.key');
let currentBox = 0;

function handleClick(e) {
  const key = e.target;
  if (key.classList.contains('enter')) {
    return;
  }
  const letter = key.textContent;
  boxes[currentBox].textContent = letter;
  currentBox++;
}

keys.forEach(key => key.addEventListener('click', handleClick))