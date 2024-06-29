"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarVenda = void 0;
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
exports.registrarVenda = registrarVenda;
;
