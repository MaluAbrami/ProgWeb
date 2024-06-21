export function reverterSentenca(sentenca: string, callback: (param: string) => void): void{
    const op = sentenca.split('').reverse().join('');
    const resultado = callback(op);
    console.log(resultado);
}

export function exibeFrase(frase: string): string{
    return `A INVERSÃO DA SENTENÇA RESULTOU EM: ${frase.toUpperCase()}`;
}