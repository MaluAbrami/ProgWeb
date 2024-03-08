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
console.log('\nExercício 1 - Carros');
console.log('\n', meuCarro, '\nO carro tem', meuCarro.calcularIdadeCarro(2024), 'anos');
console.log('\n', novoCarro, '\nO carro tem', novoCarro.calcularIdadeCarro(2024), 'anos');
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
            return;
        }
        else {
            return this.valor1 / this.valor2;
        }
    }
    porcentagem() {
        if (this.valor1 > 0) {
            return (this.valor1 / 100) * this.valor2;
        }
        else {
            return 'Erro: Apenas valores positivos são permitidos';
        }
    }
    get getValor1() {
        return this.valor1;
    }
    get getValor2() {
        return this.valor2;
    }
}
const primeiraOp = new Calculadora(5, 10);
const segundaOp = new Calculadora(5, 10);
const terceiraOp = new Calculadora(5, 10);
const quartaOp = new Calculadora(5, 10);
const quartaOpAlternativo = new Calculadora(0, 10);
const quintaOp = new Calculadora(10, 100);
const quintaOpAlternativo = new Calculadora(-5, 100);
console.log('\nExercício 2 - Calculadora: ');
console.log('\n', primeiraOp, 'Operação de soma = ', primeiraOp.soma());
console.log(segundaOp, 'Operação de subtração = ', segundaOp.subtracao());
console.log(terceiraOp, 'Operação de multiplicação = ', terceiraOp.multiplicacao());
console.log(quartaOp, 'Operação de divisão = ', quartaOp.divisao());
console.log(quartaOpAlternativo, 'Operação de divisão com zero = ', quartaOpAlternativo.divisao());
console.log(quintaOp, 'Operação de porcentagem = ', quintaOp.porcentagem());
console.log(quintaOpAlternativo, 'Operação de porcentagem = ', quintaOpAlternativo.porcentagem());
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    calcularValorTotalEmEstoque() {
        return this.preco * this.quantidadeEmEstoque;
    }
    reporEstoque(quantidade) {
        this.quantidadeEmEstoque += quantidade;
    }
    vender(quantidade) {
        if (quantidade > this.quantidadeEmEstoque) {
            return '\nErro: a quantidade em estoque era menor do que a quantidade a ser vendida';
        }
        else {
            this.quantidadeEmEstoque -= quantidade;
        }
    }
    get getQuantidadeProdutos() {
        return this.quantidadeEmEstoque;
    }
}
const sabao = new Produto('Sabão', 3, 100);
const shampoo = new Produto('Shampoo', 15, 70);
const condicionador = new Produto('Condicionador', 18, 50);
console.log('\nExercício 3 - Produtos');
console.log('\nProdutos em estoque: \n', sabao, '\n', shampoo, '\n', condicionador);
console.log('O valor total de produtos em estoque é ', sabao.calcularValorTotalEmEstoque() + shampoo.calcularValorTotalEmEstoque() + condicionador.calcularValorTotalEmEstoque());
console.log('\nRepondo estoque de sabão com 50 unidades', sabao.reporEstoque(50));
console.log('Repondo estoque de shampoo com 15 unidades', shampoo.reporEstoque(15));
console.log('Repondo estoque de condicionador com 20 unidades', condicionador.reporEstoque(20));
console.log('Produtos em estoque: \n', sabao, '\n', shampoo, '\n', condicionador);
console.log('O valor total de produtos em estoque é ', sabao.calcularValorTotalEmEstoque() + shampoo.calcularValorTotalEmEstoque() + condicionador.calcularValorTotalEmEstoque());
console.log('\nForam vendidos 30 sabões', sabao.vender(30));
console.log('Foram vendidos 5 shampoos', shampoo.vender(5));
console.log('Foram vendidos 10 condicionadores', condicionador.vender(10));
console.log('Produtos em estoque: \n', sabao, '\n', shampoo, '\n', condicionador);
console.log('O valor total de produtos em estoque é ', sabao.calcularValorTotalEmEstoque() + shampoo.calcularValorTotalEmEstoque() + condicionador.calcularValorTotalEmEstoque());
console.log('\nForam vendidos 150 sabões', sabao.vender(150));
console.log(sabao);
