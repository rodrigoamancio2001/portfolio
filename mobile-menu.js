const button = document.getElementById("mobile-menu-toggle");
const overlay = document.getElementById("mobile-menu-overlay");

const desktopMenu = document.getElementById("central-buttons");
const desktopSwitch = document.querySelector(".switch-button");

const mobileLinks = document.getElementById("mobile-menu-links");
const mobileSwitch = document.getElementById("mobile-menu-switch");

const topMenu = document.querySelector(".top-menu");

// Abrir menu
function openMobileMenu() {
    overlay.classList.add("open");
    button.classList.add("open");

    mobileLinks.appendChild(desktopMenu);
    mobileSwitch.appendChild(desktopSwitch);
}

// Fechar menu
function closeMobileMenu() {
    overlay.classList.remove("open");
    button.classList.remove("open");

    topMenu.insertBefore(desktopMenu, button);
    topMenu.appendChild(desktopSwitch);
}

// Botão +
button.addEventListener("click", () => {

    if (overlay.classList.contains("open")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }

});

// Fechar ao clicar num link
desktopMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768 && overlay.classList.contains("open")) {

            setTimeout(() => {
                closeMobileMenu();
            }, 150);

        }

    });

});