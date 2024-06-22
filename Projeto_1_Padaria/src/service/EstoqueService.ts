import { EstoquePaes } from "../model/Estoque";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class EstoqueService{

    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    cadastrarNoEstoque(estoqueData: any): EstoquePaes|undefined{
        const {modalidadeId, quantidade, price} = estoqueData;
        if(!modalidadeId || !quantidade || !price){
            throw new Error("Informações incompletas");
        }

        const estoqueEncontrado = this.consultarEstoque(modalidadeId); //Caso já tenha itens iguais devemos apenas alterar sua quantidade
        if(estoqueEncontrado){
            estoqueEncontrado.quantidade += quantidade;
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

    consultarEstoque(id: any): EstoquePaes|undefined{
        if(id){
            const idNumber: number = parseInt(id, 10);
            return this.estoqueRepository.filtraEstoquePorId(idNumber);
        }
    }

    alterarEstoque(estoqueData: any): EstoquePaes{ //PRECISO PERGUNTAR SOBRE O ADICIONAR QUANTIDADE E DELETAR QUANTIDADE
        const  {modalidadeId, quantidade, price} = estoqueData;
        if(!modalidadeId || !quantidade || !price){
            throw new Error("Informações incompletas");
        }

        let estoqueEncontrado = this.consultarEstoque(modalidadeId);
        if(!estoqueEncontrado){
            throw new Error("Item não encontrado no estoque!");
        }
        estoqueEncontrado.modalidadeId = modalidadeId;
        estoqueEncontrado.quantidade = quantidade;
        estoqueEncontrado.price = price;
        this.estoqueRepository.alterarEstoque(estoqueEncontrado);
        return estoqueEncontrado;
    }
}