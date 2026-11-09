// Navegação por âncoras: o CSS cuida da rolagem suave e do deslocamento do cabeçalho.
const backToTopButton = document.getElementById('backToTopBtn');
const yearSpan = document.getElementById('ano-atual');

if (yearSpan) yearSpan.textContent = new Date().getFullYear();

function updateBackToTop() {
    if (!backToTopButton) return;
    backToTopButton.style.display = window.scrollY > 320 ? 'block' : 'none';
}

window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();

if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
}

// Destaca o item de menu correspondente à seção em exibição.
if ('IntersectionObserver' in window) {
    const navLinks = [...document.querySelectorAll('.nav-list a[href^="#"]')];
    const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + visible.target.id) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, .1, .3] });
    sections.forEach(section => observer.observe(section));
}
