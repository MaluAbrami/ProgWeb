class Carro {
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
  
    constructor(marca: string, modelo: string, ano: number, cor: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }

    get getMarca():string {
        return this.marca;
    }

    get getModelo():string {
        return this.modelo;
    }

    get getAno():number {
        return this.ano;
    }

    get getCor():string {
        return this.cor;
    }

    calcularIdadeCarro(anoAtual:number):number {
        return anoAtual - this.ano; 
    }
  
  }

const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
const novoCarro = new Carro("Nissan", "Kicks", 2021, "Preto");

console.log('\nExercício 1 - Carros');
console.log('\n', meuCarro, '\nO carro tem', meuCarro.calcularIdadeCarro(2024), 'anos');
console.log('\n', novoCarro, '\nO carro tem', novoCarro.calcularIdadeCarro(2024), 'anos'); 


class Calculadora {
    valor1: number;
    valor2: number;

    constructor(valor1: number, valor2: number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    soma():number{
        return this.valor1 + this.valor2;
    }

    subtracao():number{
        return this.valor1 - this.valor2;
    }

    multiplicacao():number{
        return this.valor1 * this.valor2;
    }

    divisao(){
        if(this.valor1 == 0 || this.valor2 == 0){
            return 'Erro: não é possível realizar divisão por zero';
        }
        else{
            return this.valor1 / this.valor2;
        }
    }

    porcentagem(){
        if(this.valor1 > 0){
            return (this.valor1 / 100) * this.valor2;
        }
        else{
            return 'Erro: Apenas valores positivos são permitidos';
        }
    }

    get getValor1(){
        return this.valor1;
    }

    get getValor2(){
        return this.valor2;
    }

    set setValor1(valor1:number){
        this.valor1 = valor1;
    }

    set setValor2(valor2:number){
        this.valor2 = valor2;
    }
}

const op = new Calculadora(0, 0);
op.setValor1 = 5;
op.setValor2 = 10;
console.log('\nExercício 2 - Calculadora: ');
console.log('\n',op,'Operação de soma = ', op.soma());
console.log(op,'Operação de subtração = ', op.subtracao());
console.log(op,'Operação de multiplicação = ', op.multiplicacao());
console.log(op,'Operação de divisão = ', op.divisao());
op.setValor1 = 0;
console.log(op, 'Operação de divisão com zero = ', op.divisao());
op.setValor1 = 10;
op.setValor2 = 100;
console.log(op, 'Operação de porcentagem = ', op.porcentagem());
op.setValor1 = -5;
op.setValor2 = 100;
console.log(op, 'Operação de porcentagem = ', op.porcentagem());


class Produto {
    nome: string;
    preco: number;
    quantidadeEmEstoque: number;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    calcularValorTotalEmEstoque(): number{
        return this.preco * this.quantidadeEmEstoque;
    }

    reporEstoque(quantidade:number):void{
        this.quantidadeEmEstoque += quantidade;
    }

    vender(quantidade:number){
        if(quantidade > this.quantidadeEmEstoque){
            return '\nErro: a quantidade em estoque era menor do que a quantidade a ser vendida'
        }
        else{
            this.quantidadeEmEstoque -= quantidade;
        }
    }

    get getQuantidadeProdutos(){
        return this.quantidadeEmEstoque;
    }

    get getNome(){
        return this.nome;
    }

    get getPreco(){
        return this.preco;
    }

    
    set setQuantidadeProdutos(quantidadeEmEstoque:number){
        this.quantidadeEmEstoque;
    }

    set setNome(nome:string){
        this.nome;
    }

    set getPreco(preco:number){
        this.preco;
    }
}

const sabao = new Produto('Sabão', 3, 100);
const shampoo = new Produto('Shampoo', 15, 70);
const condicionador = new Produto('Condicionador', 18, 50);


console.log('\nExercício 3 - Produtos');

console.log('\nProdutos em estoque: \n', sabao,'\n', shampoo,'\n', condicionador);
console.log('O valor total de produtos em estoque é ', sabao.calcularValorTotalEmEstoque() + shampoo.calcularValorTotalEmEstoque() + condicionador.calcularValorTotalEmEstoque());

console.log('\nRepondo estoque de sabão com 50 unidades', sabao.reporEstoque(50));
console.log('Repondo estoque de shampoo com 15 unidades', shampoo.reporEstoque(15));
console.log('Repondo estoque de condicionador com 20 unidades', condicionador.reporEstoque(20));
console.log('Produtos em estoque: \n', sabao,'\n', shampoo,'\n', condicionador);
console.log('O valor total de produtos em estoque é ', sabao.calcularValorTotalEmEstoque() + shampoo.calcularValorTotalEmEstoque() + condicionador.calcularValorTotalEmEstoque());

console.log('\nForam vendidos 30 sabões', sabao.vender(30));
console.log('Foram vendidos 5 shampoos', shampoo.vender(5));
console.log('Foram vendidos 10 condicionadores', condicionador.vender(10));
console.log('Produtos em estoque: \n', sabao,'\n', shampoo,'\n', condicionador);
console.log('O valor total de produtos em estoque é ', sabao.calcularValorTotalEmEstoque() + shampoo.calcularValorTotalEmEstoque() + condicionador.calcularValorTotalEmEstoque());

console.log('\nForam vendidos 150 sabões', sabao.vender(150));
console.log(sabao);