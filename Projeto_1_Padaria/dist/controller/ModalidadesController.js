"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastrarModalidade = cadastrarModalidade;
exports.listarModalidades = listarModalidades;
exports.alterarModalidade = alterarModalidade;
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
;
function listarModalidades(req, res) {
    try {
        res.status(200).json(modalidadesService.getModalidades());
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
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
