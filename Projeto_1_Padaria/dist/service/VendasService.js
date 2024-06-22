"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendasService = void 0;
const VendasRepository_1 = require("../repository/VendasRepository");
class VendasService {
    constructor() {
        this.vendasRepository = new VendasRepository_1.VendasRepository();
    }
}
exports.VendasService = VendasService;
