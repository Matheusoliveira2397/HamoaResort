document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.content-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;
            
            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === tabName) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Photo carousel functionality
    const carousel = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const totalImages = 30;

    // Load all images
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        const fileName = i === 1 ? 'hamoa1.jpeg' : 
                        i === 2 ? 'hamoa2.jpeg' :
                        i === 3 ? 'hamoa3.jpeg' :
                        i === 4 ? 'hamoa4.jpeg' :
                        i === 5 ? 'hamoa5.jpeg' :
                        i === 6 ? 'hamoa6.jpeg' :
                        i === 7 ? 'hamoa7.jpeg' :
                        i === 8 ? 'hamoa8.jpeg' :
                        i === 9 ? 'hamoa9.jpeg' :
                        `Hamoa${i}.jpeg`;
        img.src = fileName;
        img.alt = `Imagem ${i} do Hamoa Resort`;
        carousel.appendChild(img);
    }

    // Navigation buttons
    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -320, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 320, behavior: 'smooth' });
    });

    // Audio player functionality
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