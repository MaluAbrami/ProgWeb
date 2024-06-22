import { ModalidadePaes } from "../model/Modalidades";
import { ModalidadesRepository } from "../repository/ModalidadesRepository";
export class ModalidadesService{

    modalidadesRepository: ModalidadesRepository = new ModalidadesRepository();
    
    cadastrarModalidade(modalidadeData: any): ModalidadePaes{
        const {name, vegano} = modalidadeData;
        if(!name){
            throw new Error("Informações incompletas.");
        }

        const modalidadeEncontrada = this.consultarModalidade(undefined, name);
        if(modalidadeEncontrada){
            throw new Error("Modalidade já cadastrada!");
        }
        const novaModalidade = new ModalidadePaes(name, vegano);
        this.modalidadesRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }

    consultarModalidade(id: any, name: any): ModalidadePaes|undefined{
        if(id && name){
            const idNumber: number = parseInt(id, 10);
            return this.modalidadesRepository.filtraModalidadePorNameId(idNumber, name);
        }
        else if(id){
            const idNumber: number = parseInt(id, 10);
            return this.modalidadesRepository.filtraModalidadePorId(idNumber);
        }
        else if(name){
            return this.modalidadesRepository.filtraModalidadePorName(name);
        }
    }

    getModalidades(): ModalidadePaes[]{
        return this.modalidadesRepository.filtraTodasModalidades();
    }

    alterarModalidade(modalidadeData: any): ModalidadePaes{
        const {name, vegano} = modalidadeData;
        if(!name){
            throw new Error("Informações incompletas");
        }

        let modalidadeEncontrada = this.consultarModalidade(undefined, name);
        if(!modalidadeEncontrada){
            throw new Error("Produto não cadastrado!");
        }
        modalidadeEncontrada.vegano = vegano;
        this.modalidadesRepository.alterarModalidade(modalidadeEncontrada);
        return modalidadeEncontrada;
    }

    deletaModalidade(name: any){
        const modalidade = this.consultarModalidade(undefined, name);
        if(!modalidade){
            throw new Error("Modalidade não encontrada");
        }
        this.modalidadesRepository.deletaModalidade(modalidade);
    }
}