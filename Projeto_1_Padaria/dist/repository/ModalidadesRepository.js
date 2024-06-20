"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadesRepository = void 0;
class ModalidadesRepository {
    constructor() {
        this.modalidadesList = [];
    }
    insereModalidade(modalidade) {
        this.modalidadesList.push(modalidade);
    }
    filtraModalidadePorName(name) {
        return this.modalidadesList.find(modalidade => modalidade.name = name);
    }
}
exports.ModalidadesRepository = ModalidadesRepository;
