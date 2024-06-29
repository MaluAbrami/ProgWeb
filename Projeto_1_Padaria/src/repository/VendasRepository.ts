import { VendaPaes } from "../model/Vendas";
import { vendaPaes } from "../global/global";

export class VendasRepository{
    vendasList: VendaPaes[] = vendaPaes();
}