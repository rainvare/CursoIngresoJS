function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	do{
// reescribo el valor de la variable en el dato usuario
	numero = parseInt( prompt ("Ingrese un numero"));
//valido el numero 
while ( isNaN(numero))
{
	numero= parseInt(prompt( "Eso no es un número. Ingrese un número"));
}
	// condición para los positivos
if (numero>= 0) 
{
// operación con los positivos
positivo = positivo+ numero;
}
// condición para los negativos
else {
// operación con los negativos
	negativo= negativo * numero;
// variable de control para identificar el ingreso de negativo
	contador ++;
}

// variable de control para la repetición de la acción
respuesta = prompt ("¿Desea ingresar otro numero? (s) para seguir")
	} 
	while (respuesta == "s");
	
// verifico el ingreso de negativos
if (contador == 0 ){
	negativo = 0;
}
// muestro el resultado 
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;


}
//FIN DE LA FUNCIÓN