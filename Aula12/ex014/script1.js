function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var myvar = setInterval(myTimer, 1000);

    function myTimer() {
        var hora = new Date()
        var displaydate;

            displaydate = hora.toLocaleTimeString('pt-BR', { timeZone: 'America/Belem' })
    
        document.getElementById('msg').innerHTML = `Agora são exatamente: ${displaydate}`

        if (hora.getHours() >= 0 && hora.getHours() <= 12) {
            img.src = "manha.png"
            document.body.style.background = '#7e9cb7'
        }
        else if (hora.getHours() >= 12 && hora.getHours() <= 18) {
            img.src = "tarde.png"
            document.body.style.background = '#fde0b8'
        }
        else {
            img.src = "noite.png"
            document.body.style.background = '#14487f'
        }
    }
}