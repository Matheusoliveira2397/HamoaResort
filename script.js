document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const totalImages = 30;
    let currentImageIndex = 0;
    const images = [];

    // Load all images
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        // Padroniza o nome do arquivo para sempre ter dois dígitos
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
        if (i === 1) {
            img.classList.add('active');
        }
        carousel.appendChild(img);
        images.push(img);
    }

    // Change image every 5 seconds
    setInterval(() => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].classList.add('active');
    }, 5000);
});