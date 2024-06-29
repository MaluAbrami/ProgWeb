import { ItemVenda } from "../model/ItemVenda";
import { itemVenda } from "../global/global";

export class ItemVendaRepository {
    itemVendaList: ItemVenda[] = itemVenda();
}