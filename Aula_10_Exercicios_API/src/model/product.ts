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

    somarProdutos():number{
        let soma: number = 0;
        for(let i=0; i<Product.length; i++){
            soma ++;
        }
        return soma;
    }

    public somaPrice(): number{
        let soma: number = 0;
        for(let i=0; i<Product.length; i++){
            soma += this.price;
        }
        return soma;
    }
}