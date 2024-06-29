"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalidadesRepository = void 0;
const global_1 = require("../global/global");
class ModalidadesRepository {
    constructor() {
        this.modalidadesList = (0, global_1.modalidadePaes)();
    }
    insereModalidade(modalidade) {
        this.modalidadesList.push(modalidade);
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
            this.modalidadesList.splice(index, 1); //o método "splice" remove elementos da lista, começando do índice especificado ('index') e removendo apenas um elemento ('1')
        }
        return index;
    }
}
exports.ModalidadesRepository = ModalidadesRepository;
