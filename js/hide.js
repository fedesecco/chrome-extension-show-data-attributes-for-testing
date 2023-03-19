const ATTRIBUTE_BOX = '.attribute-box'
const ATTRIBUTE_BACKGROUND = 'attribute-bg'

const selectAllDataAttributeBoxes = document.querySelectorAll(ATTRIBUTE_BOX)
const dataAttributes = '[data-cy], [data-test], [data-testid], [data-test-id], [data-testing], [data-qa]'
const selectAllDataAttributes = document.querySelectorAll(dataAttributes)

// Loop over all elements with data attributes and remove inline styles and the "attr-bg" class
selectAllDataAttributes.forEach((attribute) => {
  attribute.style.position = ''
  attribute.parentElement.style.position = ''
  attribute.classList.remove(ATTRIBUTE_BACKGROUND)
})

// Remove all elements with the "ATTRIBUTE_BOX" class from the DOM
selectAllDataAttributeBoxes.forEach((box) => {
  box.parentNode.removeChild(box)
})

// Remove the "ATTRIBUTE_BOX" class from all elements that have it
selectAllDataAttributeBoxes.forEach((box) => {
  box.classList.remove(ATTRIBUTE_BOX)
})
