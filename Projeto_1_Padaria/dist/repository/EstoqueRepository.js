"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueRepository = void 0;
const global_1 = require("../global/global");
class EstoqueRepository {
    constructor() {
        this.estoqueList = (0, global_1.estoquePaes)();
    }
    insereNoEstoque(estoque) {
        this.estoqueList.push(estoque);
    }
    filtraTodosOsEstoques() {
        return this.estoqueList;
    }
    filtraEstoquePorModalidadeId(modalidadeId) {
        return this.estoqueList.find(estoque => estoque.modalidadeId === modalidadeId);
    }
    filtraEstoquePorId(id) {
        return this.estoqueList.find(estoque => estoque.id === id);
    }
    alterarEstoque(estoque) {
        const index = this.estoqueList.indexOf(estoque);
        if (index !== -1) {
            this.estoqueList[index] = estoque;
        }
        return index;
    }
}
exports.EstoqueRepository = EstoqueRepository;
