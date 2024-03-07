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

    calcularIdadeCarro():number {
        return 2024 - this.ano; 
    }
  
  }
  
const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
const novoCarro = new Carro("Nissan", "Kicks", 2021, "Preto");
  
console.log(meuCarro, '\nO carro tem', meuCarro.calcularIdadeCarro(), 'anos');
console.log(novoCarro, '\nO carro tem', novoCarro.calcularIdadeCarro(), 'anos');  