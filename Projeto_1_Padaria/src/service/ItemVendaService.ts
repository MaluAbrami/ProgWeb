import { ItemVenda } from "../model/ItemVenda";
import { ItemVendaRepository } from "../repository/ItemVendaRepository";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class ItemVendaService{

    itemVendaRepository: ItemVendaRepository = new ItemVendaRepository();
    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    cadastrarItensVendidos(itemVendaData: any[]): ItemVenda[]{
        const itensRegistrados: ItemVenda[] = [];

        itemVendaData.forEach(itemVendaData => {
            const {estoquePaesId, quantidade} = itemVendaData;
            if(!estoquePaesId || !quantidade){
                throw new Error("Informações incompletas.");
            }

            const novoRegistro = new ItemVenda(estoquePaesId, quantidade);
            this.itemVendaRepository.gravaItensVendidos(novoRegistro);
            itensRegistrados.push(novoRegistro);
        })
        return itensRegistrados;
    }

    somarValor(itemVendaData: any): number{
        const {estoquePaesId, quantidade} = itemVendaData;

        console.log(estoquePaesId);
        console.log(quantidade);

        console.log(this.estoqueRepository.estoqueList);

        const itemEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);
    
        if(!itemEncontrado){
            throw new Error("Item não existe no estoque, portanto não possui preço cadastrado!");
        }
        console.log(itemEncontrado);
        const itemVendaValor = itemEncontrado.price * quantidade;
        return itemVendaValor;
    }
}