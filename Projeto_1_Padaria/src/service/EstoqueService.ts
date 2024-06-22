import { EstoquePaes } from "../model/Estoque";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class EstoqueService{

    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    cadastrarNoEstoque(estoqueData: any): EstoquePaes{
        const {modalidadeId, quantidade, price} = estoqueData;
        if(!modalidadeId || !quantidade || !price){
            throw new Error("Informações incompletas");
        }
        const novoEstoque = new EstoquePaes(modalidadeId, quantidade, price);
        this.estoqueRepository.insereNoEstoque(novoEstoque);
        return novoEstoque;
    }

    getEstoque(): EstoquePaes[]{
        return this.estoqueRepository.filtraTodosOsEstoques();
    }
}