function createStyledElement(tag, className) {
  const element = document.createElement(tag)
  if (className) {
    element.classList.add(className)
  }
  return element
}

function createOfferIndexElement(index) {
  const offerIndex = document.createElement('div')
  offerIndex.id = `counter${index}`

  return offerIndex
}

function setCurrentOfferIndex(currentIndex) {
  const offerIndexElements = document.querySelectorAll(
    '.offer_index_container > div'
  )
  const elementsArray = Array.from(offerIndexElements)

  elementsArray.forEach((element, index) => {
    element.classList.toggle('active', index === currentIndex)
  })
}

function updateOfferInfo() {
  let countryText = document.querySelector('[data-country-text]')
  countryText.textContent = countryText.dataset[currentIndex]
  let cityText = document.querySelector('[data-city-text]')
  cityText.textContent = cityText.dataset[currentIndex]
  let offerPriceText = document.querySelector('[data-price-text]')
  offerPriceText.textContent = offerPriceText.dataset[currentIndex]
  let offerPrice = document.querySelector('[data-price]')
  offerPrice.textContent = offerPrice.dataset[currentIndex]
}
