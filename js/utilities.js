function playerInputElementById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputAmountString = inputField.value;
    const inputAmount = parseFloat(inputAmountString);
    return inputAmount;
}

function setValueElementById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}