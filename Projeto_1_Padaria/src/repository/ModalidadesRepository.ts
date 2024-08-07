import { ModalidadePaes } from "../model/Modalidades";
import { getModalidadesList } from "../global/global";

export class ModalidadesRepository{
    modalidadesList: ModalidadePaes[] = getModalidadesList();

    insereModalidade(modalidade: ModalidadePaes){
        this.modalidadesList.push(modalidade);
    }

    retornaModalidadeName(id: number){
        const modalidade = this.filtraModalidadePorId(id);
        if(modalidade){
            return modalidade.name;
        }
        else{
            throw new Error("Modalidade não existe");
        }
    }

    filtraModalidadePorId(id: number): ModalidadePaes|undefined{
        return this.modalidadesList.find(modalidade => modalidade.id === id);
    }

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
            this.modalidadesList.splice(index, 1); //o método "splice" remove elementos da lista, começando do índice especificado ('index') e removendo apenas um elemento ('1')
        }
        return index;
    }
}