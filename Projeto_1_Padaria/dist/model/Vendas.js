"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaPaes = void 0;
class VendaPaes {
    constructor(cpf, itens, valor) {
        this.cpf = cpf;
        this.itens = itens;
        this.valor = valor;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.VendaPaes = VendaPaes;
