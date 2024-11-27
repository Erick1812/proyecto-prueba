document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const totalTips = document.querySelectorAll('.tip').length;

    // Función para cambiar el carrusel a la izquierda
    function moveCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Botón para ir a la siguiente diapositiva
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalTips; // Asegura que se cicle
        moveCarousel();
    });

    // Botón para ir a la diapositiva anterior
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalTips) % totalTips; // Asegura que se cicle
        moveCarousel();
    });
});
