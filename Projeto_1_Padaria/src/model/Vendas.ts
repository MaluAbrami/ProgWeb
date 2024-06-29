import { ItemVenda } from "./ItemVenda";

export class VendaPaes{
    cpf:number;
    id:number;
    itens:ItemVenda[];
    valor:number;

    constructor(cpf:number, itens:ItemVenda[], valor: number){
        this.cpf = cpf;
        this.itens = itens;
        this.valor = valor;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}