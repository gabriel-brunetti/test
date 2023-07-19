async function fetchOffers() {
  const response = await fetch(offersJSON)

  if (!response.ok) {
    throw new Error('Failed to fetch offers')
  }

  const offersData = await response.json()
  return offersData.offers
}
