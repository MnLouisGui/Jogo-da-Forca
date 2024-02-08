var gameon=false;
var frutas=[];
var vida=5;
var pontos=0;
var ongame;
var qtd;
var efruta;
var caractered;
var letra;
var a=true;

function salvar(){
    qtd=frutas.length+1;
    console.log(qtd)
    if(qtd<=10){
        var on=true;
    }else{
        alert("O jogo começou")
        if(a==true){
            efruta= frutas[Math.floor(Math.random() * 10)];
            console.log(efruta)
            letra = efruta.substring(0,1);
            document.getElementById("letra").innerHTML="Tema: Fruta com a letra "+letra.toUpperCase();
        }
        a=false;
        ongame=true;
    }


    while(on==true){
        var resposta = document.getElementById("resposta").value;
        if(resposta.length==5 || resposta.length==4){
            frutas.push(resposta)
            document.getElementById('resposta').value = ''
            console.log(frutas);
            console.log("itens na lista: "+frutas.length);
            if(qtd==10){
                document.getElementById("letra").innerHTML="Clique em 'salvar' para começar";
            }
            on=false;
        }else{
            document.getElementById('resposta').value = ''
            alert("A fruta digitada deve conter 5 ou 4 letras!!")
            on=false;
        }
    }
}

function responder(){
    if(ongame==true){
        var letra = efruta.substring(0,1);
        document.getElementById("letra").innerHTML="Tema: Fruta com a letra "+letra.toUpperCase();

        let el=document.getElementById("vida");
        var resposta = document.getElementById("resposta").value;
        if(resposta==efruta){
            efruta= frutas[Math.floor(Math.random() * 10)]

            document.getElementById('resposta').value = ''
            //acertos
            pontos++;
            document.getElementById("pontos").innerHTML=pontos;
            letra = efruta.substring(0,1);
            document.getElementById("letra").innerHTML="Tema: Fruta com a letra "+letra.toUpperCase();
            ongame==false;
        }else{
            vida--;
            console.log(vida)
            switch(vida){
                case 0:
                    const Imagem1 = document.getElementById("vida1");
                    Imagem1.src = "dead.png";
                    el.style.animation='bounce 2s';
                    setTimeout(function() {
                        el.style.animation = "";
                    }, 2000);
                case 1:
                    const Imagem2 = document.getElementById("vida2");
                    Imagem2.src = "dead.png";
                    el.style.animation='bounce 2s';
                    setTimeout(function() {
                        el.style.animation = "";
                    }, 2000);
                case 2:
                    const Imagem3 = document.getElementById("vida3");
                    Imagem3.src = "dead.png";
                    el.style.animation='bounce 2s';
                    setTimeout(function() {
                        el.style.animation = "";
                    }, 2000);
                case 3:
                    const Imagem4 = document.getElementById("vida4");
                    Imagem4.src = "dead.png";
                    el.style.animation='bounce 2s';
                    setTimeout(function() {
                        el.style.animation = "";
                    }, 2000);
                case 4:
                    const Imagem5 = document.getElementById("vida5");
                    Imagem5.src = "dead.png";
                    el.style.animation='bounce 1.5s';
                    setTimeout(function() {
                        el.style.animation = "";
                    }, 2000);
            }
            if(vida==0){
                alert("Fim de jogo\nPontuação: "+pontos+"\nFruta: "+efruta)
                location.reload()
            }
        }
    }else{
        alert("Ainda falta por mais palavras\nFaltam:"+(10-qtd))
    }
}