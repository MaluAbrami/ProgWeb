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

export class EstoquePaes{
    id:number;
    quantidade:number;

    constructor(quantidade:number){
        this.quantidade = quantidade;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}

export class VendaPaes{
    cpf:number;
    id:number;
    quantidade:number;
    valor:number;

    constructor(cpf:number, quantidade:number, valor:number){
        this.cpf = cpf;
        this.quantidade = quantidade;
        this.valor = valor;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}