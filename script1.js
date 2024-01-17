// Configurações globais
let num = document.querySelector ('input#inum')
let lista = document.querySelector('select#itab')
let res = document.querySelector ('div#resultado')
let valores = [ ]

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else { 
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){

   if (isNumero(num.value) && !inLista(num.value, valores)){
        // Para adiconar valores -> mas ainda nao aparecem
        valores.push(Number(num.value))

        // Permitindo que os valores adiconados aparecam na area selecionada = select
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

   } else {
    window.alert ('[ERRO] Valor inválido ou já adicionado;')
   }
   // para independente de dar certo ou errado, apos escrever, apagar o numero do imput 1 e focar nele

num.value = ''
num.focus()
}


function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione algum valor antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){

            soma += valores[pos]

            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${total}</strong> números cadastrados! </p>` 
        res.innerHTML += `<p>O Maior valor informado foi <strong>${maior}</strong>;</p>`
        res.innerHTML += `<p>O Menor valor informado foi <strong>${menor}</strong>;</p>`
        res.innerHTML += `<p>Somando todos os valores temos como resultado: <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média entre todos os valores é: <strong>${media}</strong></p>`
    }
} 