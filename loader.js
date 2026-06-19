window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const firstButton = document.getElementById("first-button");

    if (!loader) return;

    const totalDuration = 2650;

    function runLoader() {
        loader.style.display = "flex";
        loader.style.opacity = "1";

        setTimeout(() => {
            loader.style.transition = "opacity 0.8s ease";
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);

        }, totalDuration);
    }

    // 👉 PRIMEIRO LOAD
    if (!sessionStorage.getItem("loaderShown")) {
        sessionStorage.setItem("loaderShown", "true");
        runLoader();
    } else {
        loader.style.display = "none";
    }

    // 👉 CLICK NO BOTÃO (força mostrar outra vez)
    if (firstButton) {
        firstButton.addEventListener("click", function () {
            sessionStorage.removeItem("loaderShown"); // reset
        });
    }
});