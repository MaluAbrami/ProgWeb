import {Veiculo} from "./veiculo"
import {Carro} from "./carro"
import {Bicicleta} from "./bicicleta"

function testarVeiculo(veiculo: Veiculo): void {
    veiculo.acelerar();
    veiculo.parar();
}

const carro = new Carro();
const bicicleta = new Bicicleta();

testarVeiculo(carro);
testarVeiculo(bicicleta);