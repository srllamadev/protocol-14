// Crear estrellas para el fondo
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starsCount = 200;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Tamaño aleatorio
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Posición aleatoria
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Opacidad aleatoria
        star.style.opacity = Math.random() * 0.8 + 0.2;
        
        // Animación
        const duration = Math.random() * 10 + 5;
        star.style.animation = `pulse ${duration}s infinite`;
        
        starsContainer.appendChild(star);
    }
}

// Animación al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observar elementos que queremos animar
    document.querySelectorAll('.agent-card, .tech-card, .feature').forEach(el => {
        observer.observe(el);
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    initScrollAnimations();
    
    // Efecto hover en botones
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'pulse 1.5s infinite';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.animation = '';
        });
    });
    
    // Efecto de desplazamiento suave para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Movimiento de naves espaciales
    const spacecrafts = document.querySelectorAll('.spacecraft');
    spacecrafts.forEach((spacecraft) => {
        spacecraft.addEventListener('mouseover', () => {
            spacecraft.style.transform = 'scale(1.2)';
        });
        spacecraft.addEventListener('mouseout', () => {
            spacecraft.style.transform = 'scale(1)';
        });
    });
});