"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarVenda = registrarVenda;
exports.recuperaVenda = recuperaVenda;
const VendasService_1 = require("../service/VendasService");
const ItemVendaService_1 = require("../service/ItemVendaService");
const vendasService = new VendasService_1.VendasService();
const itemVendaService = new ItemVendaService_1.ItemVendaService();
function registrarVenda(req, res) {
    try {
        const novaVenda = vendasService.registrarVenda(req.body);
        const itens = itemVendaService.cadastrarItensVendidos(req.body.itens);
        res.status(200).json({
            venda: novaVenda
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
;
function recuperaVenda(req, res) {
    try {
        const vendaEncontrada = vendasService.recuperaVenda(req.query.id);
        res.status(200).json({
            venda: vendaEncontrada
        });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
