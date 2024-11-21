document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentIndex = 0;
    let autoSlideInterval;

    const updateCarousel = (index) => {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'flex' : 'none';
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
        }, 3000);
    };

    const handleUserInteraction = (index) => {
        clearInterval(autoSlideInterval);
        updateCarousel(index);
        setTimeout(autoSlide, 5000); // Resume auto-slide after 5 seconds
    };

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(dot.dataset.index, 10);
            handleUserInteraction(index);
        });
    });

    items.forEach(item => {
        const image = item.querySelector('img');
        image.addEventListener('click', () => {
            const index = parseInt(item.dataset.index, 10);
            handleUserInteraction(index);
        });
    });

    updateCarousel(0);
    autoSlide();
});

