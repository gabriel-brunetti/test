function startSlider() {
  setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % offerElements.length
    setActiveSlide()
  }, 3000)
}

function setActiveSlide() {
  offerElements.forEach((offer, index) => {
    offer.classList.toggle('active', index === currentSlideIndex)
  })
}
