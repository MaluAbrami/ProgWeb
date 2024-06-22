import { EstoquePaes } from "../model/Estoque";

export class EstoqueRepository {
    estoqueList: EstoquePaes[] = [];

    insereNoEstoque(estoque: EstoquePaes){
        this.estoqueList.push(estoque);
    }

    filtraTodosOsEstoques(): EstoquePaes[]{
        return this.estoqueList;
    }
}