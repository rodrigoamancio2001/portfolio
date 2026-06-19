const cursorFooter = document.getElementById("cursor-text-footer");
const footerName = document.querySelector(".name-footer");

// Distância mínima do topo da div para ativar o cursor customizado
const activationOffset = 40;

document.addEventListener("mousemove", (e) => {
    const rect = footerName.getBoundingClientRect();
    const mouseYRelative = e.clientY - rect.top;

    // cursor customizado segue o mouse
    cursorFooter.style.left = e.clientX + "px";
    cursorFooter.style.top = e.clientY + "px";

    if (
        mouseYRelative >= activationOffset &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
    ) {
        // Ativa cursor customizado e esconde cursor normal
        cursorFooter.textContent = footerName.dataset.title;
        cursorFooter.style.opacity = 1;
        footerName.style.cursor = "none";
    } else if (
        mouseYRelative < activationOffset &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
    ) {
        // Nos primeiros 30px: cursor normal (default) visível, customizado invisível
        cursorFooter.style.opacity = 0;
        footerName.style.cursor = "default";
    } else {
        // Fora da div: cursor normal e customizado invisível
        cursorFooter.style.opacity = 0;
        footerName.style.cursor = "default";
    }
});