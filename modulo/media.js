/********************************************************************************************************************
 * Objetivo: Arquivo responsavel por calcular e validar medias escolares
 * Autor: Gustavo de Paula Silva
 * Data: 05/08/2025
 * Versão: 1.0
 ********************************************************************************************************************/

// função para calcular a media escolar
function calcularMedia(valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    
    return Number(media).toFixed(1)
}

//Função para retornar status da media escola (APROCADO, EXAME, REPROVADO)
function validarStatusDaMedia(ValorMedia){
    let media = Number(ValorMedia)
    let statusAluno

    if(media >= 7  && media <= 10){
        statusAluno ="APROVADO"
    }else if(media < 7 && media >= 5){
        statusAluno ="EXAME"
    }else if(media < 5 && media >= 0){
        statusAluno = "REPROVADO"
    }
    if(statusAluno != undefined){
        return statusAluno
    }else{
        return false
    }
    
}

//Permite tornar public uma função, variavel, constante, objeto
module.exports = {
    calcularMedia,
    validarStatusDaMedia,
}
// let mediaA = calcularMedia("8", "10", "9", "5.5")
// console.log(mediaA)
// console.log(validarStatusDaMedia(mediaA))