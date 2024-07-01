"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendasRepository = void 0;
const global_1 = require("../global/global");
class VendasRepository {
    constructor() {
        this.vendasList = (0, global_1.getVendasList)();
    }
    gravaVenda(venda) {
        return this.vendasList.push(venda);
    }
}
exports.VendasRepository = VendasRepository;
