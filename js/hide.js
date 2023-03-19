const ATTRIBUTE_BOX_CLASS = '.attribute-box'

var selectAllAttrBoxes = document.querySelectorAll(ATTRIBUTE_BOX_CLASS)
var dataAttrs = '[data-cy], [data-test], [data-testid], [data-test-id], [data-testing], [data-qa]'
var divs = document.getElementsByTagName('DIV')
var selectAllDataAttrs = document.querySelectorAll(dataAttrs)

for (let i = 0; i < selectAllDataAttrs.length; i++) {
  let d = selectAllDataAttrs[i]
  d.style.position = ''
  d.parentElement.style.position = ''
  d.classList.remove('attr-bg')
}

for (let i = 0; i < selectAllAttrBoxes.length; i++) {
  selectAllAttrBoxes[i].parentNode.removeChild(selectAllAttrBoxes[i])
}

;[].forEach.call(selectAllAttrBoxes, (e) => e.classList.remove(ATTRIBUTE_BOX_CLASS))
