import { ItemVenda } from "../model/ItemVenda";
import { estoquePaes, itemVenda } from "../global/global";

export class ItemVendaRepository {

    itemVendaList: ItemVenda[] = itemVenda();

    gravaItensVendidos(itemVenda: ItemVenda){
        return this.itemVendaList.push(itemVenda);
    }
}