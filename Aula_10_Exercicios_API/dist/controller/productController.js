"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirEstatisticas = exports.listaProdutos = exports.pesquisarProdutoPorID = exports.cadastrarProduto = void 0;
const productService_1 = require("../service/productService");
const productService = new productService_1.ProductService();
function cadastrarProduto(req, res) {
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json({
            mensagem: "Produto adicionado com sucesso!",
            produto: novoProduto
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.cadastrarProduto = cadastrarProduto;
;
function pesquisarProdutoPorID(req, res) {
    try {
        const id = req.query.id;
        console.log(id);
        const name = req.query.name;
        console.log(name);
        const categoria = req.query.categoria;
        console.log(categoria);
        const produto = productService.consultarProduto(id, name, categoria);
        if (produto) {
            res.status(200).json({
                mensagem: "Produto encontrado com sucesso!",
                produto: produto
            });
        }
        else {
            res.status(404).json({ mensagem: "Produto não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.pesquisarProdutoPorID = pesquisarProdutoPorID;
;
function listaProdutos(req, res) {
    try {
        const ordem = req.query.ordem;
        console.log(ordem);
        res.status(200).json(productService.getProducts(ordem));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listaProdutos = listaProdutos;
;
function exibirEstatisticas(req, res) {
    try {
        const op = req.query.op;
        console.log("A opção escolhida foi", op);
        res.status(200).json(productService.definirEstatisticas(op));
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.exibirEstatisticas = exibirEstatisticas;
