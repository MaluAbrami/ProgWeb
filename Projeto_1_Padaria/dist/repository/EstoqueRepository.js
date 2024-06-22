"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
class EstoqueRepository {
    constructor() {
        this.estoqueList = [];
    }
    insereNoEstoque(estoque) {
        this.estoqueList.push(estoque);
    }
}
exports.EstoqueRepository = EstoqueRepository;
