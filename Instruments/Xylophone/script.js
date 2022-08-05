function removeStyles(e) {
    if (e.propertyName !== 'box-shadow') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    let dataKey = e.key;

    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    const key = document.querySelector(`.note[data-key="${dataKey}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.note'));
keys.forEach(key => key.addEventListener('transitionend', removeStyles));
window.addEventListener('keydown', playSound);
window.addEventListener('click', playSound);