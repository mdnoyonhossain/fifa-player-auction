let players = [];
// Player Select Button
function selectPlayer(player) {
    const playerName = player.parentNode.parentNode.children[0].innerText;
    players.push(playerName);
    displaySelectedPlayer(players);
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

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = playerInputElementById('per-player');
    const playerListCount = players.length;
    const playerExpenses = perPlayer * playerListCount;
    setValueElementById('total-expenses', playerExpenses);
});

document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerAmount = playerInputElementById('manager-total');
    const coachAmount = playerInputElementById('coach-total');

    const playerExpenses = document.getElementById('total-expenses');
    const playerExpensesAmountSring = playerExpenses.innerText;
    const playerExpensesAmount = parseFloat(playerExpensesAmountSring);


    const totalAmount = playerExpensesAmount + managerAmount + coachAmount;
    setValueElementById('total-amount', totalAmount);
});