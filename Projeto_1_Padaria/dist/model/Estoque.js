"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoquePaes = void 0;
class EstoquePaes {
    constructor(modalidadeId, quantidade, price) {
        this.modalidadeId = modalidadeId;
        this.quantidade = quantidade;
        this.price = price;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.EstoquePaes = EstoquePaes;
