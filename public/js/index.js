
// Experience Accordion

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const content = accordion.querySelector('.accordion-content');
    const icon = accordion.querySelector('.accordion-icon');
    
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
            header.classList.toggle('active');
            content.classList.toggle('active');
            icon.classList.toggle('active');
        });
    }
);