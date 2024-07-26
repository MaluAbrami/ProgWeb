export class Cliente{
    id: number;
    nome: string;
    cpf: string;
    data_nascimento: Date;

    constructor(id: number, nome: string, cpf: string, data_nascimento: Date){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
    }

    private geraNumeroConta(): any{
        return Date.now;
    }
}