//Minha versão
/* function validaArray(array, tamanho) {
    if(array === undefined || tamanho === undefined) {
        throw ReferenceError;
    } else if(typeof array !== 'object' || typeof tamanho !== 'number') {
        throw TypeError;
    } else if(array.length != tamanho) {
        throw RangeError;
    }
    return array;
} 

try {
    console.log(validaArray());
}catch(e) {
    if (e instanceof ReferenceError) {
        console.log('Parâmetros não definidos');
    } else if (e instanceof TypeError) {
        console.log('Tipo de dado inválido');
    } else if (e instanceof RangeError) {
        console.log('Tamanho inválido');
    } else {
        console.log('Erro não especificado');
    }
}  */

//Versão aula
/* function validaArray(arr, num) {
    
    try {
        if(!arr || !num) throw new ReferenceError('Envie os parâmetros');

        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

        if(typeof num !== 'number') throw new TypeError('Tamanho precisa ser do tipo number');

        if(arr.length != num) throw new RangeError('Tamanho inválido');
        
        return arr;
        
    } catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError')
            console.log(e.name);
            console.log(e.stack);
        } else if(e instanceof TypeError) {
            console.log('Este erro é um TypeError')
            console.log(e.name);
            console.log(e.stack);
        } else if(e instanceof RangeError) {
            console.log('Este erro é um RangeError')
            console.log(e.name);
            console.log(e.stack);
        } else {
            console.log('Tipo de erro não esperado', e);
        }
    }
}

console.log(validaArray([1,2,3,4,5], 5)); */