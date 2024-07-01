"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendasService = void 0;
const Vendas_1 = require("../model/Vendas");
const VendasRepository_1 = require("../repository/VendasRepository");
const ItemVendaService_1 = require("./ItemVendaService");
class VendasService {
    constructor() {
        this.vendasRepository = new VendasRepository_1.VendasRepository();
        this.itemVendaService = new ItemVendaService_1.ItemVendaService();
    }
    registrarVenda(vendaData) {
        const { cpf, itens } = vendaData;
        if (!cpf || !itens || itens.length === 0) {
            throw new Error("Informações incompletas.");
        }
        let valor = 0;
        for (let i = 0; i < itens.length; i++) {
            valor += this.itemVendaService.somarValor(itens[i]);
        }
        const novaVenda = new Vendas_1.VendaPaes(cpf, itens, valor);
        this.vendasRepository.gravaVenda(novaVenda);
        return novaVenda;
    }
    recuperaVenda(id) {
        if (!id) {
            throw new Error("Informações incompletas!");
        }
        const idNumber = parseInt(id, 10);
        return this.vendasRepository.filtraVendaPorId(idNumber);
    }
}
exports.VendasService = VendasService;
