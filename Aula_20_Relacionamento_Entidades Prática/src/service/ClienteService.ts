import { ClienteRepository } from "../repository/ClienteRepository";
import { Cliente } from "../model/Cliente";
import { ContaRepository } from "../repository/ContaRepository";
import { Conta } from "../model/Conta";

export class ClienteService{

    clienteRepository = new ClienteRepository();
    contaRepository = new ContaRepository();

    async criaCliente(clienteData: any): Promise<Cliente>{
        const {nome, cpf, data_nascimento} = clienteData;

        if( !nome || !cpf || !data_nascimento){
            throw new Error("Informações incompletas");
        }

        const resultado: Cliente[] = await this.clienteRepository.getClientePorCpf(cpf);

        if(resultado.length > 0){
            throw new Error("Cpf já cadastrado");
        }

        return this.clienteRepository.insereCliente(new Cliente(0,nome, cpf, data_nascimento));
    }
}