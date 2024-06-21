"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibeFrase = exports.reverterSentenca = void 0;
function reverterSentenca(sentenca, callback) {
    const op = sentenca.split('').reverse().join('');
    const resultado = callback(op);
    console.log(resultado);
}
exports.reverterSentenca = reverterSentenca;
function exibeFrase(frase) {
    return `A INVERSÃO DA SENTENÇA RESULTOU EM: ${frase.toUpperCase()}`;
}
exports.exibeFrase = exibeFrase;
