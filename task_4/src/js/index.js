document.addEventListener('DOMContentLoaded', initializeOffers)

const offersJSON =
  'https://rekrutacja.webdeveloper.rtbhouse.net/files/banner_vip.json'
const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language // ie support

async function initializeOffers() {
  try {
    const offersData = await fetchOffers(offersJSON)
    createOfferContainer(offersData)
    playIntroTimeline()
  } catch (error) {
    console.error('Failed to fetch offers:', error)
  }
}
