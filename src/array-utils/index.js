const prompt = require("prompt-sync")()

//1
function descontoSalario(){
    let salario = Number(prompt("Digite seu salário: "))
    let desconto = salario * 0.1
    let diferença = desconto - salario
    let resto = diferença * 0.05
    let liquido = resto - diferença
    return ("Seu salário liquido: " + liquido.toFixed(2))
}

//2
function automovel(){
    let tempo = Number(prompt("Duração da viagem: "))
    let velocidade = Number(prompt("Velocidade média durante a viagem: "))
    let distancia = tempo * velocidade
    let litros_usados = distancia / 12
    return (`Velocidade Média: ${velocidade}Km/h /Tempo gasto: ${tempo}h /Distancia percorrida: ${distancia}Km /Quantidade de combustível utilizado: ${litros_usados}L`)
}

//3
function matricula(){
    
}

module.exports = {
    descontoSalario,automovel,matricula
}