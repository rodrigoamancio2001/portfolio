const cursorText = document.getElementById("cursor-text-home");
const images = document.querySelectorAll(".scroll-container img");

document.addEventListener("mousemove", (e) => {
    cursorText.style.left = e.clientX + "px";
    cursorText.style.top = e.clientY + "px";
});

images.forEach(img => {

    img.addEventListener("mouseenter", (e) => {

        const words = img.dataset.title.split("|");

        cursorText.innerHTML = `
            <span class="cursor-word-1">${words[0]}</span>
            <span class="cursor-word-2">${words[1]}</span>
        `;

        cursorText.style.left = e.clientX + "px";
        cursorText.style.top = e.clientY + "px";
        cursorText.style.opacity = 1;
    });

    img.addEventListener("mouseleave", () => {
        cursorText.style.opacity = 0;
    });

});