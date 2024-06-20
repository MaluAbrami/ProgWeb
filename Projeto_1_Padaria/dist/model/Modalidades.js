"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadePaes = void 0;
class ModalidadePaes {
    constructor(name, vegano, price) {
        this.name = name;
        this.price = price;
        this.vegano = vegano;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.ModalidadePaes = ModalidadePaes;
