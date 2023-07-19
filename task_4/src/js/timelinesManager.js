let currentIndex = 0
let loopIndex = 0

let introTimeline = anime.timeline({
  loop: false,
  duration: 1820,
  autoplay: false,
})

let offerInTimeline = anime.timeline({
  loop: false,
  duration: 6000,
  autoplay: false,
})

let offerInformationTimeline = anime.timeline({
  loop: false,
  duration: 6000,
  autoplay: false,
})

let ctaButtonTimeline = anime.timeline({
  loop: false,
  autoplay: false,
  delay: 1500,
})

let offerChangeTimeline = anime.timeline({
  loop: false,
  autoplay: false,
})

let secondOfferChange = anime.timeline({
  loop: false,
  autoplay: false,
})

function playWhiteOverlayAnimation() {
  loopIndex === 2 ? anime(whiteOverlayAnimation) : ''
}

function playIntroTimeline() {
  introTimeline
    .add(yellowBgAnimation)
    .add(logoTranslateXAnimation)
    .add(logoTranslateYAnimation)

  introTimeline.play()
  introTimeline.complete = () => {
    playOfferInTimeline(), playCtaButtonTimeline()
  }
}

function playOfferInTimeline() {
  offerInTimeline.add(offerIntroAnimation)
  offerInTimeline.add(currentOfferIndexIntroAnimation, '-=150')
  offerInTimeline.begin = () => {
    scaleBackgroundAnimation()
    setCurrentOfferIndex(currentIndex)
  }

  offerInTimeline.play()
  offerInTimeline.complete = () => {
    playOfferInformationTimeline()
  }
}

function playCtaButtonTimeline() {
  ctaButtonTimeline
    .add(offerButtonAnimation)
    .add(offerButtonArrowAnimation, '-=300')

  ctaButtonTimeline.play()
}

function playOfferInformationTimeline() {
  offerInformationTimeline
    .add(offerCountryAnimation)
    .add(offerCityAnimation)
    .add(countryTextAnimation, '-=100')
    .add(priceContainerAnimation)
    .add(cityTextInAnimation)
    .add(countryTextResetAnimation, '+=2300')
    .add(cityTextAndPriceContainerExitAnimation, '+=200')
    .add(offerCountryExitAnimation)
    .add(offerCityExitAnimation, '-=200')
    .add(offerIndexOutAnimation, '-=400')

  offerInformationTimeline.play()
  offerInformationTimeline.complete = () => {
    currentIndex++
    if (loopIndex === 0) {
      playOfferChangeTimeline()
    } else if (loopIndex === 1) {
      playSecondOfferChange()
    }
  }
}

function playOfferChangeTimeline() {
  updateOfferInfo()
  setCurrentOfferIndex(currentIndex)
  offerChangeTimeline.add(firstOfferChangeAnimation)

  offerChangeTimeline.play()
  scaleBackgroundAnimation()
}

function playSecondOfferChange() {
  updateOfferInfo()
  setCurrentOfferIndex(currentIndex)
  secondOfferChange.add(secondOfferChangeAnimation)

  secondOfferChange.play()
  scaleBackgroundAnimation()
}
