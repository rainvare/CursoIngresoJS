function mostrar()
{
var letra;
var numero;
var contadorPares = 0;
var contadorImpares = 0;
var contadorCeros =0;
var acumuladorPositivos= 0;
var acumuladorNegativos =0 ;
var mayor;
var menor;
var letraMayor;
var letraMenor;
var flag = 0;
var contador = 0;
var seguir;
var promedioPositivos;

do {

letra= prompt(" ingrese una letra");
while ( !(( letra>= "A" && letra <= "Z") || (letra >= "a" && letra <= "z"))  )
{
 letra = prompt ("Eso no es una letra. Ingrese una letra");
}

numero = parseInt(prompt("Ingrese un numero en -100 y 100: "));
 while (numero <= -100 || numero > 100|| isNaN(numero))
 {
     numero= parseInt(prompt("Eso no es un número válido. Ingrese un numero entre - 100 y 100: "));
 }

// paridad
 if(numero % 2 == 0){
contadorPares++;
 }
else {
     contadorImpares ++;
 }
//signo
if (numero > 0 ){
    acumuladorPositivos = acumuladorPositivos + numero;
}
else if (numero < 0 ){
    acumuladorNegativos = acumuladorNegativos + numero;
}
else {
    contadosCeros ++;
}

// mayores y menores
if (numero> mayor || flag == 0){
    mayor= numero;
    letraMayor= letra;
}
if (numero < menor || flag== 0 ){
    menor= numero;
    letraMenor = numero;
    flag= 1;}
    contador ++;


   seguir= prompt ("¿Quiere ingresar otro dato? Ingrese s.");

}while (seguir == "s");

// promedio
 promedioPositivos= acumuladorPositivos /contador;

// muestro por document write
 alert("cantidad de pares: " + contadorPares + "\n cantidad impares: " + contadorImpares + "\n  cantidad ceros: " + contadosCeros 
 + "\n el promedio de positivos es: " + promedioPositivos + "\n suma de negativos es: " + acumuladorNegativos
 +  "\n numero minimo " + menor + " letra menor " + letraMenor+ "\n numero mayor " + mayor + " letra mayor " + letraMayor);
}
