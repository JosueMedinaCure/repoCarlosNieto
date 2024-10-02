document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

window.addEventListener("scroll", function(){
    const header = document.querySelector(".menu");
    header.classList.toggle("animacion", window.scrollY > 0);

})




let currentSlide = 0;
let autoSlideInterval;

// Función que mueve el carrusel
function moveSlide(direction) {
    const carousel = document.querySelector('.contenido-inicial');
    const totalSlides = document.querySelectorAll('.content').length;

    // Calcular la nueva posición del slide
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Aplicar la transformación para mover el carrusel
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Función para hacer que el carrusel se deslice automáticamente
function autoSlide() {
    moveSlide(1); // Mover una imagen hacia adelante
}

// Iniciar el deslizador automático
function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 6000); // Cada 3 segundos
}

// Reiniciar el deslizamiento automático cuando se hace clic en los botones
function restartAutoSlide(direction) {
    clearInterval(autoSlideInterval); // Detener el intervalo actual
    moveSlide(direction);             // Mover el carrusel manualmente
    startAutoSlide();                 // Reiniciar el deslizamiento automático
}

// Agregar eventos a los botones de navegación
document.getElementById('prevBtn').addEventListener('click', () => {
    restartAutoSlide(0); // Mover una imagen hacia atrás
});

document.getElementById('nextBtn').addEventListener('click', () => {
    restartAutoSlide(0); // Mover una imagen hacia adelante
});

// Iniciar el carrusel automáticamente al cargar la página
startAutoSlide();
