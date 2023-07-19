document.addEventListener('DOMContentLoaded', initializeOffers)

const offersJSON =
  'https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json'

async function initializeOffers() {
  const offersData = await fetchOffers()
  const randomOffers = getRandomOffers(offersData, 3)

  createOfferElements(randomOffers)
  setActiveSlide()
  startSlider()
}
