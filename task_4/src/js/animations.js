const yellowBgAnimation = {
  targets: '.yellow_bg',
  keyframes: [{ bottom: '-100%' }, { bottom: '0%' }],
  easing: 'linear',
  duration: 420,
}

const logoTranslateXAnimation = {
  targets: '.ad_logo',
  left: '36px',
  duration: 520,
  easing: 'easeOutCirc',
}

const logoTranslateYAnimation = {
  targets: '.ad_logo',
  top: '0px',
  duration: 580,
  easing: 'easeOutCirc',
}

const offerIntroAnimation = {
  targets: '.offer',
  keyframes: [{ bottom: '-100%' }, { bottom: '0' }],
  duration: 350,
  easing: 'linear',
  begin: () => {
    updateOfferInfo()
  },
}

const currentOfferIndexIntroAnimation = {
  targets: '.offer_index_container',
  bottom: '24px',
  duration: 200,
  easing: 'linear',
}

const offerIndexOutAnimation = {
  targets: '#counter0',
  left: '0%',
  duration: 200,
  easing: 'linear',
}

const offerCountryAnimation = {
  targets: '.offer_country',
  left: 0,
  duration: 370,
  easing: 'linear',
}

const offerCityAnimation = {
  targets: '.offer_city',
  left: 0,
  duration: 330,
  easing: 'linear',
}

const countryTextAnimation = {
  targets: '[data-country-text]',
  bottom: 0,
  duration: 250,
  easing: 'linear',
}

const priceContainerAnimation = {
  targets: '.price_container',
  translateY: [100, 0],
  opacity: 1,
  duration: 500,
  easing: 'linear',
}

const cityTextInAnimation = {
  targets: '.offer_city > span ',
  translateY: ['110%', '0%'],
  duration: 500,
  easing: 'linear',
}

const countryTextResetAnimation = {
  targets: '[data-country-text]',
  translateY: '-150%',
  duration: 100,
  easing: 'linear',
  complete: () => {
    playWhiteOverlayAnimation()
  },
}

const cityTextAndPriceContainerExitAnimation = {
  targets: '[data-city-text], .price_container',
  translateY: '-105%',
  duration: 200,
  easing: 'linear',
}

const offerCountryExitAnimation = {
  targets: '.offer_country',
  left: '-100%',
  duration: 370,
  easing: 'linear',
}

const offerCityExitAnimation = {
  targets: '.offer_city',
  left: '-100%',
  duration: 370,
  easing: 'linear',
}

const offerButtonAnimation = {
  targets: '.offer_button',
  right: ['-100%', '51px'],
  opacity: 1,
  duration: 500,
  easing: 'linear',
}

const offerButtonArrowAnimation = {
  targets: '.offer_button_arrow',
  keyframes: [
    { width: '0' },
    { width: '74px', opacity: 1, backgroundColor: '#fcda16' },
  ],
  delay: 0,
  duration: 350,
  easing: 'linear',
}

const firstOfferChangeAnimation = {
  targets: `#offer1`,
  left: '-100%',
  duration: 500,
  easing: 'linear',
  begin: () => {
    loopIndex++
    document.querySelector('#offer2').style.left = '-100%'
  },
  complete: () => {
    offerInformationTimeline.play()
  },
}

const secondOfferChangeAnimation = {
  targets: `#offer2`,
  left: '-200%',
  duration: 500,
  easing: 'linear',
  begin: () => {
    loopIndex++
  },
  complete: () => {
    offerInformationTimeline.play()
  },
}

const whiteOverlayAnimation = {
  targets: '.white_overlay',
  keyframes: [{ zIndex: 10, opacity: 0 }, { opacity: 1 }],
  duration: 300,
  easing: 'linear',
}

function scaleBackgroundAnimation() {
  document.querySelector(`#offer${currentIndex}`).style.animation =
    'scaleBackground 8s linear forwards'
}
