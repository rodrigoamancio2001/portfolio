const cursorText = document.getElementById("cursor-text-home");
const images = document.querySelectorAll(".next-project-image img, .one-image img, .two-images img, .three-images-to-zoom img, .two-images-to-zoom img, .one-image video, .first-image video, .two-images video, .three-images-mafra img, .seven-images img");

document.addEventListener("mousemove", (e) => {
    cursorText.style.left = e.clientX + "px";
    cursorText.style.top = e.clientY + "px";
});

images.forEach(img => {

    img.addEventListener("mouseenter", (e) => {

        const data = img.dataset.title?.trim();

        if (!data) return;

        // verifica se existem duas partes (com |)
        if (data.includes("|")) {

            const words = data.split("|");

            cursorText.innerHTML = `
                <span class="cursor-word-1">${words[0].trim()}</span>
                <span class="cursor-word-2">${words[1].trim()}</span>
            `;

        } else {

            // apenas uma palavra/frase → usa estilo 2
            cursorText.innerHTML = `
                <span class="cursor-word-2">${data}</span>
            `;

        }

        cursorText.style.left = e.clientX + "px";
        cursorText.style.top = e.clientY + "px";
        cursorText.style.opacity = 1;
    });

    img.addEventListener("mouseleave", () => {
        cursorText.style.opacity = 0;
    });

});