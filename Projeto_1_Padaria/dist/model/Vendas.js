"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = void 0;
class VendaPaes {
    constructor(cpf, quantidade, valor) {
        this.cpf = cpf;
        this.quantidade = quantidade;
        this.valor = valor;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.VendaPaes = VendaPaes;
