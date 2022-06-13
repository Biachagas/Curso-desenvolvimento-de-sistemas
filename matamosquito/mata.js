
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

function ajustaPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth; 
    console.log(largura,altura); 

}
ajustaPalco();

var Temp = setInterval(function(){
    tempo -= 1
    if(tempo < 0)
    {
        clearInterval(Temp);
        clearInterval(criarMosca);
        window.location.href = "vitoriajogo.html";
    }
    else{
        document.getElementById('meuCronometro').innerHTML = tempo;
    }
},1000)

function posRandomica(){

    //remover o elemento mosca (caso existir)
if (document.getElementById('tempomosca')){
document.getElementById('tempomosca').remove();

if (vidas > 3){
    window.location.href = "finaljogo.html";
}

else{
document.getElementById('v' + vidas).src="imagem/coracao_vazio.png";
vidas ++
    }

}

var posx = Math.floor(Math.random()* largura) -90;
var posy = Math.floor(Math.random() * altura) -90;

posx = posx < 0?0: posx;
posy = posy < 0?0: posy;

console.log(posx,posy);

var mosca  = document.createElement('img');
mosca.src='imagem/mosca.png';
document.body.appendChild(mosca);
mosca.className = tamanhoMosquito() + ' ' + ladoaleatorio();
mosca.style.left = posx + 'px';
mosca.style.top = posy + 'px';
mosca.style.position = 'absolute';
mosca.id = 'tempomosca';
console.log(ladoaleatorio());

mosca.onclick = function(){
    this.remove();
}

}

function tamanhoMosquito(){
    var classe = Math.floor(Math.random() * 3);
    
    switch (classe){
        case 0:
            return 'mosca';
        case 1:
            return 'mosca2';
        case 2: 
            return 'mosca3';

    }
}

function ladoaleatorio (){
    var classe = Math.floor(Math.random() * 2);
    
    switch (classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
        
    }
}