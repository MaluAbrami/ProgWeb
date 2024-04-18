"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    constructor() {
        this.productList = [];
    }
    insereProduto(product) {
        this.productList.push(product);
    }
    filtraProdutoPorId(id) {
        return this.productList.find(product => product.id === id);
    }
    filtraProdutoPorNome(name) {
        return this.productList.find(product => product.name === name);
    }
    filtraProdutoPorCategoria(categoria) {
        return this.productList.find(product => product.IdCategoria === categoria);
    }
    filtraProdutoPorIdNome(id, name) {
        return this.productList.find(product => product.id === id && product.name === name);
    }
    filtraProdutoPorNomeCategoria(name, categoria) {
        return this.productList.find(product => product.name === name && product.IdCategoria === categoria);
    }
    filtraProdutoPorIdCategoria(id, categoria) {
        return this.productList.find(product => product.id === id && product.IdCategoria === categoria);
    }
    filtraProdutoPorNomeIdCategoria(id, name, categoria) {
        return this.productList.find(product => product.id === id && product.name === name && product.IdCategoria === categoria);
    }
    filtraTodosProdutos() {
        return this.productList;
    }
}
exports.ProductRepository = ProductRepository;
