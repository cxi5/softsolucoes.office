    // Mobile menu
    const btn  = document.getElementById('mobile-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    // Toggle artigo
    function toggleArticle(id, btnEl) {
        const body = document.getElementById(id);
        const chevron = btnEl.querySelector('.art-chevron');
        const span = btnEl.querySelector('span');
        body.classList.toggle('open');
        chevron.classList.toggle('open');
        span.textContent = body.classList.contains('open') ? 'Fechar artigo' : 'Ler artigo completo';
    }

    // Scroll reveal
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
