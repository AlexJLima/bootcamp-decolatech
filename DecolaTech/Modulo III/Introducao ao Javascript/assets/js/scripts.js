var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0

function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor();
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    changeColor();
}

function changeColor() {
    if (currentNumberWrapper.innerHTML < '0') {
        currentNumberWrapper.style.color = 'red';
    } else {
        currentNumberWrapper.style.color = 'black';
    }
}