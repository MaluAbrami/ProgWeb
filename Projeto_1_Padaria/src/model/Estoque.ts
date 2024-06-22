export class EstoquePaes{
    id:number;
    quantidade:number;
    price: number;

    constructor(quantidade:number, price:number){
        this.quantidade = quantidade;
        this.price = price;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}