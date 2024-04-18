"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, description, price, IdCategoria) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.IdCategoria = IdCategoria;
        this.id = this.geraId();
    }
    geraId() {
        return Date.now();
    }
}
exports.Product = Product;
