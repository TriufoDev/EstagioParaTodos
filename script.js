document.addEventListener('DOMContentLoaded', function() {
    // --- Splash Screen ---
    const splash = document.querySelector('.splash-screen');
    if (splash) {
        // Hide splash screen after a delay
        setTimeout(() => {
            splash.classList.add('hidden');
        }, 2200); // 2.2 segundos
    }

    // --- Navegação Responsiva (Hamburger) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');

    const toggleNav = () => {
        // Toggle a classe para abrir/fechar o menu
        navLinks.classList.toggle('nav-active');
        
        // Animação dos links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animação do ícone Hamburger
        hamburger.classList.toggle('toggle');
        
        // Bloquear scroll do body quando o menu está aberto
        body.classList.toggle('no-scroll');
    };

    hamburger.addEventListener('click', toggleNav);

    // --- Rolagem Suave e Fechar Menu ---
    const allLinks = document.querySelectorAll('a[href^="#"]');

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Se o menu mobile estiver aberto, fecha ele
            if (navLinks.classList.contains('nav-active')) {
                toggleNav();
            }
        });
    });

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parentItem = question.parentElement;
            parentItem.classList.toggle('active');
        });
    });
});
