"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemVendaRepository = void 0;
const global_1 = require("../global/global");
class ItemVendaRepository {
    constructor() {
        this.itemVendaList = (0, global_1.itemVenda)();
    }
    gravaItensVendidos(itemVenda) {
        return this.itemVendaList.push(itemVenda);
    }
}
exports.ItemVendaRepository = ItemVendaRepository;
