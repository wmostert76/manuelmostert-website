/**
 * Custom cursor functionality with hover effects
 */
export function initCursor() {
    const cursor = document.querySelector('.cursor') as HTMLElement;

    if (!cursor) return;

    // Track cursor position
    document.addEventListener('mousemove', (e: MouseEvent) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}
