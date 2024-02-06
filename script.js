var vida=5;
var pontos=0;
var frutas=["maçã", "melancia", "maracuja", "acerola", "abacaxi", "açaí", "banana", "bacuri", "bergamota", "cereja", "caja","cupuaçu","pera","uva",];
var efruta= frutas[Math.floor(Math.random() * 12)];
var letra = efruta.substring(0,1);
document.getElementById("letra").innerHTML="Tema: Fruta com a letra "+letra.toUpperCase();

var caractered=efruta.length;
document.getElementById("contador").innerHTML='Tem '+caractered+" Letras";

console.log(efruta);

function responder(){
    let el=document.getElementById("vida");
    var resposta = document.getElementById("resposta").value;
    if(resposta==efruta){
        efruta= frutas[Math.floor(Math.random() * 12)]

        document.getElementById('resposta').value = ''
        //acertos
        pontos++;
        document.getElementById("pontos").innerHTML=pontos;
        var letra = efruta.substring(0,1);
        document.getElementById("letra").innerHTML="Tema: Fruta com a letra "+letra.toUpperCase();
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
            alert("Fim de jogo\nPontuação: "+pontos)
            location.reload()
        }
    }
}