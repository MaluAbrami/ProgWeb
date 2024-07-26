import { executarComandoSQL } from "../database/mysql";
import { Cliente } from "../model/Cliente";

export class ContaRepository{

    constructor(){
        this.createTable();
    }

    private async createTable(){
        const query = `
        CREATE TABLE IF NOT EXISTS banco.cliente (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            cpf VARCHAR(14) NOT NULL,
            data_nascimento DATE NOT NULL
        )`

        try {
            const resultadp = await executarComandoSQL(query, []);
        } catch(err){
            console.error('Error');
        }
    }

    async insereCliente(cliente: Cliente): Promise<Cliente>{
        const query = "INSERT INTO banco.cliente (nome, cpf, data_nascimento) VALUES (?, ?, ?)";
        try{
            const resultado = await executarComandoSQL(query, [cliente.nome, cliente.cpf, cliente.data_nascimento]);
            console.log('Cliente criado com sucesso', resultado.insertId);
            cliente.id = resultado.insertId;
            return cliente;
        } catch(err){
            console.error('Erro ao criar um novo cliente', err);
            throw err;
        }
    }

    updateCliente(cliente: Cliente){
        const query = 'UPDATE banco.cliente SET nome = ?, cpf = ?, data_nascimento = ? WHERE ID = ?';
        executarComandoSQL(query, [cliente.nome, cliente.cpf, cliente.data_nascimento])
            .then(function (resultado){
                return resultado
            }).catch(function (erro) {
                return erro
            });
    }

    async getClientePorId(id?: number): Promise<Cliente>{
        const query = "SELECT *FROM banco.cliente WHERE ID = ?";
        try{
            const resultado: Cliente = await executarComandoSQL(query, []);
            console.log('Busca efetuada com sucesso:', resultado);
            return resultado;
        } catch(err){
            console.error('Erro ao buscar conta', err);
            throw err;
        }
    }
}