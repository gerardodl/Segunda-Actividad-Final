var wins=0;
var PCwins=0;
var PCeleccion;
var eleccion;
var i=1;
while(i==1){
eleccion=0;
eleccion = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"));

function numeroAleatorio(max) {
return Math.floor(Math.random() * max);
}  

PCeleccion = numeroAleatorio(3);
switch(PCeleccion){
    case 0:
    alert("PC elige piedra ✊");
        break;
    case 1:        
    alert("PC elige papel ✋");
        break;
    case 2:
    alert("PC elige tijera ✌️");
        break;
    }

    if (eleccion<1) {
    PCwins=PCwins+1;
    alert("Tu eliges MAL ELEGIDO");
    alert("PERDISTE");
} 
else {
if (eleccion>3) {
    PCwins=PCwins+1;
    alert("Tu eliges MAL ELEGIDO");
    alert("PERDISTE");
    }

else{

switch(eleccion){
    case 1:
    alert("Tu eliges piedra ✊");
        break;
    case 2:
    alert("Tu eliges papel ✋");
        break;
    case 3:
    alert("Tu eliges tijera ✌️");
        break;
    }

if (eleccion==1) {
switch (PCeleccion) {
    case 0:
    alert("EMPATE");
        break;
    case 1:
    PCwins=PCwins+1;
    alert("PERDISTE");
        break;
    case 2:
    wins=wins+1;
    alert("GANASTE");
        break;
        }
    }

else{
    if (eleccion==2) {
switch (PCeleccion) {
    case 0:
    wins=wins+1;
    alert("GANASTE");
        break;
    case 1:
    alert("EMPATE");
        break;
    case 2:
    PCwins=PCwins+1;
    alert("PERDISTE");
        break;
        }
    } 

else{
if (eleccion==3){
switch (PCeleccion){
    case 0:
    PCwins=PCwins+1;
    alert("PERDISTE");
        break;
    case 1:
    wins=wins+1;
    alert("GANASTE");
        break;
    case 2:
    alert("EMPATE");
        break;
                }
            }
            }
        }
    }
}

if ((wins==3) || (PCwins==3))
    {
i=2;

    }
}

alert("Ganaste "+ wins +" veces. Perdiste "+ PCwins + " veces");