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
            return;
        }
        else{
            return this.valor1 / this.valor2;
        }
    }

    porcentagem(){ //PRECISO CORRIGIR ISSO
        if(this.valor1 > 0){
            return (this.valor1 / 100) * this.valor2;
        }
        else{
            return;
        }
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
console.log('\nOperação de soma 5 + 10 = ', primeiraOp.soma());
console.log('Operação de subtração 5 - 10 = ', segundaOp.subtracao());
console.log('Operação de multiplicação 5 * 10 = ', terceiraOp.multiplicacao());
console.log('Operação de divisão 5 / 10 = ', quartaOp.divisao());
console.log('Operação de divisão com zero 0 / 10 = ', quartaOpAlternativo.divisao());
console.log('Operação de porcentagem, 10% de 100 = ', quintaOp.porcentagem());
console.log('Operação de porcentagem, -5% de 100 = ', quintaOpAlternativo.porcentagem());


