let num = document.querySelector(`input#fnum`)
let list = document.querySelector(`select#flist`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert(`Valor inválido meu chapa:/ ou já ta na lista, ta cego?`)
    }
    num.value = ``
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert(`Digita alguma coisa zé >:/`)
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados;</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior};</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor};</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma};`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.`
    }
    
} num.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        finalizar()
    }
});
num.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 32) {
        adicionar()
    }
});