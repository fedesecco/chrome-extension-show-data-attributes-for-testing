var selectAllAttrBoxes = document.querySelectorAll('.attr-box')
var dataAttrs = '[data-cy], [data-testid]'
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

;[].forEach.call(selectAllAttrBoxes, (e) => e.classList.remove('attr-box'))
