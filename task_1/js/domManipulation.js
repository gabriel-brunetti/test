let offerElements = []
const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language // ie support

function createOfferElements(offers) {
  const offersContainer = document.querySelector('.offers_container')

  offers.forEach((offer, index) => {
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

  const priceSpanElement = createStyledElement('span', 'offer_price')
  priceSpanElement.innerText = formatPrice.format(offer.price)
  offerElement.appendChild(priceSpanElement)

  return offerElement
}

function setHoveredOfferIndex(index) {
  hoveredOfferIndex = index
}

function setupEventListeners() {
  offerElements.forEach((offer, index) => {
    offer.addEventListener('mouseover', () => {
      setHoveredOfferIndex(index)
      stopJumpingFrameAnimation()
    })

    offer.addEventListener('mouseout', () => {
      setHoveredOfferIndex(-1)
      startJumpingFrameAnimation()
    })
  })
}
