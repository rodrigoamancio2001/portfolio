document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (!scrollContainer) return;

    let targetScroll = scrollContainer.scrollLeft;
    let currentScroll = scrollContainer.scrollLeft;
    const speed = 0.08; // suavidade do scroll
    const edgeZone = 100; // pixels próximos das extremidades para abrandar

    window.addEventListener('wheel', (e) => {
        // movimento horizontal + vertical do touchpad
        let delta = e.deltaY + e.deltaX;

        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // desaceleração nas extremidades
        if ((targetScroll + delta) < edgeZone) {
            delta *= 0.3; // 30% da velocidade perto do início
        } else if ((targetScroll + delta) > maxScroll - edgeZone) {
            delta *= 0.3; // 30% da velocidade perto do fim
        }

        targetScroll += delta;
        targetScroll = Math.max(0, Math.min(targetScroll, maxScroll)); // garante limites

        e.preventDefault();
    }, { passive: false });

    function smoothScroll() {
        currentScroll += (targetScroll - currentScroll) * speed;
        scrollContainer.scrollLeft = currentScroll;
        requestAnimationFrame(smoothScroll);
    }

    smoothScroll();
});