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