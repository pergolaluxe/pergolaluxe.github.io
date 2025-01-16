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


 // Example price level, where 3 indicates medium price range
 const priceLevel = 3; // Adjust this value to change the number of icons

 // Select the price icons container
 const priceIconsContainer = document.getElementById('priceIcons');

 // Generate icons based on the price level
 for (let i = 0; i < priceLevel; i++) {
     const icon = document.createElement('i');
     icon.textContent = '💲'; // or any other icon
     priceIconsContainer.appendChild(icon);
 }