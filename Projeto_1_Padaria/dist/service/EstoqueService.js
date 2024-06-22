"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
const Estoque_1 = require("../model/Estoque");
const EstoqueRepository_1 = require("../repository/EstoqueRepository");
class EstoqueService {
    constructor() {
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
    }
    cadastrarNoEstoque(estoqueData) {
        const { modalidadeId, quantidade, price } = estoqueData;
        if (!modalidadeId || !quantidade || !price) {
            throw new Error("Informações incompletas");
        }
        const novoEstoque = new Estoque_1.EstoquePaes(modalidadeId, quantidade, price);
        this.estoqueRepository.insereNoEstoque(novoEstoque);
        return novoEstoque;
    }
    getEstoque() {
        return this.estoqueRepository.filtraTodosOsEstoques();
    }
}
exports.EstoqueService = EstoqueService;
