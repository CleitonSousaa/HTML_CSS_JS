function adicionarZeroAEsquerda(numero) {
    let numeroString = numero.toString();
    if (numeroString.length === 1) {
        numeroString = "0" + numeroString;
    }
    return numeroString;
}

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if (hora >= 0 && hora < 12){

        img.src = './img/manha.png'
        document.body.style.background = '#fff'
    }else if (hora >= 12 && hora < 18){
        img.src = './img/tarde.png'
        document.body.style.background = '#f52'
        document.body.style.color = '#fff'
    }else{
        img.src = './img/noite.png'
        document.body.style.background = '#000'
    }
    if(segundos <= 9){
        msg.innerHTML = `Agora são ${hora}:${minutos}:0${segundos} horas.`
        if(minutos <= 9){
            msg.innerHTML = `Agora são ${hora}:0${minutos}:0${segundos} horas.`
        }
    }else{
         msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas.`
    }
              
}

carregar();
setInterval(carregar, 1000);

