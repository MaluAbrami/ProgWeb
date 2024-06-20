import { ModalidadePaes } from "../model/Modalidades";

export class ModalidadesRepository{
    modalidadesList: ModalidadePaes[] = [];

    insereModalidade(modalidade: ModalidadePaes){
        this.modalidadesList.push(modalidade);
    }

    filtraModalidadePorName(name: string): ModalidadePaes|undefined{
        return this.modalidadesList.find(modalidade => modalidade.name = name);
    }
}