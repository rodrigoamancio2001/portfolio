function pageLoaded() {
    document.body.classList.remove("fade-out");
    document.body.classList.add("loaded");
}

// Primeira abertura da página
window.addEventListener("load", pageLoaded);

// Quando a página é restaurada pelo gesto/botão "Voltar"
window.addEventListener("pageshow", pageLoaded);

document.querySelectorAll("a").forEach(a => {

    a.addEventListener("click", e => {

        const url = new URL(a.href, location.href);

        // Ignora links externos, mailto, tel, downloads, _blank e âncoras
        if (
            url.origin !== location.origin ||
            a.href.startsWith("mailto:") ||
            a.href.startsWith("tel:") ||
            a.target === "_blank" ||
            a.hasAttribute("download") ||
            a.hash !== ""
        ) {
            return;
        }

        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
            location.href = a.href;
        }, 400);

    });

});