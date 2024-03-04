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
