let loopTimer
let loopWasPaused
let framedOfferLoopIndex = 0
let hoveredOfferIndex = -1

function animateJumpFrames() {
  if (loopWasPaused === true) {
    framedOfferLoopIndex =
      (framedOfferLoopIndex - 1 + offerElements.length) % offerElements.length
    loopWasPaused = false
  }
  toggleActiveOffer(framedOfferLoopIndex)
  framedOfferLoopIndex = (framedOfferLoopIndex + 1) % offerElements.length
}

function startJumpingFrameAnimation() {
  if (loopWasPaused === true) {
    animateJumpFrames()
  }
  loopTimer = setInterval(animateJumpFrames, 2000)
}

function stopJumpingFrameAnimation() {
  clearInterval(loopTimer)
  loopWasPaused = true
  toggleActiveOffer(hoveredOfferIndex)
}

function toggleActiveOffer(index) {
  offerElements.forEach((offer, i) => {
    offer.classList.toggle('active', i === index)
  })
}
