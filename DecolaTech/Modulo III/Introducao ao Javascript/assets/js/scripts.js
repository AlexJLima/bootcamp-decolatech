var botaoSubtrair = document.getElementById('subtrair');
var botaoAdicionar = document.getElementById('adicionar');
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

botaoSubtrair.addEventListener("click", decrement);
botaoAdicionar.addEventListener("click", increment);

function increment() {
   currentNumber += 1;
   currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
}