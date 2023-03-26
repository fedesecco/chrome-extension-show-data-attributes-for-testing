// Attributes to look for on the page
const dataAttributes = '[data-cy], [data-test], [data-testid], [data-test-id], [data-testing], [data-qa]'

// Constants
const ATTRIBUTE_BOX_IN_DOM = '.attribute-box'
const ATTRIBUTE_BOX_CLASS = 'attribute-box'
const ATTRIBUTE_BACKGROUND_CLASS = 'attribute-background'

// Get elements on page
const allDataAttributes = document.querySelectorAll(dataAttributes)
const allDataAttributeBoxes = document.querySelectorAll(ATTRIBUTE_BOX_IN_DOM)

// === DO STUFF
// Loop over all elements with data attributes and remove inline styles and ATTRIBUTE_BACKGROUND_CLASS
allDataAttributes.forEach((attribute) => {
  attribute.style.position = ''
  attribute.parentElement.style.position = ''
  attribute.classList.remove(ATTRIBUTE_BACKGROUND_CLASS)
})

// Remove all elements with the ATTRIBUTE_BOX_CLASS class from the DOM
allDataAttributeBoxes.forEach((box) => {
  box.parentNode.removeChild(box)
})

// Remove the ATTRIBUTE_BOX_CLASS from all elements that have it
allDataAttributeBoxes.forEach((box) => {
  box.classList.remove(ATTRIBUTE_BOX_CLASS)
})
