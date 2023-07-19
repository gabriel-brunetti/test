document.addEventListener('DOMContentLoaded', initializeCountdown)

async function initializeCountdown() {
  const currentDate = new Date()
  const endDate = new Date(currentDate.setDate(currentDate.getDate() + 7))

  endDate.setHours(23, 59, 59)
  updateCountdownDisplay(endDate)
  startCountdownTimer(endDate)
}

function startCountdownTimer(endDate) {
  updateCountdownDisplay(endDate)
  setInterval(() => {
    updateCountdownDisplay(endDate)
  }, 1000)
}

function updateCountdownDisplay(endDate) {
  const currentDate = new Date()
  const timeDifference = endDate.getTime() - currentDate.getTime()
  const timeRemaining = new Date(timeDifference)

  const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hoursRemaining = timeRemaining.getUTCHours()
  const minutesRemaining = timeRemaining.getUTCMinutes()
  const secondsRemaining = timeRemaining.getUTCSeconds()

  if (daysRemaining === 0) {
    hideElement('day')
  }

  if (daysRemaining === 0 && hoursRemaining === 0) {
    hideElement('hour')
  }

  setElementValue('day', daysRemaining)
  setElementValue('hour', hoursRemaining)
  setElementValue('minute', minutesRemaining)
  setElementValue('second', secondsRemaining)
}

function setElementValue(className, value) {
  const element = document.querySelector(`.${className}`)
  const elementValue = element.querySelector('.value')
  elementValue.textContent = formatToTwoDigits(value)
}

function formatToTwoDigits(value) {
  return Intl.NumberFormat(navigator.language, {
    minimumIntegerDigits: 2,
  }).format(value)
}

function hideElement(className) {
  const element = document.querySelector(`.${className}`)
  element.style.display = 'none'
}
