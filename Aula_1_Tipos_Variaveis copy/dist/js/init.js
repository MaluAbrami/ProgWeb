"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
const bicicleta_1 = require("./bicicleta");
function testarVeiculo(veiculo) {
    veiculo.acelerar();
    veiculo.parar();
}
const carro = new carro_1.Carro();
const bicicleta = new bicicleta_1.Bicicleta();
testarVeiculo(carro);
testarVeiculo(bicicleta);
