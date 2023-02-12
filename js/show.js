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

// TEST NEW CODE
// use regex to get the testing attributes like 'data-' = data-cy, data-test, data-testing, data-testid, data-qa
var allElements = document.querySelectorAll('*');
var resultArr = [];

allElements.forEach((element) => {
    for (const [key, value] of Object.entries(element.dataset)) {
        if (/(cy|test|testid|testing|qa)/.test(key)) {
            resultArr.push(element);
        }
    }
});

console.log(resultArr);