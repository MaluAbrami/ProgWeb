import { ModalidadePaes } from "../model/Modalidades";

export class ModalidadesRepository{
    modalidadesList: ModalidadePaes[] = [];

    insereModalidade(modalidade: ModalidadePaes){
        this.modalidadesList.push(modalidade);
    }

    /*
    filtraModalidadePorNameId(id: number, name: string): ModalidadePaes|undefined{
        return this.modalidadesList.find(modalidade => modalidade.id === id && modalidade.name === name);
    }

    filtraModalidadePorId(id: number): ModalidadePaes|undefined{
        return this.modalidadesList.find(modalidade => modalidade.id === id);
    }
    */

    filtraModalidadePorName(name: string): ModalidadePaes|undefined{
        return this.modalidadesList.find(modalidade => modalidade.name === name);
    }

    filtraTodasModalidades(): ModalidadePaes[]{
        return this.modalidadesList;
    }

    alterarModalidade(modalidade: ModalidadePaes): number{
        const index = this.modalidadesList.indexOf(modalidade);
        if(index !== -1){
            this.modalidadesList[index] = modalidade;
        }
        return index;
    } 

    deletaModalidade(modalidade: ModalidadePaes){
        const index = this.modalidadesList.indexOf(modalidade);
        if(index !== -1){
            this.modalidadesList[index] = modalidade;
        }
        return index;
    }
}