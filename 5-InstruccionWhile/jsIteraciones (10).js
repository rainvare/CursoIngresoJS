function mostrar()
{
	//declarar contadores y variables 
	var numero;
	var acumPositivos= 0;
	var acumNegativos=0;
	var acumCeros=0;
	var contadorPares=0;
	var contadorPositivos= 0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var promedioPos;
	var promedioNeg;
	var diferencia;

	var seguir='s';

	do
	{
// reescribo el valor de la variable en el dato usuario
	numero = parseInt( prompt ("Ingrese un numero"));
//valido el numero 
	while ( isNaN(numero))
	{
	numero= parseInt(prompt( "Eso no es un número. Ingrese un número"));
}
	// condición para los positivos
	if (numero> 0) 
	{
// operación con los positivos
acumPositivos = acumPositivos + numero;
contadorPositivos ++;
}
// condición para los negativos
	else if (numero < 0)
	{
// operación con los negativos
	acumNegativos= acumNegativos + numero;
// variable de control para identificar el ingreso de negativo
	contadorNegativos ++;
}
	else {
acumCeros=  contadorCeros ++
}
// cantidad pares
if (numero %2 == 0)
{
contadorPares ++
}
// variable de control para la repetición de la acción
 seguir = prompt ("¿Desea ingresar otro numero? (s) para seguir")

} while (seguir == "s");




// promedio 
if (contadorPositivos != 0){
promedioPos= acumPositivos/ contadorPositivos
}
promedioNeg= acumNegativos/ contadorNegativos


// diferencia entre pos y neg

diferencia= contadorPositivos - contadorNegativos



// muestro el resultado 
document.write("1-Suma de los negativos: "  + acumNegativos + "</br>");
document.write("2-Suma de los positivos: " + acumPositivos +"</br>" );
document.write("3-Cantidad de positivos: " + contadorPositivos +"</br>" );
document.write("4-Cantidad de negativos: " + contadorNegativos + "</br>");
document.write("5-Cantidad de ceros: " + acumCeros + "</br>");
document.write("6-Cantidad de números pares:" + contadorPares + "</br>");
document.write("7-Promedio de positivos; "+ promedioPos + "</br>");
document.write("8-Promedios de negativos: "+ promedioNeg + "</br>");
document.write("9-Diferencia entre positivos y negativos"+  diferencia +"</br>");
}//FIN DE LA FUNCIÓN