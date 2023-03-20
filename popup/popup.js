// Constants
const ID_BUTTON_SHOW = 'show'
const ID_BUTTON_REMOVE = 'remove'
const ID_ATTRIBUTES_COUNTER = 'attributes-counter'
const IMG_NINJA = 'img-ninja'

// Texts
const textNumberOfAttributes = '0'
const textRemove = 'REMOVE'
const textRemoving = 'Removing...'
const textNoAttributesFound = 'No attributes found.'
const textShow = 'SHOW'
const textShowing = 'Showing...'

// Attributes set
const dataAttributes = '[data-cy], [data-test], [data-testid], [data-test-id], [data-testing], [data-qa]'

// Get elements on page
const elButtonShow = document.getElementById(ID_BUTTON_SHOW)
const elButtonRemove = document.getElementById(ID_BUTTON_REMOVE)

const attributesCounter = document.getElementById(ID_ATTRIBUTES_COUNTER)
attributesCounter.innerHTML = textNumberOfAttributes

// Get image
const getImg = document.getElementById(IMG_NINJA)

const changeImgToVisible = () => {
  getImg.src = '/img/ninja-visible.svg'
}

const changeImgToHidden = () => {
  getImg.src = '/img/ninja-hidden.svg'
}

// Attributes on page
const numberOfAttributesFound = () => document.querySelectorAll(dataAttributes).length

// Show attributes
const showAttributesOnPage = () => {
  chrome.scripting.insertCSS({ files: ['attributes-on-page.css'] })

  chrome.scripting.executeScript(null, { files: ['../scripts/show-attributes.js'] })

  chrome.scripting.executeScript(null, { code: `(${numberOfAttributesFound})()` }, (results) => {
    if (results && results[0] > 0) {
      attributesCounter.innerHTML = results[0]
    } else {
      attributesCounter.innerHTML = textNoAttributesFound
    }
  })

  elButtonShow.innerHTML = textShowing // pretend loader
  setTimeout(() => {
    elButtonShow.innerHTML = textShow
  }, 500)
}

// Remove attributes
const removeAttributesFromPage = () => {
  chrome.scripting.executeScript(null, { files: ['../scripts/remove-attributes.js'] })

  attributesCounter.innerHTML = textNumberOfAttributes

  elButtonRemove.innerHTML = textRemoving // pretend loader
  setTimeout(() => {
    elButtonRemove.innerHTML = textRemove
  }, 500)
}

// Handle buttons
elButtonShow.addEventListener('click', () => {
  changeImgToVisible()
  showAttributesOnPage()
})

elButtonRemove.addEventListener('click', () => {
  changeImgToHidden()
  removeAttributesFromPage()
})
