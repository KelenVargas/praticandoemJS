function carregar(){
var msg= document.getElementById('msg')
var img = document.getElementById('imgManha')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>=0 && hora <12){
        img.src=`dia.png.png`
        document.body.style.background = '#E2CD9F'
    }else if ( hora >=12 && hora <18){
        img.src=`tarde.png.png`
        document.body.style.background ='#B9846F'
    } else{
        img.src=`noite.png.png`
        document.body.style.background ='#515154'
    }
}