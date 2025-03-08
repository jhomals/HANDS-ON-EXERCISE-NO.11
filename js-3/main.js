let numbers = [];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("insertBtn").addEventListener("click", insertNumber);
    document.getElementById("deleteBtn").addEventListener("click", deleteAll);
});

function insertNumber() {
    let inputElement = document.getElementById("numberInput");
    let number = parseInt(inputElement.value);

    if (!isNaN(number)) {
        numbers.push(number);
        updateUI();
    }

    inputElement.value = "";
}

function deleteAll() {
    numbers = [];
    updateUI();
}

function updateUI() {
    let list = document.getElementById("numberList");
    list.innerHTML = numbers.map(num => `<li>${num}</li>`).join("");

    let sum = numbers.reduce((a, b) => a + b, 0) || 0;
    let highest = numbers.length ? Math.max(...numbers) : 0;
    let lowest = numbers.length ? Math.min(...numbers) : 0;

    document.getElementById("sum").textContent = sum;
    document.getElementById("highest").textContent = highest;
    document.getElementById("lowest").textContent = lowest;
}