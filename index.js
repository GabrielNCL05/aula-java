
let pedo = 60
let altura = 1.72
let imc = calcularIMC(peso,altura)
let classificação = classificarIMC(imc)
function calcularIMC(peso,altura){return peso/(altura*altura)}
console.log(imc)
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 24.9 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 29.9 && imc < 34.9) {
        return "Obesidade Grau I";
    } else if (imc >= 34.9 && imc < 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}
console.log(`O seu imc é ${imc} e a sua classificação é ${classificar}`)

// soma
let primeiroNumero = 1
let segundoNumero = 2
function somar(num1, num2) {
    return num1 + num2
}
let resultado = somar(primeiroNumero, segundoNumero)

console.log(`A soma de %{primeiroNumero} + %{segundoNumero} é %{resultado}`)
// multiplicação
let primeiroNumero1 = 1
let segundoNumero2 = 2
let resultadoMult = multiplicar (primeiroNumero1, segundoNumero2)
function muliplicar(num1, num2) {
    return num1 * num2
}

console.log(`A multiplicação de %{primeiroNumero1} X %{segundoNumero2} é %{resultadoMult}`)

// subtração
let primeiroNumero3 = 5
let segundoNumero4 = 3
let resultadoSub = subtrair (primeiroNumero3, segundoNumero4)
function subtrair(num1, num2) {
    return num1 - num2
}

console.log(`A subtração de %{primeiroNumero3} - %{segundoNumero4} é %{resultadoSuv}`)

// divisão
let primeiroNumero5 = 7
let segundoNumero6 = 0
let resultadoDiv = dividir (primeiroNumero5, segundoNumero6)
if (segundoNumero6 == 0) {
    return " a divisão não existe"
}
function dividir(num1, num2) {
    return num1 / num2
}

console.log(`A divisão de %{primeiroNumero5} / %{segundoNumero6} é %{resultadoDiv}`)

// potenciação
let primeiroNumero7 = 8
let segundoNumero8 = 9
let resultadoPot = potencia (primeiroNumero7, segundoNumero8)
if (primeiroNumero7 = 0) {
    return "O resultado da potenciação é 1"
}
else if (segundoNumero8 = 0) {
    return "O resultado da potenciação é 1"
}
function potencia(num1, num2) {
    return num1 ** num2
}

console.log(`A potenciação de %{primeiroNumero7} elevado a %{segundoNumero8} é %{resultadoPot}`)

// soma arrow functions
const somar = (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero

// multiplicação arrow functions
const multiplicar = (primeiroNumero1, segundoNumero2) => primeiroNumero1 * segundoNumero2

// subtrair arrow functions
const subtrair = (primeiroNumero3, segundoNumero4) => primeiroNumero3 - segundoNumero4

// dividir arrow functions
const dividir = (primeiroNumero5, segundoNumero6) => primeiroNumero5 / segundoNumero6

// potenciação arrow functions
const potencia = (primeiroNumero7, segundoNumero8) => primeiroNumero7 ** segundoNumero8