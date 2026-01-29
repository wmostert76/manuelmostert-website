/**
 * Smooth scrolling for anchor links
 */
export function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e: Event) {
            e.preventDefault();

            const target = document.querySelector(
                (this as HTMLAnchorElement).getAttribute('href') as string
            );

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
