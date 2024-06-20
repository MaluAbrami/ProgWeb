import { ModalidadePaes } from "../model/Modalidades";
import { ModalidadesRepository } from "../repository/ModalidadesRepository";
export class ModalidadesService{

    modalidadesRepository: ModalidadesRepository = new ModalidadesRepository();
    
    cadastrarModalidade(modalidadeData: any): ModalidadePaes{
        const {name, price, vegano} = modalidadeData;
        if(!name || !price || !vegano){
            throw new Error("Informações incompletas.");
        }

        const modalidadeEncontrada = this.consultarModalidade(name);
        if(modalidadeEncontrada){
            throw new Error("Modalidade já cadastrada!");
        }
        const novaModalidade = new ModalidadePaes(name, price, vegano);
        this.modalidadesRepository.insereModalidade(novaModalidade);
        return novaModalidade;
    }

    consultarModalidade(name: any): ModalidadePaes|undefined{
        if(name){
            return this.modalidadesRepository.filtraModalidadePorName(name);
        }
    }
}