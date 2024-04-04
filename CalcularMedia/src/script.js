
const mensagemInicial ="A nota final do aluno "
let nomeAluno = prompt("Digite o nome do aluno:")
// uso o  parseFloat() para converter as entradas de texto dos prompt para números decimais. 
//Assim, quando calcularmos a média, estaremos realmente somando os números corretamente. Pois o prompt retorna apenas string
let nota1 = parseFloat(prompt("Digite a nota da primeira prova:"));
let nota2 = parseFloat(prompt("Digite a nota da segunda prova:"));

function calcularMedia (nota1,nota2){

    // Calcula a média das duas notas
    let media = (nota1 + nota2) / 2

    // Retorna o valor da média
    return media;
}

let notaFinal = calcularMedia(nota1,nota2)
console.log(mensagemInicial + nomeAluno + " é "+ notaFinal)
