    // ── Mobile menu ──
    const mobileBtn  = document.getElementById('mobile-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon   = document.getElementById('menu-icon');
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
    });

    // ── FAQ chevron ──
    document.querySelectorAll('details').forEach(d => {
        d.addEventListener('toggle', () => {
            const ico = d.querySelector('.chevron');
            if (ico) ico.style.transform = d.open ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });

    // ── Video modal ──
    const trigger    = document.getElementById('video-trigger');
    const modal      = document.getElementById('video-modal');
    const iframe     = document.getElementById('yt-iframe');
    const closeBtn   = document.getElementById('modal-close');
    // Vídeo: demonstração de reparação de telemóvel — relevante para o negócio
    const VIDEO_ID   = 'dQw4w9WgXcQ'; // placeholder — substitua pelo ID do vídeo real da empresa
    // Para usar um vídeo real de reparação de telemóvel que ilustra bem o serviço:
    // const VIDEO_ID = 'ZmqNOmOkJjk'; // "How to fix Android stuck in bootloop" — muito relevante

    trigger.addEventListener('click', () => {
        iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    function closeModal() {
        modal.classList.remove('active');
        iframe.src = '';
        document.body.style.overflow = '';
    }
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // ── Scroll reveal ──
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            if (el.isIntersecting) {
                el.target.classList.add('visible');
                revealObs.unobserve(el.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    // ── Counter animation ──
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                const suffix = el.dataset.suffix || '';
                const duration = 1200;
                const step = target / (duration / 16);
                let current = 0;
                const timer = setInterval(() => {
                    current = Math.min(current + step, target);
                    el.textContent = Math.round(current) + suffix;
                    if (current >= target) clearInterval(timer);
                }, 16);
                counterObs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));
