"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemVendaService = void 0;
const ItemVenda_1 = require("../model/ItemVenda");
const ItemVendaRepository_1 = require("../repository/ItemVendaRepository");
const EstoqueRepository_1 = require("../repository/EstoqueRepository");
const ModalidadesRepository_1 = require("../repository/ModalidadesRepository");
class ItemVendaService {
    constructor() {
        this.itemVendaRepository = new ItemVendaRepository_1.ItemVendaRepository();
        this.estoqueRepository = new EstoqueRepository_1.EstoqueRepository();
        this.modalidadeRepository = new ModalidadesRepository_1.ModalidadesRepository();
    }
    cadastrarItensVendidos(itemVendaData) {
        const itensRegistrados = [];
        let aux = false;
        itemVendaData.forEach(itemVendaData => {
            const { estoquePaesId, quantidade } = itemVendaData;
            if (!estoquePaesId || !quantidade || quantidade <= 0) {
                throw new Error("Informações incompletas");
            }
            const itemVendaEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);
            if (itemVendaEncontrado) { //Se o item existir no estoque, verificamos se há quantidade suficiente disponível no estoque
                const quantidadeNoEstoque = itemVendaEncontrado.quantidade;
                if (quantidadeNoEstoque >= quantidade) { //aux será true se todos os itens na lista tiverem saldo disponivel no estoque
                    aux = true;
                }
                else {
                    throw new Error("Não há saldo disponível suficiente no estoque!");
                }
            }
            else {
                throw new Error("Item não está cadastrado no estoque!");
            }
        });
        if (aux) { //Depois de garantir que há quantidade disponível para todos os itens da lista de venda, registramos os itens vendidos da lista
            itemVendaData.forEach(itemVendaData => {
                const { estoquePaesId, quantidade, name } = itemVendaData;
                const estoquePaesIdEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);
                if (!estoquePaesIdEncontrado) {
                    throw new Error("Item não está cadastrado no estoque!");
                }
                else {
                    estoquePaesIdEncontrado.quantidade -= quantidade;
                    itemVendaData.name = this.modalidadeRepository.retornaModalidadeName(estoquePaesIdEncontrado.modalidadeId);
                    const novoRegistro = new ItemVenda_1.ItemVenda(estoquePaesId, quantidade, name);
                    this.itemVendaRepository.gravaItensVendidos(novoRegistro);
                    itensRegistrados.push(novoRegistro);
                }
            });
        }
        else {
            throw new Error("Não há saldo disponível suficiente no estoque!");
        }
        return itensRegistrados;
    }
    somarValor(itemVendaData) {
        const { estoquePaesId, quantidade } = itemVendaData;
        const itemEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);
        if (!itemEncontrado) {
            throw new Error("Item não existe no estoque, portanto não possui preço cadastrado!");
        }
        const itemVendaValor = itemEncontrado.price * quantidade;
        return itemVendaValor;
    }
}
exports.ItemVendaService = ItemVendaService;
