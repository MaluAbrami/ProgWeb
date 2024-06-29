import { ModalidadePaes } from "../model/Modalidades";
import { EstoquePaes } from "../model/Estoque";
import { VendaPaes } from "../model/Vendas";
import { ItemVenda } from "../model/ItemVenda";


export function modalidadePaes(): ModalidadePaes[]{
    const modalidadesList: ModalidadePaes[] = [];
    return modalidadesList;
}

export function estoquePaes(): EstoquePaes[]{
    const estoqueList: EstoquePaes[] = [];
    return estoqueList;
}

export function vendaPaes(): VendaPaes[]{
    const vendasList: VendaPaes[] = [];
    return vendasList;
}

export function itemVenda(): ItemVenda[]{
    const itemVendaList: ItemVenda[] = [];
    return itemVendaList;
}