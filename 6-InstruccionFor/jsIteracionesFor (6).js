function mostrar()
{


var numero = parseInt(prompt(" ingrese un numero"));
var contadorPares = 0;

while (isNaN(numero )||numero < 1){
    numero = parseInt(prompt("Dato inválido. reingrese número."));
}
for (var contador=1 ; contador <= numero; contador ++){
if (contador %2==0){
    console.log(contador);
    contadorPares ++;
}
}
console.log("Cantidad de pares: " + contadorPares);
}
//FIN DE LA FUNCIÓN