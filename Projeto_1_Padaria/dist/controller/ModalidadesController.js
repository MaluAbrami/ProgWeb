"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recuperaModalidade = exports.deletaModalidade = exports.alterarModalidade = exports.listarModalidades = exports.cadastrarModalidade = void 0;
const ModalidadesService_1 = require("../service/ModalidadesService");
const modalidadesService = new ModalidadesService_1.ModalidadesService();
function cadastrarModalidade(req, res) {
    try {
        const novaModalidade = modalidadesService.cadastrarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade adicionada com sucesso!",
            modalidade: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.cadastrarModalidade = cadastrarModalidade;
;
function listarModalidades(req, res) {
    try {
        res.status(200).json(modalidadesService.getModalidades());
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
exports.listarModalidades = listarModalidades;
;
function alterarModalidade(req, res) {
    try {
        const novaModalidade = modalidadesService.alterarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade alterada com sucesso!",
            modalidade: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.alterarModalidade = alterarModalidade;
;
function deletaModalidade(req, res) {
    try {
        modalidadesService.deletaModalidade(req.query.name);
        res.status(200).json({ message: "Modalidade deletada com sucesso!" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletaModalidade = deletaModalidade;
;
function recuperaModalidade(req, res) {
    try {
        const modalidade = modalidadesService.consultarModalidade(req.query.id);
        if (modalidade) {
            res.status(200).json({
                mensagem: "Modalidade encontrada com sucesso",
                modalidade: modalidade
            });
        }
        else {
            res.status(404).json({ mensagem: "Modalidade não encontrada" });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.recuperaModalidade = recuperaModalidade;
