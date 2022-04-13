let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//Para limitar o input entre 0 e 99
function isNumb(n) {
    if(Number(n) >= 0 && Number(n) <=99) {
        return true
    } else {
        return false
    }
}

//Para analizar se o numero esta na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumb(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //adiciona numero na lista interna do navegador
        let item = document.createElement('option') //cria um item que vai aparecer no navegador
        item.text = `${num.value}` //classifica o item como um texto
        lista.appendChild(item) //display o item
        res.innerHTML = '' //limpar o resultado quando um novo valor for inserido
    }else {
        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = '' //limpa a barra de texto num
    num.focus() //volta o foco para o num
}

function finalizar(){
    if (valores.length == 0) {   //para pedir valores caso nenhum tenha sido inserido
        window.alert(`Nenhum valor encontrado, por favor adicionar numeros a lista`)
    } else {
        let total = valores.length //atribui quantos itens ha na lista pelo comprimento
        let maior = valores [0]  //encontrar o maior e menor valor na lista
        let menor = valores [0]  //atribui o primeiro numero como menor e maior, e checa se os proximos sao maiores ou menores   
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos] //adiciona o valor do pos anterior ao proximo
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]    
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>A lista possui ${total} numeros.</p>`
        res.innerHTML += `<p>O maior valor na lista e ${maior}</p>`
        res.innerHTML += `<p>O menor valor na lista e ${menor}</p>`
        res.innerHTML += `<p>A soma total dos valores e ${soma}</p>`
        res.innerHTML += `<p>A media dos valores e de ${media}</p>`
    }
}