import { VendaPaes } from "../model/Vendas";
import { getVendasList } from "../global/global";

export class VendasRepository{

    vendasList: VendaPaes[] = getVendasList();

    gravaVenda(venda: VendaPaes){
        return this.vendasList.push(venda);
    }
}