function maiorNumero(...lista:number[]):number {
    let maior = 0;
    for(let i=0; i < lista.length; i++){
        if(maior < lista[i]){
            maior = lista[i];
        }
    }
    return maior;
}

console.log(maiorNumero(1, 5, 8, 10, 15, 103));

function parOuImpar(num:number):boolean {
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(parOuImpar(4));

function calcularMedia(...notas:number[]):number{
    let soma=0;
    for(let i=0; i<notas.length; i++){
        soma += notas[i];
    }
    return soma / notas.length;
}

console.log(calcularMedia(6, 7.4, 10, 4.2, 3));

function aumentarLetras(palavra:string):string {
    return palavra.toUpperCase();
}

console.log(aumentarLetras('malu'));

function numeroPrimo(numero:number):boolean { //Para ser um número primo ele precisar ser divísivel apenas por 1 e por ele próprio. Ex: 2, 3, 5, 7, etc...
    let aux = 0;
    for(let i=2; i<numero; i++){
        if(numero == 2){
            aux += 0;
        }
        else if(numero % i != 0){
            aux += 0;
        }
        else{
            aux += 1;
        }
    }

    if(aux > 0){
        return false;
    }
    else{
        return true;
    }
}

console.log(numeroPrimo(29));


