document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevArrow = document.querySelector('.carousel-arrow-prev');
    const nextArrow = document.querySelector('.carousel-arrow-next');
    let currentIndex = 0;
    let autoSlideInterval;

    const updateCarousel = (index) => {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    };

    const autoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % items.length;
            updateCarousel(nextIndex);
        }, 5000);
    };

    const handleUserInteraction = (index) => {
        clearInterval(autoSlideInterval);
        updateCarousel(index);
        setTimeout(autoSlide, 10000); // Resume auto-slide after 10 seconds
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => handleUserInteraction(index));
    });

    prevArrow.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        handleUserInteraction(prevIndex);
    });

    nextArrow.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % items.length;
        handleUserInteraction(nextIndex);
    });

    updateCarousel(0);
    autoSlide();
});

document.querySelectorAll('.carousel-image').forEach((image, index, images) => {
    image.addEventListener('click', () => {
        const activeItem = document.querySelector('.carousel-item.active');
        activeItem.classList.remove('active');

        // Determine the next or previous slide based on the current index
        const nextIndex = (index + 1) % images.length; // Loop back to start if at the end
        images[nextIndex].parentElement.classList.add('active');
    });
});

const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// Function to update active slide
function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

// Arrow navigation
document.querySelector('.carousel-arrow-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop to last slide if at the first
    showSlide(currentIndex);
});

document.querySelector('.carousel-arrow-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Loop to first slide if at the last
    showSlide(currentIndex);
});

