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
        // Padroniza o nome do arquivo para sempre ter dois dígitos
        const fileName = i === 1 ? 'Hamoa1.jpeg' : 
                   i === 2 ? 'Hamoa2.jpeg' :
                   i === 3 ? 'Hamoa3.jpeg' :
                   i === 4 ? 'Hamoa4.jpeg' :
                   i === 5 ? 'Hamoa5.jpeg' :
                   i === 6 ? 'Hamoa6.jpeg' :
                   i === 7 ? 'Hamoa7.jpeg' :
                   i === 8 ? 'Hamoa8.jpeg' :
                   i === 9 ? 'Hamoa9.jpeg' :
                   `Hamoa${i}.jpeg`;
        img.src = fileName;
        img.alt = `Imagem ${i} do Hamoa Resort`;
        if (i === 1) {
            img.classList.add('active');
        }
        carousel.appendChild(img);
        images.push(img);
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