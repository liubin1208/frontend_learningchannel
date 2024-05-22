const horse = document.querySelector('.horse');

document.querySelectorAll('[type="color"]').forEach((input) => {
  input.addEventListener('input', (e) => {
    horse.style.setProperty('--color-' + e.target.id, e.target.value);
  });
});
