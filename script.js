document.addEventListener('DOMContentLoaded', function () {
    const messageElement = document.getElementById('message');
    const playButton = document.getElementById('play-button');
    const audioElement = document.getElementById('audio');

    const today = new Date();
    const noobslandDate = new Date(today.getFullYear(), 6, 20); // Meses en JS van de 0 a 11, así que 6 es julio

    if (today.getMonth() === 6 && today.getDate() === 20) {
        messageElement.textContent = "Yes, it's Noobsland!";
    } else {
        messageElement.textContent = "No, it's not Noobsland.";
    }

    playButton.addEventListener('click', function () {
        audioElement.play();
    });
});
