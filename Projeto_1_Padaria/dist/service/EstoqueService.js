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
        const estoqueEncontrado = this.consultarEstoquePorModalidadeId(modalidadeId);
        if (estoqueEncontrado) {
            throw new Error("Esta modalidade já existe no estoque!");
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
    consultarEstoquePorModalidadeId(modalidadeId) {
        if (modalidadeId) {
            const idNumber = parseInt(modalidadeId, 10);
            return this.estoqueRepository.filtraEstoquePorModalidadeId(idNumber);
        }
    }
    consultarEstoquePorId(id) {
        if (id) {
            const idNumber = parseInt(id, 10);
            return this.estoqueRepository.filtraEstoquePorId(idNumber);
        }
    }
    adicionaQuantidade(estoqueData) {
        const { id, modalidadeId, quantidade, price } = estoqueData;
        if (!id || !modalidadeId || !quantidade || !price) {
            throw new Error("Informações incompletas");
        }
        let estoqueEncontrado = this.consultarEstoquePorId(id);
        if (!estoqueEncontrado) {
            throw new Error("Item não encontrado no estoque!");
        }
        estoqueEncontrado.quantidade += quantidade;
        this.estoqueRepository.alterarEstoque(estoqueEncontrado);
        return estoqueEncontrado;
    }
    deletaQuantidade(estoqueData) {
        const { id, modalidadeId, quantidade, price } = estoqueData;
        if (!id || !modalidadeId || !quantidade || !price) {
            throw new Error("Informações incompletas");
        }
        let estoqueEncontrado = this.consultarEstoquePorId(id);
        if (!estoqueEncontrado) {
            throw new Error("Item não encontrado no estoque!");
        }
        else if (estoqueEncontrado.quantidade - quantidade < 0) {
            throw new Error("Não há quantidade suficiente no estoque!");
        }
        estoqueEncontrado.quantidade -= quantidade;
        this.estoqueRepository.alterarEstoque(estoqueEncontrado);
        return estoqueEncontrado;
    }
}
exports.EstoqueService = EstoqueService;
