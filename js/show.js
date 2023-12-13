var dataAttrs = '[data-testid]'
var selectAllDataAttrs = document.querySelectorAll(dataAttrs)
var divs = document.getElementsByTagName('DIV')

for (let i = 0; i < selectAllDataAttrs.length; i++) {
    let d = selectAllDataAttrs[i]
    //tDataCy = d.getAttribute('data-cy')
    tDataTestId = d.getAttribute('data-testid')

    let boxText
    /* if (tDataCy) {
        boxText = tDataCy
    } */
    if (tDataTestId) {
        boxText = tDataTestId
    }

    // positioning
    let attrBox = `<div class="attr-box" id="attrBox-${boxText}" >${boxText}</div>`
    const elements = ['SELECT', 'TEXTAREA', 'INPUT', 'BUTTON', 'SPAN']
    d.style.position = 'relative'
    d.parentElement.style.position = 'relative'
    d.className += ' attr-bg'

    if (elements.indexOf(d.tagName) !== -1) {
        d.insertAdjacentHTML('afterend', attrBox)
        copyToCliBoardOnClick(boxText)
    } else {
        d.insertAdjacentHTML('afterbegin', attrBox)
        copyToCliBoardOnClick(boxText)
    }
}

function copyToCliBoardOnClick(text) {
    const box = document.getElementById(`attrBox-${text}`)
    if (box) {
        box.addEventListener('click', () => {
            navigator.clipboard
                .writeText(`'${text}'`)
                .then(() => {
                    console.log('Copied to clipboard: ' + text)
                })
                .catch((err) => {
                    console.error('Unable to copy to clipboard: ', err)
                })
        })
    }
}
