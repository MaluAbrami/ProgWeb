export class Product{
    id:number;
    name:string;
    description:string;
    price:number
    IdCategoria:number;

    constructor(name:string, description:string, price:number, IdCategoria:number){
        this.name = name;
        this.description = description;
        this.price = price;
        this.IdCategoria = IdCategoria;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}