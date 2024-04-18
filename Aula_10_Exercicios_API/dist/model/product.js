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
    somarProdutos() {
        let soma = 0;
        for (let i = 0; i < Product.length; i++) {
            soma++;
        }
        return soma;
    }
    somaPrice() {
        let soma = 0;
        for (let i = 0; i < Product.length; i++) {
            soma += this.price;
        }
        return soma;
    }
}
exports.Product = Product;
