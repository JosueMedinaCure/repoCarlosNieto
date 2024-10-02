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

function moveSlide(direction) {
    const carousel = document.querySelector('.contenido-inicial');
    const totalSlides = document.querySelectorAll('.content').length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}


function autoSlide() {
    moveSlide(1);
}

// Desliza automáticamente cada 3 segundos
setInterval(autoSlide, 7000);
