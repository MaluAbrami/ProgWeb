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

