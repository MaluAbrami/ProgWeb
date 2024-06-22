import { EstoquePaes } from "../model/Estoque";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class EstoqueService{

    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    cadastrarNoEstoque(estoqueData: any): EstoquePaes{
        const {quantidade, price} = estoqueData;
        if(!quantidade || !price){
            throw new Error("Informações incompletas");
        }
        const novoEstoque = new EstoquePaes(quantidade, price);
        this.estoqueRepository.insereNoEstoque(novoEstoque);
        return novoEstoque;
    }
}