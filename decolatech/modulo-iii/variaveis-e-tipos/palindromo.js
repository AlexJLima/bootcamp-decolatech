// Solução 1

/* function verificarPalindromo(palavra) {
    if(!palavra) {
        return 'Não identificado';
    }
    return palavra.split('').reverse().join('') === palavra;
}

console.log(verificarPalindromo('ovo')); */

// Solução 2

function verificarPalindromo2(palavra) {
    if(!palavra) {
        return 'Não identificado'; 
    }
    palavra = palavra.split(' ').join('').toLowerCase();
    
    for (let i = 0; i <= palavra.length / 2; i++){
        if(palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(verificarPalindromo2('A base do teto desaba'));