import { executarComandoSQL } from "../database/mysql";
import { Cliente } from "../model/Cliente";

export class ClienteRepository{

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

    async getClientePorId(id: number): Promise<Cliente>{
        const query = "SELECT * FROM banco.cliente WHERE ID = ?";
        try{
            const resultado: Cliente = await executarComandoSQL(query, [id]);
            console.log('Busca efetuada com sucesso:', resultado);
            return resultado;
        } catch(err){
            console.error('Erro ao buscar conta', err);
            throw err;
        }
    }

    async getClientePorCpf(cpf: string): Promise<Cliente[]>{
        const query = "SELECT * FROM banco.cliente WHERE CPF = ?";
        try{
            const resultado: Cliente[] = await executarComandoSQL(query, [cpf]);
            console.log('Busca efetuada com sucesso:', resultado);
            return resultado;
        } catch(err){
            console.error('Erro ao buscar conta', err);
            throw err;
        }
    }

    async listaCliente(): Promise<Cliente[]> {
        try{
            const query = "SELECT * FROM banco.cliente";
            const resultado: Cliente[] = await executarComandoSQL(query, []);
            return resultado;
        } catch(err){
            console.error('Erro ao listar as contas:', err);
            throw err;
        }
    }

    async deletaCliente(cliente: Cliente): Promise<any>{
        try{
            const query = "DELETE FROM banco.cliente WHERE id = ? AND nome = ? AND cpf = ? AND data_nascimento = ?";
            const resultado = await executarComandoSQL(query, [cliente.id, cliente.nome, cliente.cpf, cliente.data_nascimento]);
            console.log('Cliente deletado com sucesso:', resultado);
            return resultado;
        } catch(err){
            console.error('Erro ao deletar cliente:', err);
            throw err;
        }
    }
}