
// Experience Accordion

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    
        accordion.addEventListener('click', () => {
            const isActive = accordion.classList.contains('is-open');

            if (isActive) {
                accordion.classList.remove('is-open');
                accordion.classList.add('is-closed');
            } else {
                accordion.classList.remove('is-closed');
                accordion.classList.add('is-open');
            }

            const accordionParts = accordion.querySelectorAll('.accordion-header, .accordion-content, .accordion-icon');
            
            accordionParts.forEach(part => {
                if (part.classList.contains('is-open')) {
                    part.classList.remove('is-open');
                    part.classList.add('is-closed');
                }
                else {
                    part.classList.remove('is-closed');
                    part.classList.add('is-open');
                }
            });
        });
    }
);