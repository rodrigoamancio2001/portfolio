window.onload = () => document.body.classList.add("loaded");

document.querySelectorAll("a").forEach(a => {
  a.onclick = e => {
    const url = new URL(a.href, location.href);

    // links internos ou externos para mesma origem (mailto, tel e download ignorados)
    if (
      url.origin === location.origin &&
      !a.href.startsWith("mailto:") &&
      !a.href.startsWith("tel:") &&
      a.target !== "_blank" &&
      !a.hasAttribute("download")
    ) {
      e.preventDefault();
      document.body.classList.add("fade-out");

      // Aguarda fade e muda a URL (com hash, se existir)
      setTimeout(() => {
        location.href = a.href;
      }, 400);
    }
  };
});