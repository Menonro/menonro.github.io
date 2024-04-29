const fav = window.document.getElementById('fav')
let currentStep = 1
const maxSteps = 20
let startDate = Date.now()
export default function changeFav(path = '/static/images/favicons/fav') {
  if (!fav) return
  fav.setAttribute('href', `${path}_${currentStep}.png?${startDate + 500}`)
  currentStep++
  if (currentStep > maxSteps) currentStep = 1
  startDate += 500
  setTimeout((timestamp) => changeFav(path, timestamp), 500)
}