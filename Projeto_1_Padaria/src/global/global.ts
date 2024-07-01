import { ModalidadePaes } from "../model/Modalidades";
import { EstoquePaes } from "../model/Estoque";
import { VendaPaes } from "../model/Vendas";
import { ItemVenda } from "../model/ItemVenda";

const modalidadesList: ModalidadePaes[] = [];
const estoqueList: EstoquePaes[] = [];
const vendasList: VendaPaes[] = [];
const itemVendaList: ItemVenda[] = [];

export function getModalidadesList(): ModalidadePaes[]{
    return modalidadesList;
}

export function getEstoqueList(): EstoquePaes[]{
    return estoqueList;
}

export function getVendasList(): VendaPaes[]{
    return vendasList;
}

export function getItemVendaList(): ItemVenda[]{
    return itemVendaList;
}