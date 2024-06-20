export class ModalidadePaes{
    id:number;
    name:string;
    price:number;
    vegano: boolean;

    constructor(name:string, vegano:boolean, price:number){
        this.name = name;
        this.price = price;
        this.vegano = vegano;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}