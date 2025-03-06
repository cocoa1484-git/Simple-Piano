document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => playSound(key));
});

function playSound(key) {
    const note = key.dataset.note;
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}
