import { ItemVenda } from "../model/ItemVenda";
import { getItemVendaList } from "../global/global";

export class ItemVendaRepository {

    itemVendaList: ItemVenda[] = getItemVendaList();

    gravaItensVendidos(itemVenda: ItemVenda){
        return this.itemVendaList.push(itemVenda);
    }
}