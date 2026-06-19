window.onload = () => document.body.classList.add("loaded");

document.querySelectorAll("a").forEach(a => {
  a.onclick = e => {

const url = new URL(a.href, location.href);

if (
  url.origin !== location.origin ||
  a.href.startsWith("mailto:") ||
  a.href.startsWith("tel:") ||
  a.target === "_blank" ||
  a.hasAttribute("download") ||
  a.hash !== ""                 // ← ignora âncoras
) {
  return;
}

    e.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => location.href = a.href, 400);
  };
});