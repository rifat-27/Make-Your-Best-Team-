function getPlayerNumber() {
  let selectedPlayerListElement = document.getElementById('selected-players')
  let selectedPlayerNumber = selectedPlayerListElement.childElementCount
  return selectedPlayerNumber
}
function playerAddInList(btn) {
  let playerInListElement = document.createElement('li')
  let playerNumber = getPlayerNumber()
  if (playerNumber < 5) {
    btn.style.backgroundColor = 'gray'
    btn.setAttribute('disabled', '')
    let playerNameElement = btn.previousElementSibling
    let playerName = playerNameElement.innerText

    playerInListElement.innerText = playerName
    playerInListElement.setAttribute('class', 'mt-6')
    document.getElementById('selected-players').appendChild(playerInListElement)
  } else alert('5 players already selected!')
}

btn1 = document.getElementById('myBtn-1')
btn1.addEventListener('click', () => {
  playerAddInList(btn1)
})

btn2 = document.getElementById('myBtn-2')
btn2.addEventListener('click', () => {
  playerAddInList(btn2)
})

btn3 = document.getElementById('myBtn-3')
btn3.addEventListener('click', () => {
  playerAddInList(btn3)
})

btn4 = document.getElementById('myBtn-4')
btn4.addEventListener('click', () => {
  playerAddInList(btn4)
})

btn5 = document.getElementById('myBtn-5')
btn5.addEventListener('click', () => {
  playerAddInList(btn5)
})

btn6 = document.getElementById('myBtn-6')
btn6.addEventListener('click', () => {
  playerAddInList(btn6)
})

function calculatePlayerCost() {
  let costPerPlayerString = document.getElementById('cost-per-player').value
  let costPerPlayer = parseFloat(costPerPlayerString)
  let playerNumber = getPlayerNumber()
  if (!isNaN(costPerPlayer)) {
    let totalPlayerCost = costPerPlayer * playerNumber
    return totalPlayerCost
  } else {
    alert('Please enter a number!')
    return 0
  }
}

let playerCostBtn = document.getElementById('player-cost-btn')
playerCostBtn.addEventListener('click', () => {
  let totalPlayerCost = calculatePlayerCost()
  document.getElementById('cost-per-player').value = ''
  document.getElementById('player-cost').innerText = totalPlayerCost
})
