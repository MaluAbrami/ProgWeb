import { VendaPaes } from "../model/Vendas";
import { VendasRepository } from "../repository/VendasRepository";
import { ItemVendaService } from "./ItemVendaService";

export class VendasService{

    vendasRepository: VendasRepository = new VendasRepository();
    itemVendaService: ItemVendaService = new ItemVendaService();

    registrarVenda(vendaData: { cpf: number, itens: any[] }): VendaPaes{
        const {cpf, itens} = vendaData;
        if(!cpf || !itens || itens.length === 0){
            throw new Error("Informações incompletas.");
        }

        let valor: number = 0;
        for(let i=0; i<itens.length; i++){
            valor += this.itemVendaService.somarValor(itens[i]);
        }

        const novaVenda = new VendaPaes(cpf, itens, valor);
        this.vendasRepository.gravaVenda(novaVenda);
        return novaVenda;
    }

    recuperaVenda(id: any): VendaPaes| undefined{
        if(!id){
            throw new Error("Informações incompletas!");
        }
        const idNumber = parseInt(id, 10)
        return this.vendasRepository.filtraVendaPorId(idNumber);
    }
}