        const btn = document.getElementById('mobile-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');
        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });

        const obs = new IntersectionObserver((entries) => {
            entries.forEach(el => {
                if (el.isIntersecting) el.target.style.animationPlayState = 'running';
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-up').forEach(el => {
            el.style.animationPlayState = 'paused';
            obs.observe(el);
        });

        // Barra de horário dinâmica
        const now = new Date();
        const hour = now.getHours() + now.getMinutes() / 60;
        const isOpen = hour >= 8 && hour < 18;
        const pct = Math.min(Math.max(((hour - 8) / 10) * 100, 0), 100);

        document.querySelectorAll('.time-bar').forEach(bar => {
            bar.style.background = isOpen
                ? `linear-gradient(90deg, #3b82f6 0%, #2dd4bf ${pct}%, rgba(255,255,255,0.08) ${pct}%)`
                : 'rgba(255,255,255,0.06)';
        });

        // Status dinâmico
        const badge = document.querySelector('.pulse-dot')?.closest('.badge');
        if (badge) {
            const dot = badge.querySelector('.pulse-dot');
            if (!isOpen) {
                if (dot) dot.style.background = '#f59e0b';
                badge.style.color = '#fbbf24';
                badge.style.borderColor = 'rgba(245,158,11,0.2)';
                const txt = badge.childNodes[badge.childNodes.length - 1];
                if (txt) txt.textContent = ' Fora de Horário';
            }
        }
