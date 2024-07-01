import { ItemVenda } from "../model/ItemVenda";
import { ItemVendaRepository } from "../repository/ItemVendaRepository";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class ItemVendaService{

    itemVendaRepository: ItemVendaRepository = new ItemVendaRepository();
    estoqueRepository: EstoqueRepository = new EstoqueRepository();

    cadastrarItensVendidos(itemVendaData: any[]): ItemVenda[]{
        const itensRegistrados: ItemVenda[] = [];

        itemVendaData.forEach(itemVendaData => { //Analisando item por item na lista
            const {estoquePaesId, quantidade} = itemVendaData;
            if(!estoquePaesId || !quantidade){
                throw new Error("Informações incompletas.");
            }

            const estoquePaesIdEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);
            if(estoquePaesIdEncontrado){

                const quantidadeNoEstoque = estoquePaesIdEncontrado.quantidade;

                if(quantidadeNoEstoque >= quantidade){ //Se houver quantidade suficiente, registra o item vendido e deleta quantidade no estoque
                    const novoRegistro = new ItemVenda(estoquePaesId, quantidade);
                    this.itemVendaRepository.gravaItensVendidos(novoRegistro);
                    itensRegistrados.push(novoRegistro);


                    estoquePaesIdEncontrado.quantidade = quantidadeNoEstoque - quantidade; //Atualiza a quantidade do item 
                    this.estoqueRepository.alterarEstoque(estoquePaesIdEncontrado); //Altera a quantidade do item no estoque de acordo com o que foi vendido
                }
                else{
                    throw new Error("Saldo insuficiente do item no estoque!");
                }
            }
            else{
                throw new Error("Item não cadastrado no estoque!");
            } 
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