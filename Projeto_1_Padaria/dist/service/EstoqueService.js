"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
const EstoqueRepository_1 = require("../repository/EstoqueRepository");
class EstoqueService {
    constructor() {
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
    }
    cadastrarNoEstoque(estoqueData) {
        const {};
    }
}
exports.EstoqueService = EstoqueService;
