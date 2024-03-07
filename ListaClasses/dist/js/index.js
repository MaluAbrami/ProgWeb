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
    calcularIdadeCarro() {
        return 2024 - this.ano;
    }
}
const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
const novoCarro = new Carro("Nissan", "Kicks", 2021, "Preto");
console.log(meuCarro, '\nO carro tem', meuCarro.calcularIdadeCarro(), 'anos');
console.log(novoCarro, '\nO carro tem', novoCarro.calcularIdadeCarro(), 'anos');
