function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || formAno.value > ano){// microvalidação aqui se a caixa está vazia, se o comprimento do valor é igual zero e se o valor é acima de ano 
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
       var fsexo = document.getElementsByName('radsex')
       var idade = ano - Number(formAno.value)
       res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id','foto')

       if(fsexo[0].checked){
            genero='homem' // se tiver marcado homem, faça todo o if abaixo

        if(idade>=0 && idade <3){ 
                img.setAttribute('src', 'bebe-menino.png')
                document.body.style.background = `#87CEEB`
                document.body.style.color = `#00008B`
               
        }else if(idade<12){
                img.setAttribute('src', 'crianca-menino.png') 
                document.body.style.background = `#4169E1`
                document.body.style.color = `#008080`   
               
        } else if(idade<21){
                img.setAttribute('src', 'jovem-menino.png')
                document.body.style.background = `#4682B4`
                document.body.style.color = `#00008B`
                  
        } else if(idade<50){
                img.setAttribute('src', 'adulto-menino.png')
                document.body.style.background = `#00BFFF`
                document.body.style.color = `#00008B`
                 
        } else {
                img.setAttribute('src', 'idoso-menino.png')
                document.body.style.background = `#1E90FF`
                document.body.style.color = `#00008B`
                
        }
        
       }else if(fsexo[1].checked){// se tiver marcado mulher, seta os ifs abaixo
        
        genero='mulher' 

        if(idade>=0 && idade <3){ 
                img.setAttribute('src', 'bebe-menina.png')
                document.body.style.background = `#DDA0DD` // coloquei a cor em toda a pagina
                document.body.style.color = `#DC143C`// coloquei cor nas letras
                 
        } else if(idade<12){
                img.setAttribute('src', 'crianca-menina.png')
                document.body.style.background = `#EE82EE`
                document.body.style.color = `#DC143C`
                   
        } else if(idade<21){
                img.setAttribute('src', 'jovem-menina.png')  
                document.body.style.background = `#DB7093`
                document.body.style.color = `#DC143C` 
                 
        } else if(idade<50){
                img.setAttribute('src', 'adulta-menina.png')
                document.body.style.background = `#F08080`
                document.body.style.color = `#DC143C`
                 
        } else {
                img.setAttribute('src', 'idosa-menina.png')
                document.body.style.background = `#DC143C`
                document.body.style.color = `#DC143C`
                 
        }

       }
      
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img) // adcionar um elemento
    }
}