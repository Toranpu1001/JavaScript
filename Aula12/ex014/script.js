function carregar() {
    var msg = document.querySelector("div#msg");
    var img = document.getElementById('imagem');
    var myvar = setInterval(myTimer, 1000);// Configura um temporizador para chamar a função myTimer a cada 1 segundo


    function myTimer() {
        var hora = new Date();// Cria um novo objeto Date para obter a hora atual
        var displaydate;     // Variável para armazenar a hora formatada


        displaydate = hora.toLocaleTimeString('pt-BR', { timeZone: 'America/Belem' });// Formata a hora atual para o fuso horário de Belém, Brasil


        document.getElementById("msg").innerHTML = `Agora são exatamente ${displaydate}`;// Atualiza o conteúdo da div com o ID "msg" com a hora formatada


        // Verifica o período do dia com base na hora atual e atualiza a imagem e o fundo correspondentes
        if (hora.getHours() >= 0 && hora.getHours() < 12) {
            img.src = "manha.png"
            document.body.style.background = '#7e9cb7'
        } else if (hora.getHours() >= 12 && hora.getHours() < 18) {
            img.src = "tarde.png"
            document.body.style.background = '#fde0b8'
        } else {
            img.src = "noite.png"
            document.body.style.background = '#14487f'
        }
    }
}
