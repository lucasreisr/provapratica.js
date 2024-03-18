// Função para verificar se um número é primo

function verificarPrimo (num ) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i+=6) {
        if (num % i === 0 || num % (i+2)=== 0 ) return false;
    } 

    returntrue;

}

// Exemplos de uso

console.log ("5 é primo?", verificarPrimo(5)); //Saída: true
console.log("10 é primo?", verificarPrimo(10)); //Saída: false
console.log("17 é primo?", verificarPrimo(17)); //Saída true
console.log("25 é primo?", verificarPrimo(25)); //Saída false