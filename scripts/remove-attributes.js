const ATTRIBUTE_BOX_IN_DOM = '.attribute-box'
const ATTRIBUTE_BOX_CLASS = 'attribute-box'
const ATTRIBUTE_BACKGROUND_CLASS = 'attribute-background'

const dataAttributes = '[data-cy], [data-test], [data-testid], [data-test-id], [data-testing], [data-qa]'
const selectAllDataAttributes = document.querySelectorAll(dataAttributes)

const selectAllDataAttributeBoxes = document.querySelectorAll(ATTRIBUTE_BOX_IN_DOM)

// Loop over all elements with data attributes and remove inline styles and the "attr-bg" class
selectAllDataAttributes.forEach((attribute) => {
  attribute.style.position = ''
  attribute.parentElement.style.position = ''
  attribute.classList.remove(ATTRIBUTE_BACKGROUND_CLASS)
})

// Remove all elements with the "ATTRIBUTE_BOX_CLASS" class from the DOM
selectAllDataAttributeBoxes.forEach((box) => {
  box.parentNode.removeChild(box)
})

// Remove the "ATTRIBUTE_BOX_CLASS" class from all elements that have it
selectAllDataAttributeBoxes.forEach((box) => {
  box.classList.remove(ATTRIBUTE_BOX_CLASS)
})
