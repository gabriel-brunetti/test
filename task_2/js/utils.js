// fisher-yates shuffle
function getRandomOffers(offers, count) {
  const shuffledOffers = [...offers]
  let temporaryValue, randomIndex

  for (let i = 0; i < shuffledOffers.length; i++) {
    temporaryValue = shuffledOffers[i]
    randomIndex = Math.floor(Math.random() * shuffledOffers.length)
    shuffledOffers[i] = shuffledOffers[randomIndex]
    shuffledOffers[randomIndex] = temporaryValue
  }

  return shuffledOffers.slice(0, count)
}

function createStyledElement(tag, className) {
  const element = document.createElement(tag)
  if (className) {
    element.classList.add(className)
  }
  return element
}
