export class ModalidadePaes{
    id:number;
    name:string;
    vegano: boolean;

    constructor(name:string, vegano:boolean){
        this.name = name;
        this.vegano = vegano;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}