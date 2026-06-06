// design-patterns.js — Logic for Design Patterns Cheatsheet

document.addEventListener('DOMContentLoaded', () => {
    // 1. Category Navigation Filtering
    const navPills = document.querySelectorAll('.nav-pill');
    const sections = {
        'creational': document.getElementById('section-creational'),
        'structural': document.getElementById('section-structural'),
        'behavioral': document.getElementById('section-behavioral')
    };

    navPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            // Remove active class from all pills
            navPills.forEach(p => p.classList.remove('active'));
            // Add active class to clicked pill
            const target = e.target;
            target.classList.add('active');

            const category = target.getAttribute('data-category');

            if (category === 'all') {
                Object.values(sections).forEach(section => {
                    if (section) section.style.display = 'block';
                });
            } else {
                Object.keys(sections).forEach(key => {
                    if (sections[key]) {
                        if (key === category) {
                            sections[key].style.display = 'block';
                        } else {
                            sections[key].style.display = 'none';
                        }
                    }
                });
            }
        });
    });

    // 2. Search Functionality
    const searchInput = document.getElementById('searchInput');
    const patternCards = document.querySelectorAll('.pattern-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();

            patternCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('.pattern-short-desc').textContent.toLowerCase();

                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Search keyboard shortcut (Cmd+K / Ctrl+K)
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
        });
    }

    // 3. Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
