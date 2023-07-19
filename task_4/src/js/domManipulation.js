function createOfferContainer(offers) {
  const offersContainer = document.querySelector('.offers_container')

  const countryAndCityContainer = createStyledElement(
    'div',
    'country_city_container'
  )
  const countryElement = createStyledElement('div', 'offer_country')
  const countryText = createStyledElement('span')
  countryText.dataset.countryText = ''
  countryElement.appendChild(countryText)

  const cityElement = createStyledElement('div', 'offer_city')
  const cityText = createStyledElement('span')
  cityText.dataset.cityText = ''
  cityElement.appendChild(cityText)

  countryAndCityContainer.appendChild(countryElement)
  countryAndCityContainer.appendChild(cityElement)
  offersContainer.appendChild(countryAndCityContainer)

  const priceContainerVisibleWindow = createStyledElement(
    'div',
    'price_container_visible_window'
  )
  const priceContainer = createStyledElement('div', 'price_container')
  const priceTextElement = createStyledElement('span', 'offer_price_text')
  priceTextElement.dataset.priceText = ''
  priceContainer.appendChild(priceTextElement)

  const priceElement = createStyledElement('span', 'offer_price')
  priceElement.dataset.price = ''
  priceContainer.appendChild(priceElement)

  priceContainerVisibleWindow.appendChild(priceContainer)
  offersContainer.appendChild(priceContainerVisibleWindow)

  const ctaButtonElement = createStyledElement('a', 'offer_button')
  ctaButtonElement.textContent = 'Book Now'
  offersContainer.appendChild(ctaButtonElement)

  const ctaButtonArrow = createStyledElement('div', 'offer_button_arrow')
  offersContainer.appendChild(ctaButtonArrow)

  const currentOfferIndex = createStyledElement('div', 'offer_index_container')
  offersContainer.appendChild(currentOfferIndex)

  offers.forEach((offer, index) => {
    currentOfferIndex.appendChild(createOfferIndexElement(index))
    const offerElement = createOfferElement(offer, index)
    offersContainer.appendChild(offerElement)
  })
}

function createOfferElement(offer, index) {
  const formatPrice = new Intl.NumberFormat(userLocale, {
    style: 'currency',
    currency: offer.currency,
  })
  const offerElement = createStyledElement('article', 'offer')
  offerElement.id = `offer${index}`

  const imgElement = createStyledElement('img', 'offer_img')
  imgElement.id = offer.city.toLowerCase()
  imgElement.alt = offer.city
  imgElement.src = offer.imgURL
  offerElement.appendChild(imgElement)

  const countryText = document.querySelector('[data-country-text]')
  countryText.dataset[index] = offer.country.substring(0, 20)

  const cityElement = document.querySelector('[data-city-text]')
  cityElement.dataset[index] = offer.city.substring(0, 20)

  const priceText = document.querySelector('[data-price-text]')
  priceText.dataset[index] = offer.priceText

  const priceElement = document.querySelector('[data-price]')
  priceElement.dataset[index] = formatPrice.format(offer.price)

  return offerElement
}
