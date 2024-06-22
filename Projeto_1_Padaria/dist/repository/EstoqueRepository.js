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
    filtraTodosOsEstoques() {
        return this.estoqueList;
    }
}
exports.EstoqueRepository = EstoqueRepository;
