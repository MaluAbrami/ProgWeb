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
            const novoRegistro = new ItemVenda_1.ItemVenda(estoquePaesId, quantidade);
            this.itemVendaRepository.gravaItensVendidos(novoRegistro);
            itensRegistrados.push(novoRegistro);
        });
        return itensRegistrados;
    }
    somarValor(itemVendaData) {
        const { estoquePaesId, quantidade } = itemVendaData;
        console.log(estoquePaesId);
        console.log(quantidade);
        console.log(this.estoqueRepository.estoqueList);
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
