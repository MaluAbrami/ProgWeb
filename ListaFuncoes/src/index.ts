/* ARRUMAR A PARTE DO TAMANHO DO ARRAY
function maiorNumero(...lista:number[]):number {
    let maior = 0;
    for(let i=0; i <= lista[...]; i++){
        if(maior < lista[i]){
            maior = lista[i];
        }
    }
    return maior;
}
*/
function parOuImpar(num:number):boolean {
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(parOuImpar(4));