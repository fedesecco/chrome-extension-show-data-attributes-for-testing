var dataAttrs = '[data-cy], [data-testid]';
var selectAllDataAttrs = document.querySelectorAll(dataAttrs);
var divs = document.getElementsByTagName("DIV");

for (let i = 0; i < selectAllDataAttrs.length; i++) {
    let d = selectAllDataAttrs[i];
    tDataCy = d.getAttribute("data-cy");
    tDataTestId = d.getAttribute("data-testid");

    let boxText;
    if (tDataCy) {
        boxText = tDataCy
    }
    if (tDataTestId) {
        boxText = tDataTestId
    }

    // positioning
    let attrBox = `<div class="attr-box">${boxText}</div>`
    const elements = ['SELECT', 'TEXTAREA', 'INPUT', 'BUTTON', 'SPAN'];
    d.style.position = "relative";
    d.parentElement.style.position = "relative";
    d.className += " attr-bg";

    if (elements.indexOf(d.tagName) !== -1) {
        d.insertAdjacentHTML('afterend', attrBox);
    } else {
        d.insertAdjacentHTML('afterbegin', attrBox);
    }
}
