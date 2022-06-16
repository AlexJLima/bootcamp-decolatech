var botaoSubtrair = document.getElementById('subtrair');
var botaoAdicionar = document.getElementById('adicionar');
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

botaoSubtrair.addEventListener("click", decrement);
botaoAdicionar.addEventListener("click", increment);

function increment() {
    if (currentNumberWrapper.innerHTML < 10) {
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
}

function decrement() {
    if(currentNumberWrapper.innerHTML > 0) {
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } 
}