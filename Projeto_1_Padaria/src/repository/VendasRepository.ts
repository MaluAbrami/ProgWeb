import { VendaPaes } from "../model/Vendas";
import { vendaPaes } from "../global/global";

export class VendasRepository{

    vendasList: VendaPaes[] = vendaPaes();

    gravaVenda(venda: VendaPaes){
        return this.vendasList.push(venda);
    }
}