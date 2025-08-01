/*************************************************
 * Objetivo: criar um sistema que realiza o calculo de médias escolares
 *          (variáveis, condicional, funções)
 * Autor: Gustavo de Paula Silva 
 * Data: 01/08/2025
 * Versão: 1.0
 *************************************************/

/**
 * Forma de criar uma variavel
 * var -> permite criar um espaço em memoria (Variavel), esse metodo é considerado antigo. 
 *        Obs: caso precise utilizar, aconselha-se usar fora de bloco de programação
 * let -> permite criar um espaço em memoria (Variavel) apenas dentro de um bloco de programação(IF, LOOP, funcition, etc)
 *        Existe apenas dentro daquele bloco - não usar em escopo global
 * CONST -> premite criar um espaço em memoria (constante) para guardar conteudos que não sofrerão mudança.
 *          sempre escrever em letras MAIUSCULAS 
 * 
 * Formas de conversão de tipos de dados
 * String() -> converte uma variavel em String
 * Number() -> Converte uma String para numero (int ou float)
 * parseInt() -> Converte uma String para Int
 * parseFloat() -> converte uma String para float
 * Boolea() -> Converte uma variavel em boleano (true/false)
 * object() -> Converte uma variavel em objeto (ARRAY, JSON, class) 
 * toUpperCase() -> Formata uma String em MAIUSCULO
 * toLowerCase() -> Formata uma String em minusculo
 * toFixed() -> permite limitar a quantidade de casa decimais em uma variavel numerica
 * 
 * Operadores de comparação
 * == -> Validação de igualdade de conteudo
 * != -> Validação de diferença de conteudo
 * < -> Validação de valor menor
 * > -> validação de valor maior 
 * <= -> Validação de valor menor ou igual
 * >= -> Validação de valor maior ou igual
 * === -> Validação de igualdade de conteudo e igualdade de tipos de dados 
 * !== -> validação de diferença de conteudo e igualdade de tipos de dados
 *        OBS: virificar em cada linguagem como isso é tratado
 * !=! -> validação de diferença de conteudo e diferença de tipos de dados
 *        OBS: virificar em cada linguagem como isso é tratado
 * 
 * Opreadores Logicos
 * E    AND     &&
 * OU   OR      ||
 * Não  NOT     !
*/

// Import da biblioteca do readline para manipular a entrada de dados no terminal
var readline = require('readline')

//Criando um objeto de entrada e saída de dados no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

//Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o argumento da função e guarda em uma variavel local, em MAIUSCULO
    let nomeAluno = String(nome).toUpperCase()
    
    //entrada de dados da nota1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1
  
        //entrada de dados da nota2
        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

            //entrada de dados da nota3
            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3

                //entrada de dados da nota4
                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                    let nota4 = valor4
            
                    if(nomeAluno == "" || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == ""){
                        console.log("ERRO: É obrigatório o preenchimento de todos as informações")
                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10){
                        console.log("ERRO: Dados invalidos")
                    }else if(isNaN(nota1)|| isNaN(nota2)|| isNaN(nota3)|| isNaN(nota4)){
                        console.log("ERRO: Não se pode colocar uma letra")
                    }else if(!isNaN(nomeAluno)){
                        console.log("ERRO: Não se pode colocar um numero")                       
                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                        let statusAluno

                        if(media >= 7  && media <= 10){
                            statusAluno ="APROVADO"
                        }else if(media < 7 && media >= 5){
                            statusAluno ="EXAME"
                        }else if(media < 5 && media >= 0){
                            statusAluno = "REPROVADO"
                        }
                        console.log(`O aluno(a) ${nome} teve média: ${media.toFixed(1)} e esta: ${statusAluno}`)
                    
                    }                    
                })
            })
        })
    })
})
