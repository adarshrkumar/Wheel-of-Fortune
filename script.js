let i = 0
let tripsI = 0
let trips = [
  'Trip: ', 
]
let tripValue = 10000
let values = [
  300, 
  500, 
  450, 
  500, 
  800, 
  'Lose a Turn', 
  700, 
  'Free Play', 
  650, 
  'Bankrupt', 
  900, 
  500, 
  350, 
  600, 
  500, 
  400, 
  550, 
  800, 
  300, 
  700, 
  900, 
  500, 
  5000, 
  'Bankrupt', 
  trips[tripsI].split('Trip: ')[1], 
]
let balence = 0
let balenceElement = document.getElementById('balence')
let spunElement = document.getElementById('spun')

function spin() {
  var isTrip = false
  function addBackOnClick() {
    document.getElementById('spin').setAttribute('style', '')
    document.getElementById('spin').setAttribute('onclick', 'spin()')
  }
  let value = values[Math.floor(Math.random() * values.length)]
  if (value === trips[tripsI]) {
    isTrip === true
  }
  if (value === 'Bankrupt') {
    value = -balence
  }
  if (value === 'Lose a Turn') {
    document.getElementById('spin').setAttribute('onclick', '')
    setTimeout(addBackOnClick, 4000)
  }
  var v2s
  if (Number(value) === value && value != -balence) {
    v2s = '$' + value
  }
  else if (value === -balence) {
    v2s = 'Bankrupt'
  }
  else {
    v2s = value
  }
  spunElement.innerHTML = 'You Spun: ' + v2s

  if (isTrip === true) {
    if (document.getElementById('trips').innerHTML.split('Trips: ')[1] === '') {
      spunElement.innerHTML = `Trips: ${String(value)}`
    }
    else {
      spunElement.innerHTML = `${spunElement.innerHTML}, ${String(value).split('Trip: ')[1]}`
    }
    value = tripValue
    trips.pop(trips[tripsI])
    if (tripsI >= trips.length) {
      tripsI = 0
    }
    else {
      tripsI++
    }
  }
  else if (Boolean(Number(value)) === false) {
    value = 0
  }
  addBalence(value)
  document.getElementById('spin').setAttribute('style', 'display: none;')
  document.getElementById('spin').setAttribute('onclick', '')
  setTimeout(addBackOnClick, 1000)
}

function addBalence(bal) {
  balence = balence + bal
  balenceElement.innerHTML = 'Balence: $' + balence
}