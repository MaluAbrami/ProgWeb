"use strict";
function ordenar(...numeros) {
    return numeros.sort();
}
console.log(ordenar(5, 7, 2, 3, 1));
function mediaPonderada(...nota) {
    let soma = 0, peso = 1, somaPesos = 1;
    for (let i = 0; i < nota.length; i++) {
        soma += nota[i] * peso;
        peso++;
        somaPesos += peso;
    }
    return soma / somaPesos;
}
console.log(mediaPonderada(7, 6, 8));
function validarCPF(...cpf) {
    let penultimo = cpf[9];
    let ultimo = cpf[10];
    let soma = 0, valor = 10;
    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * valor;
        valor--;
    }
    if ((soma * 10) % 11 == cpf[9]) {
        valor = 11, soma = 0;
        for (let i = 0; i < 11; i++) {
            soma += cpf[i] * valor;
            valor--;
        }
        if ((soma * 10) % 11 == cpf[10]) {
            return true;
        }
    }
    else {
        return false;
    }
}
console.log(validarCPF(5, 2, 9, 9, 8, 2, 4, 7, 2, 5));
