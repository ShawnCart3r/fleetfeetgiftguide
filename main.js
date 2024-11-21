let currentIndex = 0;
        const contentBoxes = document.querySelectorAll('.content-box');
        const dots = document.querySelectorAll('.dot');
        let autoSlideInterval;

        function showContent(index) {
            contentBoxes.forEach((box, i) => {
                box.style.display = i === index - 1 ? 'flex' : 'none';
            });

            dots.forEach(dot => dot.classList.remove('active'));
            dots[index - 1].classList.add('active');

            currentIndex = index - 1;
        }

        function autoSlide() {
            autoSlideInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % contentBoxes.length;
                showContent(currentIndex + 1);
            }, 3000);
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => showContent(idx + 1));
        });

        window.onload = autoSlide;