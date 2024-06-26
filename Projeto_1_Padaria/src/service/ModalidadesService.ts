import { ModalidadePaes } from "../model/Modalidades";
import { ModalidadesRepository } from "../repository/ModalidadesRepository";
export class ModalidadesService{

    modalidadesRepository: ModalidadesRepository = new ModalidadesRepository();
    
    cadastrarModalidade(modalidadeData: any): ModalidadePaes{
        const {name, vegano} = modalidadeData;
        if(!name){
            throw new Error("Informações incompletas.");
        }

        const modalidadeEncontrada = this.consultarModalidade(name);
        if(modalidadeEncontrada){
            throw new Error("Modalidade já cadastrada!");
        }
        const novaModalidade = new ModalidadePaes(name, vegano);
        this.modalidadesRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }

    consultarModalidade(name: any): ModalidadePaes|undefined{
        if(name){
            return this.modalidadesRepository.filtraModalidadePorName(name);
        }
    }

    consultarModalidadePorId(id: any): ModalidadePaes|undefined{
        if(id){
            return this.modalidadesRepository.filtraModalidadePorId(id);
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

        let modalidadeEncontrada = this.consultarModalidade(name);
        if(!modalidadeEncontrada){
            throw new Error("Produto não cadastrado!");
        }
        modalidadeEncontrada.vegano = vegano;
        this.modalidadesRepository.alterarModalidade(modalidadeEncontrada);
        return modalidadeEncontrada;
    }

    deletaModalidade(modalidadeData: any){
        const {name, vegano} = modalidadeData;
        if(!name){
            throw new Error("Informações incompletas");
        }
        let modalidadeEncontrada = this.consultarModalidade(name);
        if(!modalidadeEncontrada){
            throw new Error("Modalidade não encontrada");
        }
        this.modalidadesRepository.deletaModalidade(modalidadeEncontrada);
    }
}