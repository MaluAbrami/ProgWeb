"use strict";
function maiorNumero(...lista) {
    let maior = 0;
    for (let i = 0; i < lista.length; i++) {
        if (maior < lista[i]) {
            maior = lista[i];
        }
    }
    return maior;
}
console.log(maiorNumero(1, 5, 8, 10, 15, 103));
function parOuImpar(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(parOuImpar(4));
function calcularMedia(...notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}
console.log(calcularMedia(6, 7.4, 10, 4.2, 3));
function aumentarLetras(palavra) {
    return palavra.toUpperCase();
}
console.log(aumentarLetras('malu'));
function numeroPrimo(numero) {
    let aux = 0;
    for (let i = 2; i < numero; i++) {
        if (numero == 2) {
            aux += 0;
        }
        else if (numero % i != 0) {
            aux += 0;
        }
        else {
            aux += 1;
        }
    }
    if (aux > 0) {
        return false;
    }
    else {
        return true;
    }
}
console.log(numeroPrimo(29));
function inverterArray(array) {
    return array.reverse();
}
const array1 = [1, 2, 3, 4, 5];
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log('Array de números invertido: ', inverterArray(array1));
console.log('Array de strings invertido: ', inverterArray(array2));
