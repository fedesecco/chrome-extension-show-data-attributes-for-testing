const ATTRIBUTE_BACKGROUND_CLASS = 'attribute-background'

const dataAttributes = '[data-cy], [data-test], [data-testid], [data-test-id], [data-testing], [data-qa]'
const selectAllDataAttributes = document.querySelectorAll(dataAttributes)

// Loop over all elements with data attributes and create an "attribute-box" element for each one
selectAllDataAttributes.forEach((data) => {
  const textDataCy = data.getAttribute('data-cy')
  const textDataTest = data.getAttribute('data-test')
  const textDataTestId = data.getAttribute('data-testid')
  const textDataTestIdWithDash = data.getAttribute('data-test-id')
  const textDataTesting = data.getAttribute('data-testing')
  const textDataQa = data.getAttribute('data-qa')

  const textInBox =
    textDataCy || textDataTest || textDataTestId || textDataTestIdWithDash || textDataTesting || textDataQa

  const attributeBox = `<div class="attribute-box">${textInBox}</div>`
  const elements = ['BUTTON', 'INPUT', 'SELECT', 'SPAN', 'TEXTAREA']

  data.style.position = 'relative'
  data.parentElement.style.position = 'relative'
  data.classList.add(ATTRIBUTE_BACKGROUND_CLASS)

  if (elements.includes(data.tagName)) {
    data.insertAdjacentHTML('afterend', attributeBox)
  } else {
    data.insertAdjacentHTML('afterbegin', attributeBox)
  }
})

// Find all elements with data attributes matching a certain pattern and log them to the console
const dataAttributePattern = /(cy|test|testid|test-id|testing|qa)/
const allElements = document.querySelectorAll('*')
const matchingElements = []

allElements.forEach((element) => {
  Object.keys(element.dataset).forEach((key) => {
    if (dataAttributePattern.test(key)) {
      matchingElements.push(element)
    }
  })
})

// TODO: remove when not needed
console.log(matchingElements)
