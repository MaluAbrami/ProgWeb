export class EstoquePaes{
    id:number;
    modalidadeId:number;
    quantidade:number;
    price: number;

    constructor(modalidadeId:number, quantidade:number, price:number){
        this.modalidadeId = modalidadeId;
        this.quantidade = quantidade;
        this.price = price;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}