function mostrar()
{
var marca;
var peso;
var temperatura;
var contadorTPar= 0;
var mayorPeso;
var marcaPesada;
var contadorMenor0= 0;
var acumuladorPeso= 0;
var promedioPeso;
var contador =0;
var menorPeso;
var seguir;
var flag= 0;

do {
marca = prompt("ingrese marca");
peso = parseInt(prompt("ingrese peso (1 - 100 kg)"));
while (isNaN(peso)|| peso > 100 || peso < 1){
    peso = parseInt(prompt("Ese no es un peso válido. Reingrese peso (1-100 kg)"));
}

temperatura=  parseInt(prompt("ingrese una temperatura (-30 a 30 grados)"));
while (isNaN(temperatura)|| temperatura > 30 || temperatura < -30){
temperatura = parseInt(prompt("Esa no es una temperatura válida. Reingrese temperatura (-30 a 30 grados)"));
}

if ( temperatura % 2== 0){
    contadorTPar ++;
}

if ( peso > mayorPeso || flag == 0){
    mayorPeso = peso;
    marcaPesada = marca;}
if (peso < menorPeso || flag ==0){
menorPeso= peso;
flag  = 1;
}

 if ( temperatura < 0  ) {
    contadorMenor0 ++
 }

acumuladorPeso = acumuladorPeso + peso
contador++

seguir = prompt("Desea ingresar otro producto? si=s");
} while (seguir == "s");

promedioPeso = acumuladorPeso / contador

document.write("nfksnlf" + promedioPeso + "</br>")



}
