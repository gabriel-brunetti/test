let offerElements = []
let currentSlideIndex = 0
const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language // ie support

function createOfferElements(offersData) {
  const offersContainer = document.querySelector('[data-offers-container]')

  offersData.forEach((offer, index) => {
    const offerElement = createOfferElement(offer)
    offersContainer.appendChild(offerElement)
    offerElements.push(offerElement)
  })

  return offerElements
}

function createOfferElement(offer, index) {
  let formatPrice = new Intl.NumberFormat(userLocale, {
    style: 'currency',
    currency: offer.currency,
  })

  const offerElement = createStyledElement('div', 'offer')

  const imgElement = createStyledElement('img', 'offer_img')
  imgElement.alt = offer.name
  imgElement.src = offer.imgURL
  offerElement.appendChild(imgElement)

  const offerNameElement = createStyledElement('span', 'offer_name')
  offerNameElement.textContent = offer.name
  offerElement.appendChild(offerNameElement)

  const priceAndButtonContainer = createStyledElement(
    'div',
    'offer_price_check_container'
  )
  const priceElement = createStyledElement('span', 'offer_price')
  priceElement.textContent = formatPrice.format(offer.price)
  priceAndButtonContainer.appendChild(priceElement)

  const checkButtonElement = createStyledElement('button', 'offer_button')
  checkButtonElement.textContent = 'Check'
  priceAndButtonContainer.appendChild(checkButtonElement)
  offerElement.appendChild(priceAndButtonContainer)

  return offerElement
}
