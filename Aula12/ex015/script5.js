function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || isNaN(fano.value) || Number(fano.value) > ano) {
        alert(`[ERRO] Verifique os dados e tente nocvamente!`)
        location.reload()
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gen = [`uma criança`, `um menino adoslecente`, `um homem adulto`, `um homem idoso`, 'uma criança', `uma adoslecente`, `uma mulher adulta`, `uma mulher idosa`]
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            document.body.style.background = "#2a9df4"
            var body = document.querySelector('body');
            body.classList.remove('transition-background');
            body.classList.remove('no-transition');
            body.classList.add('transition-background-masculino');
            if (idade < 10) {
                gen = gen[0]; img.setAttribute('src', 'kid.png')
            } else if (idade < 21) {
                gen = gen[1]; img.setAttribute('src', 'boy.png')
            } else if (idade < 50) {
                gen = gen[2]; img.setAttribute('src', 'men.png')
            } else {
                gen = gen[3]; img.setAttribute('src', 'oldman.png')
                var body = document.querySelector('body');
                body.classList.remove('transition-background');
            }
        } else if (fsex[1].checked) {
            document.body.style.background = "#ff007f"
            var body = document.querySelector('body');
            body.classList.remove('transition-background');
            body.classList.remove('no-transition');
            body.classList.add('transition-background-masculino');
            if (idade >= 0 && idade < 10) {
                gen = gen[4]; img.setAttribute('src', 'kidgirl.png')
            } else if (idade < 21) {
                gen = gen[5]; img.setAttribute('src', 'girl.png')
            } else if (idade < 50) {
                gen = gen[6]; img.setAttribute('src', 'women.png')
            } else {
                gen = gen[7]; img.setAttribute('src', 'oldwomen.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
        img.style.padding = "20px"
        if (fsex[2].checked) {
            var body = document.querySelector('body');
            body.classList.remove('transition-background-masculino');
            body.classList.remove('transition-background-feminino');
            body.classList.add('transition-background');
            res.style.textAlign = `center`
            res.innerHTML = '<strong>... pera, tu é man???</strong>'
            img.setAttribute('src', 'man.png')
            res.innerHTML += '<br>';
            res.appendChild(img)
        }
    }

}
