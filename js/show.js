var dataAttributes = '[data-cy], [data-test], [data-testid], [data-test-id], [data-testing], [data-qa]'
var selectAllDataAttributes = document.querySelectorAll(dataAttributes)

for (let i = 0; i < selectAllDataAttributes.length; i++) {
  let data = selectAllDataAttributes[i]

  textDataCy = data.getAttribute('data-cy')
  textDataTest = data.getAttribute('data-test')
  textDataTestId = data.getAttribute('data-testid')
  textDataTestDashId = data.getAttribute('data-test-id')
  textDataTesting = data.getAttribute('data-testing')
  textDataQa = data.getAttribute('data-qa')

  let textInBox

  if (textDataCy) {
    textInBox = textDataCy
  }
  if (textDataTest) {
    textInBox = textDataTest
  }
  if (textDataTestId) {
    textInBox = textDataTestId
  }
  if (textDataTestDashId) {
    textInBox = textDataTestDashId
  }
  if (textDataTesting) {
    textInBox = textDataTesting
  }
  if (textDataQa) {
    textInBox = textDataQa
  }

  // positioning
  let attributeBox = `<div class="attribute-box">${textInBox}</div>`
  const elements = ['SELECT', 'TEXTAREA', 'INPUT', 'BUTTON', 'SPAN']
  data.style.position = 'relative'
  data.parentElement.style.position = 'relative'
  data.className += ' attribute-bg'

  if (elements.indexOf(data.tagName) !== -1) {
    data.insertAdjacentHTML('afterend', attributeBox)
  } else {
    data.insertAdjacentHTML('afterbegin', attributeBox)
  }
}

// TEST NEW CODE
// use regex to get the testing attributes like 'data-' = data-cy, data-test, data-testing, data-testid, data-qa
var allElements = document.querySelectorAll('*')
var resultArray = []

allElements.forEach((element) => {
  for (const [key] of Object.entries(element.dataset)) {
    if (/(cy|test|testid|test-id|testing|qa)/.test(key)) {
      resultArray.push(element)
    }
  }
})

console.log(resultArray)
