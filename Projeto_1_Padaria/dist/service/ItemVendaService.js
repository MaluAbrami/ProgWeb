"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemVendaService = void 0;
const ItemVenda_1 = require("../model/ItemVenda");
const ItemVendaRepository_1 = require("../repository/ItemVendaRepository");
const EstoqueRepository_1 = require("../repository/EstoqueRepository");
class ItemVendaService {
    constructor() {
        this.itemVendaRepository = new ItemVendaRepository_1.ItemVendaRepository();
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
    }
    cadastrarItensVendidos(itemVendaData) {
        const itensRegistrados = [];
        itemVendaData.forEach(itemVendaData => {
            const { estoquePaesId, quantidade } = itemVendaData;
            if (!estoquePaesId || !quantidade) {
                throw new Error("Informações incompletas.");
            }
            const estoquePaesIdEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);
            if (estoquePaesIdEncontrado) {
                const quantidadeNoEstoque = estoquePaesIdEncontrado.quantidade;
                if (quantidadeNoEstoque >= quantidade) { //Se houver quantidade suficiente, registra o item vendido e deleta quantidade no estoque
                    const novoRegistro = new ItemVenda_1.ItemVenda(estoquePaesId, quantidade);
                    this.itemVendaRepository.gravaItensVendidos(novoRegistro);
                    itensRegistrados.push(novoRegistro);
                    estoquePaesIdEncontrado.quantidade = quantidadeNoEstoque - quantidade; //Atualiza a quantidade do item 
                    this.estoqueRepository.alterarEstoque(estoquePaesIdEncontrado); //Altera a quantidade do item no estoque de acordo com o que foi vendido
                }
                else {
                    throw new Error("Saldo insuficiente do item no estoque!");
                }
            }
            else {
                throw new Error("Item não cadastrado no estoque!");
            }
        });
        return itensRegistrados;
    }
    somarValor(itemVendaData) {
        const { estoquePaesId, quantidade } = itemVendaData;
        const itemEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);
        if (!itemEncontrado) {
            throw new Error("Item não existe no estoque, portanto não possui preço cadastrado!");
        }
        console.log(itemEncontrado);
        const itemVendaValor = itemEncontrado.price * quantidade;
        return itemVendaValor;
    }
}
exports.ItemVendaService = ItemVendaService;
