const zoomImages = document.querySelectorAll('.three-images-to-zoom img, .two-images-to-zoom img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// abrir imagem
zoomImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
    });
});

// fechar ao clicar fora
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});