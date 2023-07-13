function verificar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let pass = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = `Impossível contar!`
    }
    else {
        res.innerHTML = `Contando:<br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0) {
            alert(`Passo inválido! Considerando o valor de Passo: 1`)
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1} `
            }
        }
        else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1} `
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }

}
