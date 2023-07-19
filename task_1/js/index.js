document.addEventListener('DOMContentLoaded', initializeOffers)

const offersJSON =
  'https://rekrutacja.webdeveloper.rtbhouse.net/files/banner.json'

async function initializeOffers() {
  const offersData = await fetchOffers()
  const randomOffers = getRandomOffers(offersData, 4)

  createOfferElements(randomOffers)
  setupEventListeners()

  animateJumpFrames()
  startJumpingFrameAnimation()
}
