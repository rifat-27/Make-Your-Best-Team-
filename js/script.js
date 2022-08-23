let selectedPlayerListElement = document.getElementById('selected-players')
let selectedPlayerNumber = selectedPlayerListElement.childElementCount

function playerAddInList(btn) {
  let playerInListElement = document.createElement('li')
  if (selectedPlayerNumber < 5) {
    btn.style.backgroundColor = 'gray'
    btn.setAttribute('disabled', '')
    let playerNameElement = btn.previousElementSibling
    let playerName = playerNameElement.innerText

    playerInListElement.innerText = playerName
    playerInListElement.setAttribute('class', 'mt-6')
    selectedPlayerListElement.appendChild(playerInListElement)
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

let playerCostBtn = document.getElementById('player-cost-btn')
playerCostBtn.addEventListener('click', () => {
  let costPerPlayerString = document.getElementById('cost-per-player').value
  let costPerPlayer = parseFloat(costPerPlayerString)
  if (costPerPlayer != 'NaN') {
    let totalPlayerCost = costPerPlayer * selectedPlayerNumber
    document.getElementById('player-cost').innerText = totalPlayerCost
    console.log(
      costPerPlayerString +
        ' ' +
        costPerPlayer +
        ' ' +
        selectedPlayerNumber +
        ' ' +
        totalPlayerCost
    )
  } else alert('Please enter a number!')
})
