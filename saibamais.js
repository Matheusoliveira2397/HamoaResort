document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.content-section');

    // Ativar primeira aba por padrão
    if (tabButtons.length > 0 && sections.length > 0) {
        tabButtons[0].classList.add('active');
        sections[0].classList.add('active');
    }

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

    if (carousel) {
        // Função para carregar imagem com tratamento de erro
        const loadImage = (index) => {
            const img = document.createElement('img');
            // Padroniza o nome do arquivo para sempre ter dois dígitos e a primeira letra maiúscula
            const num = index < 10 ? `0${index}` : `${index}`;
            const fileName = `Hamoa${num}.jpeg`;
            
            console.log('Carregando imagem na galeria:', fileName);
            
            img.onerror = () => {
                console.error(`Erro ao carregar imagem: ${fileName}`);
            };

            img.src = fileName;
            img.alt = `Imagem ${index} do Hamoa Resort`;
            img.loading = 'lazy'; // Adiciona carregamento lazy para melhor performance
            carousel.appendChild(img);

            // Adiciona efeito de fade-in quando a imagem carregar
            img.onload = () => {
                img.style.opacity = '1';
            };
        };

        // Carrega todas as imagens
        for (let i = 1; i <= totalImages; i++) {
            loadImage(i);
        }
    } else {
        console.error('Carousel container não encontrado');
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