"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletaQuantidade = exports.adicionaQuantidade = exports.buscarNoEstoque = exports.listaEstoque = exports.cadastrarNoEstoque = void 0;
const EstoqueService_1 = require("../service/EstoqueService");
const estoqueService = new EstoqueService_1.EstoqueService();
function cadastrarNoEstoque(req, res) {
    try {
        const novoEstoque = estoqueService.cadastrarNoEstoque(req.body);
        res.status(201).json({
            mensagem: "Item adicionado no estoque com sucesso!",
            estoque: novoEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.cadastrarNoEstoque = cadastrarNoEstoque;
;
function listaEstoque(req, res) {
    try {
        res.status(200).json(estoqueService.getEstoque());
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.listaEstoque = listaEstoque;
;
function buscarNoEstoque(req, res) {
    try {
        const estoque = estoqueService.consultarEstoquePorId(req.query.id);
        if (estoque) {
            res.status(200).json({
                mensagem: "Item encontrado no estoque com sucesso!",
                estoque: estoque
            });
        }
        else {
            res.status(404).json({ mensagem: "Item não encontrado no estoque" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.buscarNoEstoque = buscarNoEstoque;
;
function adicionaQuantidade(req, res) {
    try {
        const novoEstoque = estoqueService.adicionaQuantidade(req.body);
        res.status(201).json({
            mensagem: "Quantidade informada adicionada no estoque com sucesso!",
            estoque: novoEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.adicionaQuantidade = adicionaQuantidade;
;
function deletaQuantidade(req, res) {
    try {
        const novoEstoque = estoqueService.deletaQuantidade(req.body);
        res.status(201).json({
            mensagem: "Quantidade informada deletada do estoque com sucesso!",
            estoque: novoEstoque
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletaQuantidade = deletaQuantidade;
;
