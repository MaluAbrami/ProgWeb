"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadesService = void 0;
const Modalidades_1 = require("../model/Modalidades");
const ModalidadesRepository_1 = require("../repository/ModalidadesRepository");
class ModalidadesService {
    constructor() {
        this.modalidadesRepository = new ModalidadesRepository_1.ModalidadesRepository();
    }
    cadastrarModalidade(modalidadeData) {
        const { name, vegano } = modalidadeData;
        if (!name) {
            throw new Error("Informações incompletas.");
        }
        const modalidadeEncontrada = this.consultarModalidade(name);
        if (modalidadeEncontrada) {
            throw new Error("Modalidade já cadastrada!");
        }
        const novaModalidade = new Modalidades_1.ModalidadePaes(name, vegano);
        this.modalidadesRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }
    consultarModalidade(name) {
        if (name) {
            return this.modalidadesRepository.filtraModalidadePorName(name);
        }
    }
}
exports.ModalidadesService = ModalidadesService;
