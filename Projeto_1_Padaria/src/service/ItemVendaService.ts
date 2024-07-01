import { ItemVenda } from "../model/ItemVenda";
import { ItemVendaRepository } from "../repository/ItemVendaRepository";
import { EstoqueRepository } from "../repository/EstoqueRepository";

export class ItemVendaService{

    itemVendaRepository: ItemVendaRepository = new ItemVendaRepository();
    estoqueRepository: EstoqueRepository = new EstoqueRepository();
/*
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
*/

    cadastrarItensVendidos(itemVendaData: any[]): ItemVenda[]{
        const itensRegistrados: ItemVenda[] = [];
        let aux: boolean = false;
        
        itemVendaData.forEach(itemVendaData =>{ //Aqui garantimos primeiro que todos os itens da lista de venda tem quantidade suficiente disponível no estoque
            const {estoquePaesId, quantidade} = itemVendaData;
            if(!estoquePaesId || !quantidade || quantidade <= 0){
                throw new Error("Informações incompletas");
            }
            const itemVendaEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);

            if(itemVendaEncontrado){ //Se o item existir no estoque, verificamos se há quantidade suficiente disponível no estoque
                const quantidadeNoEstoque = itemVendaEncontrado.quantidade;
                if(quantidadeNoEstoque >= quantidade){ //aux será true se todos os itens na lista tiverem saldo disponivel no estoque
                    aux = true;
                }
                else{
                    throw new Error("Não há saldo disponível suficiente no estoque!");
                }
            }
            else{
                throw new Error("Item não está cadastrado no estoque!");
            }
        })

        if(aux){ //Depois de garantir que há quantidade disponível para todos os itens da lista de venda, registramos os itens vendidos da lista
            itemVendaData.forEach(itemVendaData =>{
                const {estoquePaesId, quantidade} = itemVendaData;
                const estoquePaesIdEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);
                if(estoquePaesIdEncontrado){
                    estoquePaesIdEncontrado.quantidade -= quantidade;
                }

                const novoRegistro = new ItemVenda(estoquePaesId, quantidade);
                this.itemVendaRepository.gravaItensVendidos(novoRegistro);
                itensRegistrados.push(novoRegistro);
            })
        }
        else{
            throw new Error("Não há saldo disponível suficiente no estoque!");
        }

        return itensRegistrados;
    }

    somarValor(itemVendaData: any): number{
        const {estoquePaesId, quantidade} = itemVendaData;

        const itemEncontrado = this.estoqueRepository.filtraEstoquePorId(estoquePaesId);
    
        if(!itemEncontrado){
            throw new Error("Item não existe no estoque, portanto não possui preço cadastrado!");
        }
        const itemVendaValor = itemEncontrado.price * quantidade;
        return itemVendaValor;
    }
}