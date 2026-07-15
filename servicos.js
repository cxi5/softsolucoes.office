        const btn = document.getElementById('mobile-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');
        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(el => {
                if (el.isIntersecting) el.target.style.animationPlayState = 'running';
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
