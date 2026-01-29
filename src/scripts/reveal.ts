/**
 * Scroll reveal animations using Intersection Observer API
 */
export function initReveal() {
    const reveals = document.querySelectorAll('.reveal');

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        }
    );

    reveals.forEach(el => observer.observe(el));
}
