// Desafio:
/*
 Escrever um programa que recebe dois números
 e um operador matemático e com isso executa o 
 cálculo corretamente.
*/
// Calculadora
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const validaNumInformado = (numero) => {
        const resultado = Number.parseFloat(numero);    // função que diminui o código.
        if(!resultado) { // se o numero não for do tipo number parsefloat:
            console.log('Número informado é inválido');
        } // se for, retorne o resultado:
            return resultado;
}

const validaOperador = (operador) => {
    switch(operador) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
            break;
        default:
            console.log('Operador informado é inválido!');
            return null; // tem que retornar algo inválido para os códigos que chamarão validaOperador
    }
}

readLine.question('Nos informe um número: ', (numero1) => {
    const numeroValidado1 = validaNumInformado(numero1);
    if(numeroValidado1) {
        readLine.question('Nos informe outro número: ', (numero2) => {
            const numeroValidado2 = validaNumInformado(numero2);
            if(numeroValidado2) {
                readLine.question('Nos informe o operador: ', (operador) => {
                    const operadorValidado = validaOperador(operador);
                    if(operadorValidado) {
                        switch(operadorValidado) {
                            case '+': console.log(numeroValidado1 + numeroValidado2); 
                            break;
                            case '-': console.log(numeroValidado1 - numeroValidado2); 
                            break;
                            case '*': console.log(numeroValidado1 * numeroValidado2); 
                            break;
                            case '/': console.log(numeroValidado1 / numeroValidado2); 
                            break;
                            case '%': console.log(numeroValidado1 % numeroValidado22); 
                            break;
                            default: break;
                        }
                    }
                })
            }
        })
    }
})

// 0:55
