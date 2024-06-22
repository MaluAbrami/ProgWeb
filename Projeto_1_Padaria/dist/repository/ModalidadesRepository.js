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
    filtraModalidadePorNameId(id, name) {
        return this.modalidadesList.find(modalidade => modalidade.id === id && modalidade.name === name);
    }
    filtraModalidadePorId(id) {
        return this.modalidadesList.find(modalidade => modalidade.id === id);
    }
    filtraModalidadePorName(name) {
        return this.modalidadesList.find(modalidade => modalidade.name === name);
    }
    filtraTodasModalidades() {
        return this.modalidadesList;
    }
    alterarModalidade(modalidade) {
        const index = this.modalidadesList.indexOf(modalidade);
        if (index !== -1) {
            this.modalidadesList[index] = modalidade;
        }
        return index;
    }
    deletaModalidade(modalidade) {
        const index = this.modalidadesList.indexOf(modalidade);
        if (index !== -1) {
            this.modalidadesList[index] = modalidade;
        }
        return index;
    }
}
exports.ModalidadesRepository = ModalidadesRepository;
