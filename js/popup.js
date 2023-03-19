const dataAttributes = '[data-cy], [data-test], [data-testid], [data-test-id], [data-testing], [data-qa]'

const textAttributesHidden = 'Attributes: 0'
const textHide = 'HIDE'
const textHiding = 'Hiding...'
const textNoAttributesFound = 'No attributes found.'
const textShow = 'SHOW'
const textShowing = 'Showing...'

const found = document.getElementById('found')
found.innerHTML = textAttributesHidden

const getImg = document.getElementById('img-ninja')

const changeImgToShow = () => (getImg.src = '/img/ninja-show.svg')
document.getElementById('show').addEventListener('click', changeImgToShow)

const changeImgToHide = () => (getImg.src = '/img/ninja-hide.svg')
document.getElementById('hide').addEventListener('click', changeImgToHide)

const numberOfAttributesFound = () => document.querySelectorAll(dataAttributes).length

const show = () => {
  chrome.tabs.insertCSS({ file: 'css/attributes.css' })
  chrome.tabs.executeScript(null, { file: '/js/hide.js' })
  chrome.tabs.executeScript(null, { file: '/js/show.js' })

  const btnShow = document.getElementById('show')
  btnShow.innerHTML = textShowing
  setTimeout(() => {
    btnShow.innerHTML = textShow
  }, 500)

  chrome.tabs.executeScript(null, { code: `(${numberOfAttributesFound})()` }, (results) => {
    if (results && results[0] > 0) {
      found.innerHTML = `Attributes: ${results[0]}`
    } else {
      found.innerHTML = textNoAttributesFound
    }
  })
  return false
}

const hide = () => {
  chrome.tabs.executeScript(null, { file: '/js/hide.js' })
  found.innerHTML = textAttributesHidden

  const btnHide = document.getElementById('hide')
  btnHide.innerHTML = textHiding
  setTimeout(() => {
    btnHide.innerHTML = textHide
  }, 500)
}

document.getElementById('show').addEventListener('click', show)
document.getElementById('hide').addEventListener('click', hide)
