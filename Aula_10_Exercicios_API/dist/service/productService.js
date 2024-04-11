"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_1 = require("../model/product");
const productRepository_1 = require("../repository/productRepository");
class ProductService {
    constructor() {
        this.productRepository = new productRepository_1.ProductRepository();
    }
    cadastrarProduto(produtoData) {
        const { name, description, price } = produtoData;
        if (!name || !description || !price) {
            throw new Error("Informações incompletas");
        }
        const novoProduto = new product_1.Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }
    consultarProduto(id, name) {
        if (id && name) {
            console.log("Com ID e Name", id, name);
            const idNumber = parseInt(id);
            const product = this.productRepository.filtraProdutoPorNomeId(idNumber, name);
            return product;
        }
        else if (id) {
            const idNumber = parseInt(id);
            const product = this.productRepository.filtraProdutoPorId(idNumber);
            return product;
        }
        else if (name) {
            const product = this.productRepository.filtraProdutoPorNome(name);
            return product;
        }
        console.log(id);
        return undefined;
    }
    getProducts() {
        return this.productRepository.filtraTodosProdutos();
    }
}
exports.ProductService = ProductService;
