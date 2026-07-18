// Não executa nada em dispositivos móveis
if (window.innerWidth <= 768) {
    console.log("about-scroll desativado no mobile");
} else {

    let target = 0;
    let current = 0;
    const speed = 0.08;

    if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) target = el.offsetTop;
    }

    current = target;

    window.addEventListener("wheel", (e) => {
        e.preventDefault();

        target += e.deltaY;

        const maxScroll = document.body.scrollHeight - window.innerHeight;
        target = Math.max(0, Math.min(target, maxScroll));

    }, { passive: false });

    function smooth() {
        current += (target - current) * speed;
        window.scrollTo(0, current);
        requestAnimationFrame(smooth);
    }

    smooth();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            const el = document.querySelector(this.getAttribute("href"));
            if (!el) return;

            e.preventDefault();
            target = el.offsetTop;

        });
    });

}