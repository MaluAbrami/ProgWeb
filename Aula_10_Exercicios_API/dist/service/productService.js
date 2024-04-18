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
        const { name, description, price, IdCategoria } = produtoData;
        if (!name || !description || !price || !IdCategoria) {
            throw new Error("Informações incompletas");
        }
        const produtoEncontrado = this.consultarProduto(undefined, name, IdCategoria);
        if (produtoEncontrado) {
            throw new Error("Produto já cadastrado!");
        }
        const novoProduto = new product_1.Product(name, description, price, IdCategoria);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }
    consultarProduto(id, name, categoria) {
        if (id && name && categoria) {
            console.log("Com ID, Name e IdCategoria", id, name, categoria);
            const idNumber = parseInt(id);
            const idCategoria = parseInt(categoria);
            const product = this.productRepository.filtraProdutoPorNomeIdCategoria(idNumber, name, idCategoria);
            return product;
        }
        else if (id && name) {
            console.log("Com ID e Name", id, name);
            const idNumber = parseInt(id);
            const product = this.productRepository.filtraProdutoPorIdNome(idNumber, name);
            return product;
        }
        else if (name && categoria) {
            console.log("Com Name e IdCategoria", name, categoria);
            const idCategoria = parseInt(categoria);
            const product = this.productRepository.filtraProdutoPorNomeCategoria(name, idCategoria);
            return product;
        }
        else if (id && categoria) {
            console.log("Com ID e IdCategoria", id, categoria);
            const idNumber = parseInt(id);
            const idCategoria = parseInt(categoria);
            const product = this.productRepository.filtraProdutoPorIdCategoria(idNumber, idCategoria);
            return product;
        }
        else if (id) {
            console.log("Com ID", id);
            const idNumber = parseInt(id);
            const product = this.productRepository.filtraProdutoPorId(idNumber);
            return product;
        }
        else if (name) {
            console.log("Com Name", name);
            const product = this.productRepository.filtraProdutoPorNome(name);
            return product;
        }
        else if (categoria) {
            console.log("Com IdCategoria", categoria);
            const idCategoria = parseInt(categoria);
            const product = this.productRepository.filtraProdutoPorCategoria(idCategoria);
            return product;
        }
        return undefined;
    }
    getProducts(ordem) {
        if (ordem === "desc") {
            return this.productRepository.filtraTodosProdutos().sort((a, b) => b.price - a.price);
        }
        else if (ordem === "cres") {
            return this.productRepository.filtraTodosProdutos().sort((a, b) => a.price - b.price);
        }
    }
    definirEstatisticas(op) {
        if (op === "total") {
            return this.productRepository.somarTotal();
        }
        else if (op === "média") {
            return this.pro;
        }
    }
}
exports.ProductService = ProductService;
