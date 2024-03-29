// Attributes to look for on the page
const dataAttributes = '[data-cy], [data-test], [data-testid], [data-test-id], [data-testing], [data-qa]'

// Constants
const BUTTON_ADD_ID = 'add'
const BUTTON_REMOVE_ID = 'remove'
const ATTRIBUTES_COUNTER_ID = 'attributes-counter'
const IMG_NINJA = 'img-ninja'
const ZERO_ATTRIBUTES = 0

// Get elements on page
const allDataAttributes = document.querySelectorAll(dataAttributes)

const elHeaderImg = document.getElementById(IMG_NINJA)
const elAttributesCounter = document.getElementById(ATTRIBUTES_COUNTER_ID)
const elButtonAdd = document.getElementById(BUTTON_ADD_ID)
const elButtonRemove = document.getElementById(BUTTON_REMOVE_ID)

// Texts
const textNoAttributesFound = 'No attributes found.'
const textAdd = 'show'
const textRemove = 'hide'

// === DO STUFF
// Misc
elAttributesCounter.innerHTML = ZERO_ATTRIBUTES

const changeImgToVisible = () => {
  elHeaderImg.src = '/img/ninja-visible.svg'
}

const changeImgToHidden = () => {
  elHeaderImg.src = '/img/ninja-hidden.svg'
}

// Attributes on page
const numberOfAttributesFound = () => allDataAttributes.length

// Add attributes
const addAttributesToPage = () => {
  chrome.scripting.insertCSS({ files: ['attributes-on-page.css'] })

  chrome.scripting.executeScript(null, { files: ['../scripts/remove-attributes.js'] })
  chrome.scripting.executeScript(null, { files: ['../scripts/add-attributes.js'] })

  chrome.scripting.executeScript(null, { code: `(${numberOfAttributesFound})()` }, (results) => {
    if (results && results[0] > 0) {
      elAttributesCounter.innerHTML = results[0]
    } else {
      elAttributesCounter.innerHTML = textNoAttributesFound
    }
  })
}

// Remove attributes
const removeAttributesFromPage = () => {
  chrome.scripting.executeScript(null, { files: ['../scripts/remove-attributes.js'] })

  elAttributesCounter.innerHTML = ZERO_ATTRIBUTES
}

// Handle buttons
elButtonAdd.addEventListener('click', () => {
  changeImgToVisible()
  addAttributesToPage()
})

elButtonRemove.addEventListener('click', () => {
  changeImgToHidden()
  removeAttributesFromPage()
})
