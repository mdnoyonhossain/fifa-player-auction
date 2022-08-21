let players = [];

// Player Select Button
function selectPlayer(player) {
    if (players.length >= 5) {
        alert("Alridy 5 Player Added Can't add anymore");
    } else {
        const playerName = player.parentNode.parentNode.children[0].innerText;
        players.push(playerName);
        displaySelectedPlayer(players);
        const selectBtn = player.parentNode.children[0];
        selectBtn.setAttribute('disabled', true);
        selectBtn.style.backgroundColor = 'gray';
    }
}

// Display Selected Player List
function displaySelectedPlayer(playerCount) {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = "";
    for (let i = 0; i < playerCount.length; i++) {
        const playerName = players[i];
        const divelement = document.createElement('div');
        divelement.innerHTML = `
        <ul  class="list-group">
            <li class="list-group-item"><span>${i + 1}.</spna> <span class="player-list-number">${playerName}</span></li>
        </ul>
        `;
        playerList.appendChild(divelement);
    }
}

// Calculate Player Expenses
const calclute = document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = playerInputElementById('per-player');
    const playerListCount = players.length;
    const playerExpenses = perPlayer * playerListCount;
    setValueElementById('total-expenses', playerExpenses);
});

// Total Calculate Amount
document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerAmount = playerInputElementById('manager-total');
    const coachAmount = playerInputElementById('coach-total');

    const playerExpenses = document.getElementById('total-expenses');
    const playerExpensesAmountString = playerExpenses.innerText;
    const playerExpensesAmount = parseFloat(playerExpensesAmountString);


    const totalAmount = playerExpensesAmount + managerAmount + coachAmount;
    setValueElementById('total-amount', totalAmount);
});