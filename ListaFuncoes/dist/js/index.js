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
