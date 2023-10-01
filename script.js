//your JS code here. If required.
function playSound(soundFileName) {
    const audio = new Audio(`sounds/${soundFileName}`);
    audio.play();
}

