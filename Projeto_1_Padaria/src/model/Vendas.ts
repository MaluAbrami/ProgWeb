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