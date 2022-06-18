function comparaNumeros(numero1, numero2) {
    let mensagem, resultado;
    resultado = numero1 + numero2;
    if (!numero1 || !numero2) return 'Defina dois números!';

    if(numero1 != numero2) {
        mensagem = `Os números ${numero1} e ${numero2} não são iguais.`;
    } else {
        mensagem = `Os números ${numero1} e ${numero2} são iguais.`;
    }
    
    if(resultado < 10) {
        mensagem += ` Sua soma é ${resultado} que é menor que 10 e menor que 20`;
    } else if (resultado > 20) {
        mensagem += ` Sua soma é ${resultado} que é maior que 10 e maior que 20`;
    } else {
        mensagem += ` Sua soma é ${resultado} que é maior ou igual a 10 e menor ou igual a 20`;
    }

    return mensagem;
}

console.log(comparaNumeros(20,20));