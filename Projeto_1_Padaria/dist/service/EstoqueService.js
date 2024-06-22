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
        const estoqueEncontrado = this.consultarEstoque(modalidadeId); //Caso já tenha itens iguais devemos apenas alterar sua quantidade
        if (estoqueEncontrado) {
            estoqueEncontrado.quantidade += quantidade;
        }
        else { //Se não existir itens iguais, criamos um um lugar no estoque para o item novo
            const novoEstoque = new Estoque_1.EstoquePaes(modalidadeId, quantidade, price);
            this.estoqueRepository.insereNoEstoque(novoEstoque);
            return novoEstoque;
        }
    }
    getEstoque() {
        return this.estoqueRepository.filtraTodosOsEstoques();
    }
    consultarEstoque(id) {
        if (id) {
            const idNumber = parseInt(id, 10);
            return this.estoqueRepository.filtraEstoquePorId(idNumber);
        }
    }
    alterarEstoque(estoqueData) {
        const { modalidadeId, quantidade, price } = estoqueData;
        if (!modalidadeId || !quantidade || !price) {
            throw new Error("Informações incompletas");
        }
        let estoqueEncontrado = this.consultarEstoque(modalidadeId);
        if (!estoqueEncontrado) {
            throw new Error("Item não encontrado no estoque!");
        }
        estoqueEncontrado.modalidadeId = modalidadeId;
        estoqueEncontrado.quantidade = quantidade;
        estoqueEncontrado.price = price;
        this.estoqueRepository.alterarEstoque(estoqueEncontrado);
        return estoqueEncontrado;
    }
}
exports.EstoqueService = EstoqueService;
