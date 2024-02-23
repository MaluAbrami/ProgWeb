/*

Exercício:
Considere um sistema de cadastro de usuários onde precisamos armazenar informações sobre os usuários. 
Vamos criar variáveis e objetos para representar diferentes tipos de dados relacionados a um usuário.

1- Crie as seguintes variáveis primitivas:
    nomeCompleto: do tipo string, representando o nome completo de um usuário.
    idade: do tipo number, representando a idade do usuário.
    email: do tipo string, representando o endereço de e-mail do usuário.
    isAtivo: do tipo boolean, representando se o usuário está ativo ou não.

2 -Crie um objeto usuario com as seguintes propriedades:

    nome: string, representando o primeiro nome do usuário.
    sobrenome: string, representando o sobrenome do usuário.
    idade: number, representando a idade do usuário.
    contato: objeto com as seguintes propriedades:
    email: string, representando o endereço de e-mail do usuário.
    telefone: string, representando o número de telefone do usuário (opcional).
    Em seguida, imprima todas as variáveis e propriedades do objeto usuario usando console.log.

*/
let nomeCompleto: string;
let idade: number;
let email: string;
let isAtivo: boolean;

let usuario: {
    nome: string,
    sobrenome: string,
    idade: number,
    contato: {
        email: string,
        telefone: string,
    }
}

usuario = {
    nome: "Malu",
    sobrenome: "Abrami",
    idade: 19,
    contato: {
        email: "maria@gmail.com",
        telefone: "1312949184",
    }
}

// Declarar usa-se ":" e para atribuir valor usa-se "="

console.log(usuario);

function calculadora(numero1:number, numero2:number, operacao:string): number {
    let result: number=0;
    switch(operacao){
        case "soma": {
            result = numero1 + numero2;
            break;
        }
        case "subtracao": {
            result = numero1 - numero2;
            break;
        }
        case "multiplicacao": {
            result = numero1 / numero2;
            break;
        }
        case "divisao": {
            result = numero1 * numero2;
        }
    }
    return result;
}

console.log(calculadora(5, 3, "soma")); // Saída esperada: 8
console.log(calculadora(10, 2, "subtracao")); // Saída esperada: 8
console.log(calculadora(4, 5, "multiplicacao")); // Saída esperada: 20
console.log(calculadora(10, 2, "divisao")); // Saída esperada: 5

/*
type Contato = {
    email: string,
    telefone: string
};

type Pessoa = {
    nome: string,
    sobrenome: string,
    idade: number,
    contato: Contato //utilização de TIPAGEM
};
*/

/*

Exercício:
Vamos criar um sistema de gestão de produtos para uma loja online. 
Precisamos armazenar informações sobre diferentes produtos disponíveis na loja. Vamos criar variáveis e objetos para representar esses produtos.

01 - Crie as seguintes variáveis primitivas:

    nomeProduto: do tipo string, representando o nome de um produto.
    preco: do tipo number, representando o preço do produto.
    disponivel: do tipo boolean, representando se o produto está disponível em estoque ou não.


02 - Crie um objeto produto com as seguintes propriedades:

    nome: string, representando o nome do produto.
    preco: number, representando o preço do produto.
    estoque: number, representando a quantidade em estoque do produto.
    categorias: array de strings, representando as categorias às quais o produto pertence.
    Em seguida, imprima todas as variáveis e propriedades do objeto produto usando console.log.

*/

let produto: {
    nome: string,
    preco: number,
    estoque: number, 
    categorias: string[]
}

produto = {
    nome: "Geladeira",
    preco: 3006.43,
    estoque: 2, 
    categorias: ["Linha Branca"]
}