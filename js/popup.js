const found = document.getElementById('found')

const textAttrsHidden = 'Attributes: 0'
const textHide = 'HIDE'
const tHiding = 'Hiding...'
const tNoAttrsFound = 'No attributes found.'
const tShow = 'SHOW'
const tShowing = 'Showing...'

found.innerHTML = textAttrsHidden

const getImg = document.getElementById('img-ninja')

const changeImgToShow = () => (getImg.src = '/img/ninja-show.svg')
document.getElementById('show').addEventListener('click', changeImgToShow)

const changeImgToHide = () => (getImg.src = '/img/ninja-hide.svg')
document.getElementById('hide').addEventListener('click', changeImgToHide)

const numberOfAttrsFound = () => document.querySelectorAll('[data-cy], [data-testid]').length

const show = () => {
  chrome.tabs.insertCSS({ file: 'css/attributes.css' })
  chrome.tabs.executeScript(null, { file: '/js/hide.js' })
  chrome.tabs.executeScript(null, { file: '/js/show.js' })

  const btnShow = document.getElementById('show')
  btnShow.innerHTML = tShowing
  setTimeout(() => {
    btnShow.innerHTML = tShow
  }, 500)

  chrome.tabs.executeScript(null, { code: `(${numberOfAttrsFound})()` }, (results) => {
    if (results && results[0] > 0) {
      found.innerHTML = `Attributes: ${results[0]}`
    } else {
      found.innerHTML = tNoAttrsFound
    }
  })
  return false
}

const hide = () => {
  chrome.tabs.executeScript(null, { file: '/js/hide.js' })
  found.innerHTML = textAttrsHidden

  const btnHide = document.getElementById('hide')
  btnHide.innerHTML = tHiding
  setTimeout(() => {
    btnHide.innerHTML = textHide
  }, 500)
}

document.getElementById('show').addEventListener('click', show)
document.getElementById('hide').addEventListener('click', hide)
