export class ItemVenda{
    estoquePaesId: number;
    quantidade: number;
    name: string;

    constructor(estoquePaesId: number, quantidade: number, name: string){
        this.estoquePaesId = estoquePaesId;
        this.quantidade = quantidade;
        this.name = name;
    }
}