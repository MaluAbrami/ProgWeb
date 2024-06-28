import { parse } from "qs";
import { EstoquePaes } from "../model/Estoque";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class EstoqueService{

    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    cadastrarNoEstoque(estoqueData: any): EstoquePaes|undefined{
        const {modalidadeId, quantidade, price} = estoqueData;
        if(!modalidadeId || !quantidade || !price){
            throw new Error("Informações incompletas");
        }

        const estoqueEncontrado = this.consultarEstoquePorModalidadeId(modalidadeId); 
        if(estoqueEncontrado){
            throw new Error("Esta modalidade já existe no estoque!");
        }
        else{ //Se não existir itens iguais, criamos um um lugar no estoque para o item novo
            const novoEstoque = new EstoquePaes(modalidadeId, quantidade, price);
            this.estoqueRepository.insereNoEstoque(novoEstoque);
            return novoEstoque;
        }
    }

    getEstoque(): EstoquePaes[]{
        return this.estoqueRepository.filtraTodosOsEstoques();
    }

    consultarEstoquePorModalidadeId(modalidadeId: any): EstoquePaes|undefined{
        if(modalidadeId){
            const idNumber: number = parseInt(modalidadeId, 10);
            return this.estoqueRepository.filtraEstoquePorModalidadeId(idNumber);
        }
    }

    consultarEstoquePorId(id: any): EstoquePaes|undefined{
        if(id){
            const idNumber: number = parseInt(id, 10);
            return this.estoqueRepository.filtraEstoquePorId(idNumber);
        }
    }

    adicionaQuantidade(estoqueData: any): EstoquePaes{
        const {id, modalidadeId, quantidade, price} = estoqueData;

        if(!id || !modalidadeId || !quantidade || !price){
            throw new Error("Informações incompletas");
        }

        let estoqueEncontrado = this.consultarEstoquePorId(id);
        if(!estoqueEncontrado){
            throw new Error("Item não encontrado no estoque!");
        }
        estoqueEncontrado.quantidade += quantidade;
        this.estoqueRepository.alterarEstoque(estoqueEncontrado);
        return estoqueEncontrado;
    }

    deletaQuantidade(estoqueData: any): EstoquePaes{
        const {id, modalidadeId, quantidade, price} = estoqueData;

        if(!id || !modalidadeId || !quantidade || !price){
            throw new Error("Informações incompletas");
        }

        let estoqueEncontrado = this.consultarEstoquePorId(id);
        if(!estoqueEncontrado){
            throw new Error("Item não encontrado no estoque!");
        }
        else if(estoqueEncontrado.quantidade - quantidade < 0){
            throw new Error("Não há quantidade suficiente no estoque!");
        }
        estoqueEncontrado.quantidade -= quantidade;
        this.estoqueRepository.alterarEstoque(estoqueEncontrado);
        return estoqueEncontrado;
    }
}