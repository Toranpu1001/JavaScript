function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || isNaN(fano.value) || Number(fano.value) > ano){
        alert("[ERRO] Verifique os dados e tente novamente.")
        location.reload
    }
    else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var gen = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)

    if (fsex[0].checked){
        gen = ``
        if (idade >= 0 && idade < 10) {
            gen = `uma criança com ${idade} anos.`
            img.setAttribute(`src`, `kid.png`)
            document.body.style.background = "#2a9df4"
        } else if (idade < 21) {
            gen = `um adolescente com ${idade} anos.`
            img.setAttribute(`src`, `boy.png`)
            document.body.style.background = "#2a9df4"
        } else if (idade < 50) {
            gen = `um homem adult com ${idade} anos.`
            img.setAttribute(`src`, `men.png`)
            document.body.style.background = "#2a9df4"
        } else {
            gen = `um homem idoso com ${idade} anos.`
            img.setAttribute(`src`, `oldman.png`)
        }
    } else if (fsex[1].checked) {
        gen = ``
        if (idade >= 0 && idade < 10) {
            gen = `uma criança com ${idade} anos.`
            img.setAttribute(`src`, `kidgirl.png`)
            document.body.style.background = "#ff007f"
        }else if (idade < 21){
            gen = `uma adolescente com ${idade} anos.png`
            img.setAttribute(`src`, `girl.png`)
            document.body.style.background = "#ff007f"
        }else if(idade < 50){
            gen = `uma mulher adulta com ${idade} anos.`
            img.setAttribute(`src`, `women.png`)
            document.body.style.background = "#ff007f"
        }else{
            gen = `uma mulher idosa com ${idade} anos.`
            img.setAttribute(`src`, `oldwomen.png`)
            document.body.style.background = "#ff007f"
        }
    }else if (fsex[2].checked){
        gen = `<strong>... pera, tu é man???</strong>`
        img.setAttribute(`src`, `man.png`)
    }
        res.style.textAlign = `center`
        res.innerHTML = `detectamos ${gen}`
        res.appendChild(img)
        img.style.padding = `20px`

    }
}