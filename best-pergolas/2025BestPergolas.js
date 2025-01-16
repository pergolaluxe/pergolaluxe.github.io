function nextSlide(carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel-images`);
    const totalImages = carousel.children.length;
    const imageWidth = carousel.children[0].clientWidth;
    const currentTranslateX = getTranslateX(carousel);
    const maxTranslateX = -(imageWidth * (totalImages - 1));

    if (currentTranslateX > maxTranslateX) {
        carousel.style.transform = `translateX(${currentTranslateX - imageWidth}px)`;
    } else {
        carousel.style.transform = `translateX(0)`;
    }
}

function prevSlide(carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel-images`);
    const imageWidth = carousel.children[0].clientWidth;
    const currentTranslateX = getTranslateX(carousel);

    if (currentTranslateX < 0) {
        carousel.style.transform = `translateX(${currentTranslateX + imageWidth}px)`;
    } else {
        const totalImages = carousel.children.length;
        const maxTranslateX = -(imageWidth * (totalImages - 1));
        carousel.style.transform = `translateX(${maxTranslateX}px)`;
    }
}

function getTranslateX(element) {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
}


 