"use strict";
class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    get getMarca() {
        return this.marca;
    }
    get getModelo() {
        return this.modelo;
    }
    get getAno() {
        return this.ano;
    }
    get getCor() {
        return this.cor;
    }
    calcularIdadeCarro(anoAtual) {
        return anoAtual - this.ano;
    }
}
const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
const novoCarro = new Carro("Nissan", "Kicks", 2021, "Preto");
console.log(meuCarro, '\nO carro tem', meuCarro.calcularIdadeCarro(2024), 'anos');
console.log(novoCarro, '\nO carro tem', novoCarro.calcularIdadeCarro(2024), 'anos');
class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    soma() {
        return this.valor1 + this.valor2;
    }
    subtracao() {
        return this.valor1 - this.valor2;
    }
    multiplicacao() {
        return this.valor1 * this.valor2;
    }
    divisao() {
        if (this.valor1 == 0 || this.valor2 == 0) {
            console.log('Impossível realizar divisão por zero.');
            return;
        }
        else {
            return this.valor1 / this.valor2;
        }
    }
    porcentagem() {
        return (this.valor1 / 100) * (this.valor2 / 100);
    }
}
const primeiraOp = new Calculadora(5, 10);
const segundaOp = new Calculadora(5, 10);
const terceiraOp = new Calculadora(5, 10);
const quartaOp = new Calculadora(5, 10);
const quintaOp = new Calculadora(5, 10);
console.log(primeiraOp.soma(), segundaOp.subtracao(), terceiraOp.multiplicacao(), quartaOp.divisao(), quintaOp.porcentagem());
