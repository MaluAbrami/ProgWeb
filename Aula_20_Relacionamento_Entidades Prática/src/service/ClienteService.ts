import { ClienteRepository } from "../repository/ClienteRepository";
import { Cliente } from "../model/Cliente";
import { ContaRepository } from "../repository/ContaRepository";
import { Conta } from "../model/Conta";

export class ClienteService{

    clienteRepository = new ClienteRepository();
    contaRepository = new ContaRepository();
}