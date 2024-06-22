import { EstoquePaes } from "../model/Estoque";

export class EstoqueRepository {
    estoqueList: EstoquePaes[] = [];

    insereNoEstoque(estoque: EstoquePaes){
        this.estoqueList.push(estoque);
    }

    filtraTodosOsEstoques(): EstoquePaes[]{
        return this.estoqueList;
    }

    filtraEstoquePorId(id: number): EstoquePaes|undefined{
        return this.estoqueList.find(estoque => estoque.id === id);
    }

    alterarEstoque(estoque: EstoquePaes): number{
        const index = this.estoqueList.indexOf(estoque);
        if(index !== -1){
            this.estoqueList[index] = estoque;
        }
        return index;
    }
}