document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-button');
    let currentAudio = null;

    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioFile = this.dataset.audio;
            
            // If there's an audio playing, stop it
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                document.querySelector('.playing').classList.remove('playing');
            }

            // If we clicked the same button that was playing, just stop
            if (currentAudio && currentAudio.src.includes(audioFile)) {
                currentAudio = null;
                return;
            }

            // Play the new audio
            currentAudio = new Audio(audioFile);
            currentAudio.play();
            this.classList.add('playing');

            // When audio ends
            currentAudio.onended = () => {
                this.classList.remove('playing');
                currentAudio = null;
            };
        });
    });
});