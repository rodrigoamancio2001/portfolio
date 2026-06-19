function fitTextToWidth(selector) {
    const el = document.querySelector(selector);
    if (!el) return;

    const parentWidth = el.offsetWidth;   // largura da div
    const style = window.getComputedStyle(el);
    const currentFontSize = parseFloat(style.fontSize);

    // cria span temporário para medir o texto em pixels
    const temp = document.createElement('span');
    temp.style.fontFamily = style.fontFamily;
    temp.style.fontWeight = style.fontWeight;
    temp.style.fontSize = currentFontSize + 'px';
    temp.style.whiteSpace = 'nowrap';
    temp.style.visibility = 'hidden';
    temp.textContent = el.textContent;
    document.body.appendChild(temp);

    const textWidth = temp.offsetWidth;
    document.body.removeChild(temp);

    // calcula font-size necessário para preencher a largura
    const newFontSize = (parentWidth / textWidth) * currentFontSize;
    el.style.fontSize = newFontSize + 'px';
}

// Executa no load e resize
window.addEventListener("load", () => fitTextToWidth(".name-footer"));
window.addEventListener("resize", () => fitTextToWidth(".name-footer"));