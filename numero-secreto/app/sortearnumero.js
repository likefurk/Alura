const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

const elementomenorvalor = document.getElementById('menor-valor')
elementomenorvalor.innerHTML = menorValor

const elementomaiorvalor = document.getElementById('maior-valor')
elementomaiorvalor.innerHTML = maiorValor